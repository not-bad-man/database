<template>
  <div id="app">
    <Name></Name>
    <div id="content">
      <router-view :pageType="pageType"></router-view>
    </div>
  </div>
</template>


<script>
import Name from './components/Name';

export default {
  name: 'App',
  created () {

  },
  data () {
    return {
      pageType: 'student'
    }
  },
  methods: {
    
  },
  components: {
    Name
  }
}
</script>

<style>
  html, body, div, span {
    padding: 0;
    margin: 0;
  }

  ul, li {
    list-style: none;
  }

  input {
    padding: 3px 4px;
    border-radius: 4px;
    /* border: none; */
  }

  #app {
    margin: 0 auto;
    text-align: center;
    max-width: 1020px;
    min-width: 900px;
  }

  #content {
    padding: 0 24px;
    margin: 0 auto;
  }

</style>
