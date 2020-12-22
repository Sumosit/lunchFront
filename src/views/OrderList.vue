<template>
  <div>
    <div class="row"
         v-for="(o, i) in allOrders">
      <hr>
      <h1>{{o.id}}</h1>
      <div class="col-1"
           v-for="(item, j) in o.orderItems">
        <img :src="item.url">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "OrderList",
    async mounted() {
      this.fetchOrders();
    },
    computed: mapGetters(['allOrders']),
    methods: mapActions(['fetchOrders']),
  }
</script>

<style scoped>
  @import '../assets/css/default.css';
  @import '../assets/css/ProductList.css';
</style>