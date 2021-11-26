import {
    fetchJobsList,
    fetchNewsList,
    fetchAskList,
    fetchUser,
    fetchItem, fetchList
} from '../api/index.js';

export default {
    FETCH_JOBS({commit}) {
        return fetchJobsList().then(response => commit('SET_JOBS', response.data));
    },
    FETCH_NEWS({commit}) {
        return fetchNewsList().then(response => commit('SET_NEWS', response.data));
    },
    FETCH_ASK({commit}) {
        return fetchAskList().then(response => commit('SET_ASK', response.data));
    },
    FETCH_LIST({commit}, pageName) {
        return fetchList(pageName).then(response => commit('SET_LIST', response.data));
    },
    FETCH_USER({commit}, userId) {
        return fetchUser(userId).then(response => commit('SET_USER', response.data));
    },
    FETCH_ITEM({commit}, itemId) {
        return fetchItem(itemId).then(response => commit('SET_ITEM', response.data));
    },
}
