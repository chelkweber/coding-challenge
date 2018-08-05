<template>
  <div class="form">
    <label>Add a Link</label>
    <input v-model="link" type='text' v-on:keyup.enter="sendForm">
    <button v-on:click="sendForm">
      <img src="../assets/add.svg" alt="add" />
    </button>
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
                link, 
                count: 0
              });
              this.link = '';
            }
          }
        }
    }
</script>

<style>
  
  .form {
    height: 60px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }
  
  .form input {
    display: inline;
    text-align: left;
    width: 40%;
    flex-shrink: 0;
    font-size: 16px;
    border: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    border-bottom: #009ad1 solid 2px;
/*    red #f30003;*/
/*    blue #009ad1*/
  }
  
  .form input:focus {
    outline: none;
  }
  
  .form button {
    border: none;
    background: none;
  }
  
  .form button:focus {
    outline: none;
  }
  
  .form button img {
    height: auto;
    width: 30px;
    transition: transform 0.5s ease;
  }
  
  .form button:hover img {
    transform: scale(1.25);
  }
    
</style>