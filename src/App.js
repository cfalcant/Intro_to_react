
import React, {Component} from 'react'
import './App.css';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'
import axios from 'axios'
// import CartItem from './components/CartItem'
class App extends Component {
constructor() {
  super()
  this.state = {
    copyright: 2018,
    items: [],
    products: []
  }
}
componentDidMount = () => {
    Promise.all([
      axios.get(`http://localhost:8082/api/products`),
      axios.get(`http://localhost:8082/api/items`),
    ])
      .then(arrOfResolvedPromises => {
        let products = arrOfResolvedPromises[0].data;
        let items = arrOfResolvedPromises[1].data;

        let populatedItems = items.map(item => {
          products.map(product => {
            if(item.product_id === product.id) {
              item.product = product;
            }
          })
          return item;
        });
        console.log('products', products)
        this.setState({
          products,
          items
        })
      })
  }

addItemFunc = (newItem) => {
  console.log('newItem', newItem)
    this.setState({ items: this.state.items.concat(newItem)})
  }

  render () {
  return (
    <div className="App">
      <CartHeader />
      <AddItem products={this.state.products} addItemFunc={this.addItemFunc}/>
      <CartItems bigList={this.state.items} />
      <CartFooter copyrightyear={this.state.copyright} />
    </div>
  );
}
}

export default App;
