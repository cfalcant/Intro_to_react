
import React from 'react';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'

const App = () => {
  return (
    <div className="App">
      <CartHeader />
      <CartItems />
      <CartFooter />
    </div>
  );
}

export default App;
