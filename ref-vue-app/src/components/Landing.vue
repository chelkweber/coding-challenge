<template>
  <div class="landing">
    <h1>Welcome {{linkName}}!</h1>
    <img src="../assets/ambassador-logo.jpg" alt="ambassador software logo" class="logo"/>
    <button v-on:click="backToMain">
      <img src="../assets/back.svg" />
    </button>
  </div>
</template>

<script>
    export default {
        props: ["linkName"],
        data () {
            return {
              showLanding: true
            }
        },
        components: {
        },
        methods: {
          backToMain() {
            this.showLanding = false;
            this.$emit('backToMain', this.showLanding);
          }
        }
    }
</script>

<style>
  
  .landing {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .landing .logo {
    width: 60%;
    max-width: 600px;
    margin: 0 auto;
    height: auto;
  }
  
  .landing button {
    display: block;
    border: none;
    background: none;
  }
  
  .landing button:focus {
    outline: none;
  }
  
  .landing button img {
    height: auto;
    width: 30px;
    transition: transform 0.5s ease;
  }
  
  .landing button:hover img {
    transform: scale(1.25);
  }
    
</style>