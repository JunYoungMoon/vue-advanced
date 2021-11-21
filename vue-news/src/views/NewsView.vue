<template>
	<div>
		<div v-for="user in this.$store.state.users" v-bind:key="user.id">
			{{user.title}}
		</div>
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