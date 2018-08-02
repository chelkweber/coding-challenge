<template>
  <div class="main">
    <h1>Grow the Web with Refferals!</h1>
    <Form  v-on:createLink="createLink"></Form>
    <RefList v-bind:links="links"></RefList>
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
          link: 'Spartans'
        }, {
          link: 'Wolverines',
        }, {
          link: 'Green Wave',
        }],
    };
  },
  methods: {
    createLink(newLink) {
      console.log(this.links);
      this.links.push(newLink);
    }
  }
  }
</script>

<style>
    
</style>