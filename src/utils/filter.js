const proxyServer = 'http://images.weserv.nl/?url='

export function proxyImage (url) {
  return url.replace(/https?:\/{2}/g, proxyServer)
}
