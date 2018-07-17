<template>
  <div id="app">
    <img src="./assets/logo.png" width="200" height="200px">
    <router-link to="/">Home</router-link>
    <router-link to="/Login">Login</router-link>
  <router-view></router-view>

  </div>
</template>


<script>
import HelloWorld from "./components/HelloWorld.vue";
import Directives from "./components/Directives.vue";
import Events from "./components/Events.vue";
import Watchers from "./components/Watchers.vue";
import Computed from "./components/Computed.vue";
import Props from "./components/Props.vue";
import Slots from "./components/Slots.vue";
import Filters from "./components/Filters.vue";
import EventChild from "./components/EventChild.vue";
import Input from "./components/Input.vue";
import InputResult from "./components/InputResult.vue";
import { store } from "./store/store"

export default {
  name: "app",
  store,
  components: {
    HelloWorld,
    Directives,
    Events,
    Watchers,
    Computed,
    Props,
    Slots,
    Filters,
    EventChild,
    Input,
    InputResult
  },
  data() {
    return {
      color: "green"
    };
  },
  methods: {
    handleParentClick(greeting, saying) {
      alert(greeting + saying);
    }
  },
  mounted() {
    this.$root.$on("clickedSomething", () => {
      alert('algo aconteceu!!! ganhei um inscrito!! UHUUUUUUUUU')
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>