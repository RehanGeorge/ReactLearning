import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const cartIsVisible = useSelector((state) => state.cart.show);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/v1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "cart" : cart }),
      });
      const data = await response.text();
      console.log(data);
    }
    fetchData();
  }, [cart]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
