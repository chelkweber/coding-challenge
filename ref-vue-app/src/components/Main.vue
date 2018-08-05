<template>
  <div class="main">
    <h1>Grow the Web with Refferals!</h1>
    <img src="../assets/ambassador-logo.jpg" alt="Ambassador Software" />
    <Form  v-on:createLink="createLink"></Form>
    <RefList v-bind:links="links" v-on:sendToLandingPage="sendToLandingPage"></RefList>
  </div>
</template>

<script>
  import Form from './Form'
  import RefList from './RefList'
  
  export default {
    components: {
      RefList,
      Form
    },
    data() {
      return {
        links: [
        {
          link: 'Spartans',
          count: 6
        }, {
          link: 'Wolverines',
          count: 2
        }, {
          link: 'Green Wave',
          count: 10
        }],
      };
    },
    props: ['mainLinks'],
    methods: {
      createLink(newLink) {
        this.links.push(newLink);
      },
      sendToLandingPage(linkName) {
        console.log(linkName + 'main');
        this.$emit('sendToLandingPage', linkName);
      }
    }
  }
</script>

<style>
  
  .main {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .main img {
    width: 60%;
    max-width: 600px;
    margin: 0 auto;
    height: auto;
  }
    
</style>