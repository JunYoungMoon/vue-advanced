<template>
	<div>
		<div v-for="job in jobs" v-bind:key="job.id">
			{{job.title}}	
		</div>
	</div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
	data(){
		return{
			jobs:[]
		}
	},
	created(){
		//Arrow function 사용 한줄 코드 축약
		//this 컴포넌트 영역 동일
		fetchJobsList()
			.then(response => this.jobs = response.data)
			.catch(error =>	console.log(error));
	}

}
</script>

<style>

</style>