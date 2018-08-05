<template>
  <li class="ref-link">
    <div class="title">
<!--      <router-link to="/landing" target="_blank" v-if="!isEditing">{{link.link}}</router-link>-->
      <a hred="#" v-on:click="sendToLandingPage(link.link); link.count++" v-if="!isEditing">{{link.link}}</a>
      <input type='text' v-model="link.link" v-if="isEditing" v-on:keyup.enter="hideForm">
      <div class="bottom-border" v-bind:class="{isEditing}"></div>
    </div>
    <span>{{link.count}}</span>
    <button v-on:click="showForm" v-if="!isEditing">
      <img src="../assets/edit.svg" alt="edit" />
    </button>
    <button v-on:click="hideForm" v-on:keyup.enter="hideForm" v-if="isEditing">
      <img src="../assets/save.svg" alt="save" />
    </button>
    <button v-on:click="deleteLink(link)">
      <img src="../assets/delete.svg" alt="delete" />
    </button>
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
    height: 60px;
  }
  
  .ref-link .title {
    display: inline;
    position: relative;
    text-align: left;
    width: 40%;
    flex-shrink: 0;
  }
  
  .ref-link a {
    text-decoration: none;
    color: black;
  }
  
  .ref-link a:hover {
    color: #009ad1;
  }
  
  .ref-link input {
    display: inline;
    text-align: left;
    flex-shrink: 0;
    font-size: 16px;
    border: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
/*    red #f30003;*/
/*    blue #009ad1*/
  }
  
  .ref-link input:focus {
    outline: none;
  }
  
  .ref-link .bottom-border {
    position: absolute;
    bottom: 0;
    width: 0;
    color: #f30003;
    border-bottom: #f30003 solid 2px;
    transition: width 0.5s ease;
  }
  
  .ref-link .bottom-border.isEditing {
    width: 100%;
  }
  
  .ref-link button {
    border: none;
    background: none;
  }
  
  .ref-link button:focus {
    outline: none;
  }
  
  .ref-link button img {
    height: auto;
    width: 30px;
    transition: transform 0.5s ease;
  }
  
  .ref-link button:hover img {
    transform: scale(1.25);
  }
    
</style>