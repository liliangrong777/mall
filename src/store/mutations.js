const mutations = {
  addCart(state,obj){
    //判断是否存在该对象
    let o =state.cartData.find(item=>item.iid === obj.iid)
    if(o===undefined){
      obj.count =1
      obj.isChecked = true
      state.cartData.push(obj)
    }else{
      o.count++
    } 
  }
}

export default mutations