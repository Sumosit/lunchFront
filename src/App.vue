<template>
  <div>
    <div>
      <NavigationPull/>
    </div>
    <main>
      <transition name="slither" mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
  import NavigationPull from './views/NavigationPull';

  export default {
    name: 'App',
    components: {
      NavigationPull
    }
  }
</script>

<style>
</style>
