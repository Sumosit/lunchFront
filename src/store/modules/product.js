export default {
  state: {
    products: [],
    order: [],
    orders: [],
    aspOrders: [],
    loading: true
  },
  actions: {
    async fetchProducts(ctx) {
      fetch('http://localhost:43392/api/files')
          .then(response => response.json())
          .then(json => {
            setTimeout(() =>{
              const products = json;
              ctx.commit('updateProducts', products);
            }, 1000)
          } );
    },
    async fetchOrders(ctx) {
      fetch('http://localhost:43392/api/orders')
          .then(response => response.json())
          .then(json => {
            setTimeout(() =>{
              const orders = json;
              ctx.commit('updateOrders', orders);
            }, 1000)
          } );
    },
    async fetchAspOrders(ctx) {
      fetch('https://localhost:44356/order')
          .then(response => response.json())
          .then(json => {
            setTimeout(() =>{
              const aspOrders = json;
              ctx.commit('updateAspOrders', aspOrders);
            }, 1000)
          } );
    },
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    createOrderProduct(state, newOrderProduct) {
      state.order.unshift(newOrderProduct);
    },
    deleteOrderProduct(state, index){
      state.order.splice(index, 1);
    },
    updateOrders(state, orders) {
      state.orders = orders;
    },
    updateAspOrders(state, aspOrders) {
      let temp = aspOrders[0].id;
      let box = [];
      let fd = [];
      for (let i = 0; i < aspOrders.length; i++) {
        if (aspOrders[i].id !== temp) {
          fd.unshift(box);
          temp = aspOrders[i].id;
          box = [];
        }
        box.push(aspOrders[i]);
      }
      state.aspOrders = fd;
    },
    clearOrder(state) {
      state.order = [];
    }
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    allOrderProducts(state) {
      return state.order;
    },
    allOrders(state) {
      return state.orders.reverse();
    },
    allAspOrders(state) {
      return state.aspOrders.reverse();
    }
  },
}