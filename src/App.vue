<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <!-- This is where all of our pages will be rendered -->
    <router-view/>

    <AppFooter></AppFooter>
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
}
</style>

<script>
import AppNavbar from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>
