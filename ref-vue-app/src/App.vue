<template>
  <div id="app">
    <Landing v-show="showLanding" v-bind:linkName="linkName" v-on:backToMain="backToMain"></Landing>
    <Main v-show="!showLanding" v-on:sendToLandingPage="sendToLandingPage"></Main>
  </div>
</template>

<script>
  import Main from './components/Main'
  import Landing from './components/Landing'
  
  export default {
    components: {
      Main,
      Landing
    },
    data () {
      return {
        linkName: '',
        showLanding: false
      }
    },
    methods: {
      sendToLandingPage(linkName) { 
        this.linkName = linkName;
        this.showLanding = true;
        console.log(this.linkName);
      },
      backToMain() {
        this.showLanding = false;
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
