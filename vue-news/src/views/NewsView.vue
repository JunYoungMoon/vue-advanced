<template>
	<div>
		<ul class="news-list">
			<li v-for="news in this.$store.state.news" :key="news.id" class="post">
				<!-- 포인트 영역 -->
				<div class="points">
					{{ news.points }}
				</div>	
				<!-- 기타 정보 영역 -->
				<div>
					<p class="news-title">
						<a :href="news.url">{{ news.title }}</a>
					</p>
					<small class="link-text">
						{{ news.time_ago }} by  
						<router-link :to="`/user/${news.user}`">{{ news.user }}</router-link>
					</small>
				</div>
			</li>
		</ul>
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

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>