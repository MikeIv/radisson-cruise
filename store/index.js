export const state = () => ({
    showNav: false,
    showOldSite: true,
})

export const getters = {
    isNavShow(state) {
        return state.showNav
    },
    isOldSiteShow(state) {
        return state.showOldSite
    }
}

export const mutations = {
    changeNavState(state, payload) {
        console.log('changeNavState', payload);
        state.showNav = payload
    },
    changeOldSiteState(state, payload) {
        console.log('changeOldSiteState', payload);
        state.showOldSite = payload
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