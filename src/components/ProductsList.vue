<template>
  <div class="row">
    <div class="col-1"
         v-on:click="sendToOrder(product)"
         v-for="(product, i) in allProducts">
      <img :src="product.url">
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: "ProductsList",
    computed: mapGetters(['allProducts']),
    methods: {
      ...mapMutations(['createOrderProduct']),
      sendToOrder(newProduct) {
        this.createOrderProduct(newProduct);
      }
    }
  }
</script>

<style scoped>
  @import '../assets/css/ProductList.css';
</style>