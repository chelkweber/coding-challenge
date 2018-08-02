<template>
  <div class="ref-list">
    <ul>
      <RefLink v-for="link in links"></RefLink>
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
        }
    }
</script>

<style>
    
</style>