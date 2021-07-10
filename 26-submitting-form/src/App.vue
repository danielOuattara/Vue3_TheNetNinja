<template>
  <h1>{{title}}</h1> <br>
  <SignUpForm/>
</template>

<script>
import SignUpForm from './components/SiginUpForm.vue';
export default {
  name: 'App',
  components: {
    SignUpForm,
  },
  data() {
    return {
      title: "Vuejs 3 Forms & Inputs !",
    }
  },
  methods: {   
    
  }
}
</script>

<style >
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #EEE;
}


</style>
