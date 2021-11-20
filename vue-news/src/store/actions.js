import {
	fetchJobsList,
} from '../api/index.js';

export default{
	FETCH_JOBS({ commit }) {
		return fetchJobsList().then(response => commit('SET_JOBS', response.data));
	},
}
