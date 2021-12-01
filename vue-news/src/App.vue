<template>
  <div id="app">
    <ToolBar></ToolBar>
    <BarChart></BarChart>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import {bus} from './utils/bus.js';
import BarChart from "./components/BarChart";

export default {
  components: {
    ToolBar,
    Spinner,
    BarChart
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    console.log(process.env.VUE_APP_TITLE);
    bus.$on('start:spinner', () => this.startSpinner());
    bus.$on('end:spinner', () => this.endSpinner());
  },
  beforeDestroy() {
    bus.$off('start:spinner', () => this.startSpinner());
    bus.$off('end:spinner', () => this.endSpinner());
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
