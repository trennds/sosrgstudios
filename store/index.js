import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            navbarClass: ''
        }),
        mutations: {
            change(state, className) {
                state.navbarClass = className
            }
        }
    })
}

export default createStore