<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <!-- This is where all of our pages will be rendered -->
    <router-view/>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar'

export default {
  name: 'App',
  components: {
    AppNavbar
  }
}
</script>
