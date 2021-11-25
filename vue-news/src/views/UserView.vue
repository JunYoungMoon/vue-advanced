<template>
  <div>
    <user-profile></user-profile>
    <!-- <p>id : {{ fetchedUser.id }}</p>
    <p>karma : {{ fetchedUser.karma }}</p>
    <p>joined : {{ fetchedUser.created }}</p> -->
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
  // computed: {
  //   ...mapGetters(['fetchedUser']),
  // },

}
</script>

<style>

</style>