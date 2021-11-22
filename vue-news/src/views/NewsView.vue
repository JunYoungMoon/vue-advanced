<template>
	<div>
		<p v-for="news in this.$store.state.news" :key="news.id">
			<a :href="news.url">{{ news.title }}</a><br>
    		<small>{{ news.time_ago }} by {{ news.domain }}</small>
		</p>
	</div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';
	
export default {
	// data(){
	// 	return {
	// 		users:[]
	// 	}
	// },
	created(){
		// var vm = this;
		// function() {} 사용
		// this 영역 다름
		// fetchNewsList()
		// 	.then(function(response){
		// 		vm.users = response.data;
		// 	}).catch(function(error){
		// 		console.log(error)
		// 	});
		
		this.$store.dispatch('FETCH_NEWS')
			.then(() => console.log('success'))
			.catch(() => console.log('fail'));
	}
}
</script>

<style>

</style>