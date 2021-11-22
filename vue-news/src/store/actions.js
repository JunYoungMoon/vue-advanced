import {
	fetchJobsList,
	fetchNewsList,
	fetchAskList,
	fetchUser,
	fetchItem
} from '../api/index.js';

export default{
	FETCH_JOBS({ commit }) {
		return fetchJobsList().then(response => commit('SET_JOBS', response.data));
	},
	FETCH_NEWS({ commit}) {
		return fetchNewsList().then(response => commit('SET_NEWS', response.data));
	},
	FETCH_ASK({ commit}) {
		return fetchAskList().then(response => commit('SET_ASK', response.data));
	},
	FETCH_USER({ commit }, userId) {
		return fetchUser(userId).then(res => commit('SET_USER', res.data));
	},
	FETCH_ITEM({ commit }, itemId) {
		return fetchItem(itemId).then(res => commit('SET_ITEM', res.data));
	},
}
