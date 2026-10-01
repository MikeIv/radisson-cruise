function isTramPath(path) {
  return path === '/trams' || path === '/trams/' || path.startsWith('/trams/')
}

export default function ({ route, redirect, app, $config }) {
  if ($config.tramsSeasonOpen || !isTramPath(route.path)) {
    return
  }

  const home = typeof app.localePath === 'function' ? app.localePath('/') : '/'
  return redirect(home)
}
