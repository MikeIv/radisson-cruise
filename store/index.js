import axios from "axios";

export const state = () => ({
    showNav: false,
    showOldSite: true,
    email: 'info@radisson-cruise.ru',
    tel: '+7 (495) 228-55-55',
    tramsDoc: '/upload/docs/20230616_160103_648c5d0f0fc4b.pdf',
    refundDoc: null,
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
    refundDoc: (state) => state.refundDoc,
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
    },

    setRefundDoc(state, doc) {
        state.refundDoc = doc
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
            `${this.$config.baseURL}docs?id=5&lang=${this.$i18n.locale}`);
        commit('setTramsDoc', documentsData.data[0].doc);
    },
    async getRefundDoc({commit}) {
        const documentsData = await axios.get(
            `${this.$config.baseURL}docs?id=3&lang=${this.$i18n.locale}`);
        commit('setRefundDoc', documentsData.data[0].doc);
    },
}