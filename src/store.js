import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    selectedPhoto: null,
    errors: [],
    page: 0,
    selectionList: [],
    comments: [],
    commentPage: 0 
  },
  getters: {
    getPhotos: state => {
      return state.photos.slice(state.page, state.page + 10)      
    },
    getComments: state => {
      return state.comments.filter( comment => comment.postId === state.selectedPhoto.id )
    }
  },
  mutations: {
    ADD_ERROR (state, payload) {
      state.errors.push(payload)
    }, 
    GET_PHOTOS (state, payload) {
      state.photos = payload.map(item => {
        return {
          ...item,
          isSelected: item.isSelected || false
        }
      })
    },
    UPDATE_PAGE (state, payload) {
      if(payload) {
        state.page += 10 
      } else {
        if (state.page > 0) {
          state.page -= 10
        }
      }
    },
    SELECT_PHOTO (state, payload) {
      state.selectedPhoto = payload
    },
    ADD_TO_SELECTION (state, payload) {
      state.selectionList.push(payload)
    },
    REMOVE_FROM_SELECTION (state, index) {
      state.selectionList.splice(index, 1)
    },
    ADD_COMMENTS (state, payload) {
      state.comments = payload
    },
    UPDATE_COMMENT (state, comment) {
      state.comments = state.comments.map( item => {
        if (item.id === comment.id) {
          return comment
        }
        return item
      })
    }
  },
  actions: {
    updatePagination ({commit}, increase) {
      commit('UPDATE_PAGE', increase)  
    },
    async fetchPhotos ({commit}) {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
        commit('GET_PHOTOS', res.data)
        return 
      } catch (error) {
        commit('ADD_ERROR', error)
      }
    },
    async fetchComments ({commit, state}, id) {
      if (state.comments.length) return
      try {
        const res = await axios(`https://jsonplaceholder.typicode.com/photos/${id}/comments`)
        console.log(res.data)
        commit('ADD_COMMENTS', res.data)
      } catch (error) {
        commit('ADD_ERROR', error)
      }
    },
    selectPhoto ({commit, state, dispatch}, photo) {
      if (photo.id !== state.selectedPhoto) {
        commit('SELECT_PHOTO', photo)
        dispatch('fetchComments', photo.id)
      }
    },
    addToSelection ({commit, state}, photo) {
      const isSelected = state.selectionList.filter( item => item.id === photo.id )
      if (!isSelected.length) {
        photo.isSelected = true
        commit('ADD_TO_SELECTION', photo)
      }
    },
    removeFromSelection ({commit, state}, photo) {
      const getIndex = state.selectionList.findIndex(item => item.id === photo.id)
      photo.isSelected = false
      if (getIndex > -1) {
        commit('REMOVE_FROM_SELECTION', getIndex)
      }
    },
    updateComment ({commit}, comment) {      
      commit('UPDATE_COMMENT', comment)
    }
  }
})
