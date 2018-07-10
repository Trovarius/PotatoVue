<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <Watchers/>
  </div>
</template>



<script>
import HelloWorld from './components/HelloWorld.vue'
import Directives from './components/Directives.vue'
import Events from './components/Events.vue'
import Watchers from './components/Watchers.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Directives,
    Events,
    Watchers
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>