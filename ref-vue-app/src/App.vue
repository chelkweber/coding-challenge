<template>
  <div id="app">
    <router-link :to="{ name: 'Main' }" v-bind:links=" links">Main</router-link>
    <router-link to="/landing">Landing</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {
    },
    data() {
        return {
          links: [
          {
            link: 'Spartans',
            count: 0
          }, {
            link: 'Wolverines',
            count: 0
          }, {
            link: 'Green Wave',
            count: 0
          }],
        };
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
