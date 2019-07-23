<template>
  <div id="app">
    <div class="mainbox">
      <h2>Jquery To Do List</h2>
      <p>Simple Todo List with adding and filter by diff status</p>
      <Inputs></Inputs>
      <Item></Item>
    </div>
  </div>
</template>

<script>
import Item from "./components/Item";
import Inputs from "./components/Inputs";
export default {
  name: 'app',
  components: {

      Inputs,
      Item
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display:block;
  color: #2c3e50;
}
</style>
