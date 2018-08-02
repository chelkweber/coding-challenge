<template>
  <li class="ref-link">
    <p v-if="!isEditing" v-on:click="sendToLandingPage(link.link); link.count++">
      <router-link to="/landing" target="_blank" v-on:click="link.count++">{{link.link}}</router-link>
    </p>
    <input type='text' v-model="link.link" v-if="isEditing">
    <span>{{link.count}}</span>
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
        sendToLandingPage(linkName) {
          this.$emit('sendToLandingPage', linkName);
          console.log(linkName);
        }
      }
    }
</script>

<style>
  
  .ref-link {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }
  
  .ref-link p {
    display: inline;
    text-align: left;
    width: 40%;
    flex-shrink: 0;
  }
  
  .ref-link input {
    display: inline;
    text-align: left;
    width: 40%;
    flex-shrink: 0;
  }
    
</style>