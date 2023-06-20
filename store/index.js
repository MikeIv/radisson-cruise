import axios from "axios";

export const state = () => ({
    showNav: false,
    showOldSite: true,
    email: 'info@radisson-cruise.ru',
    tel: '+7 (495) 228-55-55',
    tramsDoc: '/upload/docs/20230616_160103_648c5d0f0fc4b.pdf',
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
    tramsDoc: (state) => state.tramsDoc,
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
    },

    setTramsDoc(state, doc) {
        state.tramsDoc = doc
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

    async getActualDoc({commit}) {
        const documentsData = await axios.get(
            `${this.$config.baseURL}docs?lang=${this.$i18n.locale}`);
        documentsData.data.find((item) => {
            if (item.id === 5) {
                commit('setTramsDoc', item.doc);
            }
        });
    }

    /*nuxtServerInit(context, { req, redirect }) {
        if (req.headers.host.endsWith('com')) {
            this.app.i18n.defaultLocale = 'en'
        }
    },*/

}