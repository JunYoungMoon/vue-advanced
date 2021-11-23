<template>
	<div>
    	<p v-for="ask in this.$store.state.ask" :key="ask.id">
			<router-link :to="`item/${ask.id}`">{{ ask.title }}</router-link><br>
			<small>
				{{ ask.time_ago }} by 
				<router-link :to="'/user/' + ask.user">{{ ask.user }}</router-link>
    		</small>
		</p>
	</div>
</template>

<script>
//import { fetchAskList } from '../api/index.js'	

export default {
	// data(){
	// 	return{
	// 		ask : []
	// 	}
	// },
	created(){
		//Arrow function 사용 
		//this 컴포넌트 영역 동일
		// fetchAskList()
		// 	.then(response => {
		// 		this.ask = response.data;
		// 	}).catch(error => {
		// 		console.log(error);
		// 	});
		this.$store.dispatch('FETCH_ASK')
			.then(() => console.log('success'))
			.catch(() => console.log('fail'));
	}

}
</script>

<style>

</style>