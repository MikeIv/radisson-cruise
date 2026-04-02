export const RUSSIAN_PHONE_MASK = '+{7} (000) 000-00-00'
export const INTERNATIONAL_PHONE_MASK = '+000000000000000'

export const phoneMaskConfig = {
  mask: [
    {
      mask: RUSSIAN_PHONE_MASK,
      startsWith: '7',
    },
    {
      mask: INTERNATIONAL_PHONE_MASK,
      startsWith: '',
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, '')
    return dynamicMasked.compiledMasks.find((item) => number.indexOf(item.startsWith) === 0)
  },
  lazy: true,
}

export const phoneMaskList = [RUSSIAN_PHONE_MASK, INTERNATIONAL_PHONE_MASK]
