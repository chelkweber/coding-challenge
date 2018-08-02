<template>
  <li class="ref-link">
    <p v-if="!isEditing" v-on:click="updateInfo(link)">
      <router-link to="/landing">{{link.link}}</router-link>
    </p>
    <input type='text' v-model="link.link" v-if="isEditing">
    <p v-on:click="link.count++">{{link.count}}</p>
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
        deleteLink(link) {
          this.$emit('deleteLink', link);
        },
        updateInfo(link) {
          this.$emit('updateInfo', link);
        }
      }
    }
</script>

<style>
    
</style>