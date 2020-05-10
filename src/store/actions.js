export default {
  addaCart(context, obj) {
    return new Promise((resolve, reject) => {
      let oldProduct = null;
      for (let item of context.state.cartList) {
        if (item.iid === obj.iid) {
          oldProduct = item;
        }
      }
      if (oldProduct) {  //数量加一
        // oldProduct.count += 1
        context.commit('addCoundter', oldProduct)
        resolve('商品+ 1')
      } else {
        obj.count = 1;
        // state.cartList.push(payload)
        context.commit('addToCart',obj )
        resolve('添加了新的商品')
        reject()
      }
    })
  }
}