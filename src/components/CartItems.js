import React from 'react'
import CartItem from "./CartItem"


const CartItems = (props)=> {
      let bigList = props.bigList.map(item => <CartItem key={item.id} item={item} />)
  return (
    <div className="container">
      <h1>Items</h1>
      <div className="collection">
        <div className="collection-item row grey lighten-3">
          <div className="col s8">Product</div>
          <div className="col s2">Price</div>
          <div className="col s2">Quantity</div>
        </div>
          {bigList}
      </div>
    </div>
  )
}

export default CartItems
