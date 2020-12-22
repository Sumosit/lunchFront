<template>
  <div>
    <img src="../assets/images/nav-pull.jpg"
         class="btn-nav-pull"
         :class="{'nav-bar-over': !hover, 'nav-bar-leave': hover}"
         @mouseover="hover = false"
         @mouseleave="hover = true"
         v-on:click="show = !show">
    <transition name="fade">
      <div v-if="show"
           @mouseleave="show = false"
           class="nav-pull">
        <img src="../assets/images/nav-pull.jpg"
             class="btn-nav-pull"
             :class="{'nav-bar-over': !hover, 'nav-bar-leave': hover}"
             @mouseover="hover = false"
             @mouseleave="hover = true"
             v-on:click="show = !show">
        <div class="nav-titles">
          <div class="nav-bar">
            <router-link to="/">HOME</router-link>
          </div>
          <div class="nav-bar">
            <router-link to="/orders">ORDERS</router-link>
          </div>
<!--          <div class="nav-bar">-->
<!--            <router-link to="/asporders">ASP ORDERS</router-link>-->
<!--          </div>-->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "NavigationPull",
    data() {
      return {
        hover: false,
        show: false
      }
    },
    mounted() {
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style scoped>
  @import '../assets/css/nav-pull.css';
</style>