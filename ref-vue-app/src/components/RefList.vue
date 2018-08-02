<template>
  <div class="ref-list">
    <ul>
      <RefLink v-on:deleteLink="deleteLink" v-on:updateInfo="updateInfo" v-for="link in links" :link.sync="link"></RefLink>
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
            console.log(link);
            var linkIndex = this.links.indexOf(link);
            console.log(linkIndex);
            this.links[linkIndex].count = link.count
            console.log(this.links);
          }
        }
    }
</script>

<style>
    
</style>