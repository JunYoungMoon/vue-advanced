<template>
	<div>
		<div v-for="job in this.$store.state.jobs" v-bind:key="job.id">
			{{job.title}}	
		</div>
	</div>
</template>

<script>
export default {
	created(){
		//Arrow function 사용 한줄 코드 축약
		//this 컴포넌트 영역 동일
		// fetchJobsList()
		// 	.then(response => this.jobs = response.data)
		// 	.catch(error =>	console.log(error));
		this.$store.dispatch('FETCH_JOBS')
			.then(() => console.log('success'))
			.catch(() => console.log('fail'));
	}

}
</script>

<style>

</style>