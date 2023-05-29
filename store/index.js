export const state = () => ({
    showNav: false,
    showOldSite: true,
    email: 'info@radisson-cruise.ru',
    tel: '+7 (495) 228-55-55'
})

export const getters = {
    isNavShow(state) {
        return state.showNav
    },
    isOldSiteShow(state) {
        return state.showOldSite
    },
    email: (state) => state.email,
    tel: (state) => state.tel,
}

export const mutations = {
    changeNavState(state, payload) {
        state.showNav = payload
    },
    changeOldSiteState(state, payload) {
        state.showOldSite = payload
    },
    setUtilInfo(state, {tel, email}) {
        state.email = email
        state.tel = tel
    }
}

export const actions = {
    async fetchCounter({ state }) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    },

    setUtilInfo({commit}, value) {
        commit('setUtilInfo', value);
    },

    /*nuxtServerInit(context, { req, redirect }) {
        if (req.headers.host.endsWith('com')) {
            this.app.i18n.defaultLocale = 'en'
        }
    },*/

}