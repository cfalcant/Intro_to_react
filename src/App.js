
import React, {Component} from 'react';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'

let applicationstate = {
  copyright: 2018
}

class App extends Component {
  render () {
  return (
    <div className="App">
      <CartHeader />
      <CartItems />
      <CartFooter copyrightyear={applicationstate.copyright} />
    </div>
  );
}
}

export default App;
