
import React, {Component} from 'react';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
// import CartItem from './components/CartItem'

let applicationstate = {
  copyright: 2018,
  items: [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 3.99 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 4.99 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 19.99 }, quantity: 1 },
  ]
}


class App extends Component {
  render () {
  return (
    <div className="App">
      <CartHeader />
      <CartItems bigList={applicationstate.items} />
      <CartFooter copyrightyear={applicationstate.copyright} />
    </div>
  );
}
}

export default App;
