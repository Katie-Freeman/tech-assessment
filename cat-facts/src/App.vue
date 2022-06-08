<template>
  <div>
    <h1>Meow!</h1>
    <img src ="./assets/istockphoto-1188445864-612x612.jpeg"/>
    <GetFacts></GetFacts>
  </div>
</template>

<script>
import GetFacts from "./components/GetFacts.vue"
export default {
  name: "App",
  components: {
    GetFacts,
  },
};
</script>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  max-width: 100%
}
</style>