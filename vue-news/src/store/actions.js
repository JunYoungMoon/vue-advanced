import {
	fetchJobsList,
	fetchNewsList
} from '../api/index.js';

export default{
	FETCH_JOBS({ commit }) {
		return fetchJobsList().then(response => commit('SET_JOBS', response.data));
	},
	FETCH_NEWS({ commit}) {
		return fetchNewsList().then(response => commit('SET_NEWS', response.data));
	}
}
