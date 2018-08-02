<template>
  <div class="ref-list">
    <ul>
      <RefLink v-on:deleteLink="deleteLink" v-for="link in links" :link.sync="link"></RefLink>
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
          }
        }
    }
</script>

<style>
    
</style>