import axios from 'axios'

const proxyServer = 'http://images.weserv.nl/?url='
const instance = axios.create({
  baseURL: '/api/4/',
  transformResponse: [(data) => {
    return JSON.parse(data.replace(/https?:(\\?\/){2}(pic\d\.zhimg\.com\\?\/.)/g, `${proxyServer}$2`))
  }]
})

export function getLatestNews () {
  return instance.get('news/latest')
}

export function getNewsDetail ({id}) {
  return instance.get('news/' + id)
}
