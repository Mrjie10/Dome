export default {
  addCoundter (state, oldProduct) {
    oldProduct.count++
  },
  addToCart(state, payload) {
    payload.checked = false;
    state.cartList.push(payload)
  }
}