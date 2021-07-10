<template>
<h1>{{title}}</h1>
<input type="text" ref="name">

<Modal message="Sign up here" 
       text="Grab your ninja code" 
       v-bind:list="list"
       theme="sale"/>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      title: "My first Vue App :)",
      addedClassActive: false,
      list: ['aaa,','bbb','ccc'],
    }
  },
  methods: {   }

}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid  #dddd;
  display: inline-block;
  padding-bottom: 10px;
  color: blue;
}
</style>
