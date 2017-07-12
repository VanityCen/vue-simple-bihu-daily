import Vue from 'vue'
import Vuex from 'vuex'
import { getLatestNews, getNewsDetail } from '@/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latestNews: [],
    detail: {}
  },
  mutations: {
    SET_LATEST_NEWS: (state, data) => {
      if (Object.prototype.toString.apply(data) === '[object Array]') {
        state.latestNews = data
      }
    },
    SET_DETAIL: (state, data) => {
      state.detail = data
    }
  },
  actions: {
    GET_LATEST_NEWS: ({commit}) => {
      return getLatestNews().then(({status, data}) => {
        if (status === 200) {
          commit('SET_LATEST_NEWS', data.stories)
        }
      })
    },
    GET_NEWS_DETAIL: ({commit}, {id}) => {
      return getNewsDetail({id}).then(({status, data}) => {
        if (status === 200) {
          commit('SET_DETAIL', data)
        }
      })
    }
  }
})
