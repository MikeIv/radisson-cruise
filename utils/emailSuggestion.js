const DISTANCE_LIMIT = 2

const HOMOGLYPHS = {
  а: 'a',
  е: 'e',
  о: 'o',
  р: 'p',
  с: 'c',
  у: 'y',
  х: 'x',
  к: 'k',
}

const KNOWN_DOMAINS = [
  'gmail.com',
  'googlemail.com',
  'yandex.ru',
  'ya.ru',
  'yandex.com',
  'yandex.by',
  'yandex.kz',
  'mail.ru',
  'bk.ru',
  'list.ru',
  'inbox.ru',
  'rambler.ru',
  'icloud.com',
  'me.com',
  'outlook.com',
  'hotmail.com',
  'live.com',
  'yahoo.com',
  'mail.com',
  'proton.me',
]

const SUGGEST_DOMAINS = [
  'gmail.com',
  'yandex.ru',
  'ya.ru',
  'mail.ru',
  'bk.ru',
  'list.ru',
  'inbox.ru',
  'rambler.ru',
  'icloud.com',
  'outlook.com',
  'hotmail.com',
  'yahoo.com',
]

const ALIASES = {
  'gmail.ru': 'gmail.com',
  'gmail.su': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmal.com': 'gmail.com',
  'gmial.com': 'gmail.com',
  'gmil.com': 'gmail.com',
  'gnail.com': 'gmail.com',
  'icloud.ru': 'icloud.com',
  'hotmal.com': 'hotmail.com',
  'hotmial.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'outloo.com': 'outlook.com',
  'ynadex.ru': 'yandex.ru',
  'yandx.ru': 'yandex.ru',
  'yande.ru': 'yandex.ru',
  'ramler.ru': 'rambler.ru',
  'ramber.ru': 'rambler.ru',
}

const TLD_TYPOS = {
  con: true,
  cmo: true,
  coom: true,
}

const CANONICAL_BY_SLD = {
  gmail: 'gmail.com',
  googlemail: 'googlemail.com',
  yandex: 'yandex.ru',
  ya: 'ya.ru',
  rambler: 'rambler.ru',
  icloud: 'icloud.com',
  outlook: 'outlook.com',
  hotmail: 'hotmail.com',
  live: 'live.com',
  yahoo: 'yahoo.com',
  bk: 'bk.ru',
  list: 'list.ru',
  inbox: 'inbox.ru',
}

const knownDomains = new Set(KNOWN_DOMAINS)

function foldHomoglyphs(value) {
  let folded = ''
  for (let i = 0; i < value.length; i++) {
    const char = value.charAt(i)
    folded += HOMOGLYPHS[char] || char
  }
  return folded
}

function splitDomain(domain) {
  const dot = domain.lastIndexOf('.')
  return {
    sld: domain.slice(0, dot),
    tld: domain.slice(dot + 1),
  }
}

function levenshtein(left, right) {
  if (left === right) return 0
  if (Math.abs(left.length - right.length) > DISTANCE_LIMIT) return DISTANCE_LIMIT + 1
  if (!left.length) return right.length
  if (!right.length) return left.length

  let previous = new Array(right.length + 1)
  let current = new Array(right.length + 1)
  for (let column = 0; column < previous.length; column++) previous[column] = column

  for (let row = 1; row <= left.length; row++) {
    current[0] = row
    let rowMin = current[0]
    const leftChar = left.charAt(row - 1)
    for (let column = 1; column <= right.length; column++) {
      const cost = leftChar === right.charAt(column - 1) ? 0 : 1
      const dist = Math.min(
        previous[column] + 1,
        current[column - 1] + 1,
        previous[column - 1] + cost
      )
      current[column] = dist
      if (dist < rowMin) rowMin = dist
    }
    if (rowMin > DISTANCE_LIMIT) return DISTANCE_LIMIT + 1
    const swap = previous
    previous = current
    current = swap
  }

  return previous[right.length]
}

function suggestion(local, domain) {
  return {
    address: local,
    domain,
    full: local + '@' + domain,
  }
}

function closestSameTld(domain) {
  const typed = splitDomain(domain)
  let bestDomain = ''
  let bestDistance = DISTANCE_LIMIT + 1
  let tie = false

  for (let i = 0; i < SUGGEST_DOMAINS.length; i++) {
    const target = SUGGEST_DOMAINS[i]
    if (splitDomain(target).tld !== typed.tld) continue
    const distance = levenshtein(domain, target)
    if (distance < bestDistance) {
      bestDistance = distance
      bestDomain = target
      tie = false
    } else if (distance === bestDistance) {
      tie = true
    }
  }

  if (tie || !bestDomain || bestDistance > DISTANCE_LIMIT || bestDomain === domain) return ''

  for (let i = 0; i < SUGGEST_DOMAINS.length; i++) {
    const target = SUGGEST_DOMAINS[i]
    const targetParts = splitDomain(target)
    if (targetParts.tld === typed.tld) continue
    if (levenshtein(typed.sld, targetParts.sld) <= bestDistance) return ''
  }

  return bestDomain
}

export function suggestEmail(value) {
  const trimmed = String(value || '').trim()
  const parts = trimmed.split('@')
  if (parts.length !== 2) return null

  const local = parts[0].trim()
  const domainRaw = parts[1].trim()
  if (!local || !domainRaw || domainRaw.indexOf('.') === -1) return null
  if (domainRaw.charAt(0) === '.' || domainRaw.charAt(domainRaw.length - 1) === '.') return null
  if (domainRaw.indexOf('..') !== -1) return null

  const lower = domainRaw.toLowerCase()
  const folded = foldHomoglyphs(lower)
  if (folded.indexOf(' ') !== -1) return null

  if (knownDomains.has(folded)) {
    return folded === lower ? null : suggestion(local, folded)
  }

  const alias = ALIASES[folded]
  if (alias) return suggestion(local, alias)

  const typed = splitDomain(folded)
  if (TLD_TYPOS[typed.tld] && CANONICAL_BY_SLD[typed.sld]) {
    return suggestion(local, CANONICAL_BY_SLD[typed.sld])
  }

  const closest = closestSameTld(folded)
  return closest ? suggestion(local, closest) : null
}
