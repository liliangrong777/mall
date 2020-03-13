const getters={
  totalPrice(state){
    return state.cartData.filter(item=>item.isChecked)
    .reduce((pre,cur)=>{
      return pre+cur.newPrice*1
    },0).toFixed(2)
  },
  cartData(state){
    return state.cartData
  },
  cartCount(state, getters) {
    return getters.cartData.length
  }
}

export default getters