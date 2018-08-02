<template>
  <div id="app">
    <router-link :to="{ name: 'Main' }">Main</router-link>
    <router-link to="/landing">Landing</router-link>
    <router-view v-on:sendToLandingPage="sendToLandingPage" v-bind:linkName="linkName"></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {
    },
    data () {
      return {
        linkName: ''
      }
    },
    methods: {
      sendToLandingPage(linkName) { 
        this.linkName = linkName;
        console.log(this.linkName);
      }
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
