<template>
  <li class="ref-link">
    <p v-if="!isEditing" v-on:click="increaseCount">{{link.link}}</p>
    <input type='text' v-model="link.link" v-if="isEditing">
    <p>{{count}}</p>
    <button v-on:click="showForm" v-if="!isEditing">Edit</button>
    <button v-on:click="hideForm" v-if="isEditing">Save</button>
    <button v-on:click="deleteLink(link)">Delete</button>
  </li>
</template>

<script>
    export default {
      props: ['link'],
      data () {
        return {
          count: 0,
          isEditing: false
        }
      }, 
      components: {
      },
      methods: {
        showForm() {
          this.isEditing = true;
        },
        hideForm() {
          this.isEditing = false;
        },
        increaseCount() {
          this.count++
        },
        deleteLink(link) {
          this.$emit('deleteLink', link);
        }
      }
    }
</script>

<style>
    
</style>