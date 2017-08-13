<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <CctesteComponent></CctesteComponent>
  </div>
</template>

<script>
  import CctesteComponent from './components/testeComponent.vue'

  export default {
    name: 'testeComponent',
    components: {
      CctesteComponent
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>