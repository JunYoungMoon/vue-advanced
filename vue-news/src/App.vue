<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave-to
  /* .routing-fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
