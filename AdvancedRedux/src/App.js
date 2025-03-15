import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from './store/cart-slice';

function App() {
  const dispatch = useDispatch();
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

      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }

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
