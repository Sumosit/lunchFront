<template>
  <div class="row">
    <div class="col-7">
      <ProductsList/>
    </div>
    <div class="col-4">
      <Order/>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import ProductsList from "../components/ProductsList";
  import Order from "../components/Order";

  export default {
    name: "Home",
    components: {Order, ProductsList},
    methods: mapActions(['fetchProducts']),
    async mounted() {
      this.fetchProducts();
    }
  }
</script>

<style scoped>
  @import '../assets/css/default.css';
</style>