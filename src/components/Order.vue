<template>
  <div class="order row">
    <button class="toOrder" v-on:click="ToOrder">To order</button>
    <div class="col-2"
         v-for="(o, i) in allOrderProducts">
      <img :src="o.url"
           v-on:click="deleteOrderProduct(i)">
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import axios from 'axios';

  export default {
    name: "Order",
    components: {
      axios
    },
    computed: mapGetters(['allOrderProducts']),
    methods: {
      ...mapMutations(['deleteOrderProduct', 'clearOrder']),
      ...mapActions(['postOrder']),
      ToOrder() {
        let fd = new FormData(), orders = [], n = 0;
        if (this.allOrderProducts.length > 9) {
          n = 9;
        } else {
          n = this.allOrderProducts.length;
        }
        for (let i = 0; i < n; i++) {
          orders.push(this.allOrderProducts[i].name)
        }
        fd.set("orders", orders)
        axios.post('http://localhost:43392/api/orders', fd, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
          }
        }).then(res => {
          this.clearOrder;
          console.log(res);
        }).catch(err => {
          console.log(err.response);
        });
      }
    }
  }
</script>

<style scoped>
  .order {
    width: 100%;
    display: table;
    background: rgba(0,0,0,0.8);
  }

  .col-1 {
    width: 8.33%;
  }

  .col-2 {
    width: 16.66%;
  }

  .col-3 {
    width: 25%;
  }

  .col-4 {
    width: 33.33%;
  }

  .col-5 {
    width: 41.66%;
  }

  .col-6 {
    width: 50%;
  }

  .col-7 {
    width: 58.33%;
  }

  .col-8 {
    width: 66.66%;
  }

  .col-9 {
    width: 75%;
  }

  .col-10 {
    width: 83.33%;
  }

  .col-11 {
    width: 91.66%;
  }

  .col-12 {
    width: 100%;
  }

  .row::after {
    content: "";
    clear: both;
    display: table;
  }

  [class*="col-"] {
    padding: 4px;
    margin-top: 20px;
    float: left;
  }
  .toOrder {
    position: absolute;
  }
</style>