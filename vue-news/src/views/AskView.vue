<template>
	<div>
		<div v-for="item in $store.state.ask" v-bind:key="item.id">
			{{item.title}}
		</div>
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