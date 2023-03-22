export const state = () => ({
    showNav: false,
})

export const getters = {
    isNavShow(state) {
        return state.showNav
    }
}

export const mutations = {
    changeNavState(state, payload) {
        state.showNav = payload
    }
}

export const actions = {
    async fetchCounter({ state }) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    }
}