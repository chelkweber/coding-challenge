<template>
  <div class="form">
    <label>Add a Link</label>
    <input v-model="link" type='text'>
    <button v-on:click="sendForm">Add</button>
  </div>
</template>

<script>
    export default {
        data () {
            return {
              link: ''
            }
        },
        components: {
        },
        methods: {
          sendForm() {
            if (this.link.length > 0) {
              const link = this.link;
              this.$emit('createLink', {
                link
              });
              this.link = '';
            }
          }
        }
    }
</script>

<style>
    
</style>