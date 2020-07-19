import axios from 'axios'

// Create store
export const state = () => ({
    posts: {}
})

// Getters
export const getters = {
    posts(state) {
        return state.posts
    }
}

// Mutations
export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    }
}

// Actions 
export const actions = {
    async nuxtServerInit({commit}) {
        let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/")
        commit("SET_POSTS", data)
    }
    // setPosts({commit}, posts) {
    //    commit("SET_POSTS", posts)
    // }
}