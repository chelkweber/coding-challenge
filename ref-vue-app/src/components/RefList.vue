<template>
  <div class="ref-list">
    <div class="labels">
      <p class="title">Link Title</p>
      <p class="clicks">Clicks</p>
      <p class="edit">Edit</p>
      <p class="delete">Delete</p>
    </div>
    <ul>
      <RefLink v-on:deleteLink="deleteLink" v-on:sendToLandingPage="sendToLandingPage" v-for="link in links" :link.sync="link" class="link"></RefLink>
    </ul>
  </div>
</template>

<script>
    import RefLink from './RefLink'
    
    export default {
        props: ['links'],
        data () {
            return {
            }
        },
        components: {
          RefLink
        },
        methods: {
          deleteLink(link) {
            var linkIndex = this.links.indexOf(link);
            this.links.splice(linkIndex, 1);
          },
          updateInfo(link) {
            var linkIndex = this.links.indexOf(link);
            this.links[linkIndex].count = link.count
            this.updateMain(this.links);
          },
          sendToLandingPage(linkName) {
            this.$emit('sendToLandingPage', linkName);
          }
        }
    }
</script>

<style>
  
  .ref-list {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .labels {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    font-weight: 600;
  }
  
  .labels .title {
    display: inline;
    text-align: left;
    width: 40%;
    flex-shrink: 0;
  }
  
  .ref-link p {
    text-align: center;
  }
  
  .ref-list ul{
    list-style: none;
    padding: 0;
    max-height: 300px;
    overflow-x: scroll;
  }
    
</style>