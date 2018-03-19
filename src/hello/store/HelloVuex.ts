import {Commit, Action, ActionTree} from 'vuex';
interface data {
    name: string,
    count: number
}
const state: data = {
    name: 'Fynn',
    count: 2
}

const getters = {
    exclamationMarks: (state: data): string =>{
        return Array(state.count+1).join('!')
    }
}

const increment: Action<data, any> = (context:{commit: Commit}) => {
    context.commit('increment')
}

const decrement: Action<data, any> = (context: {commit: Commit}) => {
    context.commit('decrement')
}

const mutations = {
    increment (state:data) {
        ++state.count
    },
    decrement (state: data) {
        state.count > 1 && --state.count
    }
}

const actions: ActionTree<data, any> = {
    increment,
    decrement
}

export default {
    state,
    actions,
    getters,
    mutations,
    namespaced: true
}