<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id}}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created}}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
  components:{
    UserProfile
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userId);
  },
  computed:{
    userInfo(){
        return this.$store.state.user;
    }
  }
}
</script>

<style>

</style>