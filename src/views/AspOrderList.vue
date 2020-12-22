<template>
  <div>
    <div class="row"
         v-for="(o, i) in allAspOrders">
      <hr>
        <h1>{{i}}</h1>
      <div class="col-1"
           v-for="(item, i) in o">
        <img :src="item.url">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "AspOrderList",
    async mounted() {
      this.fetchAspOrders();
    },
    computed: mapGetters(['allAspOrders']),
    methods: mapActions(['fetchAspOrders']),
  }
</script>

<style scoped>

  @import '../assets/css/default.css';
  @import '../assets/css/ProductList.css';
</style>