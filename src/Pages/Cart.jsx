import React from 'react';
import { useCart } from '../context/cartContext';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';

function Cart() {
  const { state, dispatch } = useCart();

  const removeItems = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id },
    });
  };

  // Total price calculation based on items' price
  const totalPrice = state.items.reduce((total, item) => total + (item.price * item.count), 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
        {state.items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <FaShoppingCart className="mx-auto text-gray-400 text-6xl mb-4" />
            <p className="text-xl text-gray-700">Your cart is empty.</p>
            <a href="/" className="mt-4 text-blue-500 hover:underline">Start Shopping</a>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b bg-gray-50">
              <div className="grid grid-cols-5 gap-4 font-semibold text-gray-700">
                <div className="col-span-2">Item</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {state.items.map((item) => (
                <div key={item.id} className="p-4">
                  <div className="grid grid-cols-5 gap-4 items-center">
                    <div className="col-span-2 flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 rounded-md mr-4 object-cover" 
                      />
                      <h2 className="font-semibold">{item.name}</h2>
                    </div>
                    <div>${item.price.toFixed(2)}</div>
                    <div>{item.count}</div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">${(item.price * item.count).toFixed(2)}</span>
                      <button 
                        onClick={() => removeItems(item.id)} 
                        className="text-red-500 hover:text-red-700 transition-colors duration-200"
                        aria-label={`Remove ${item.name} from cart`} // Accessibility label
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 border-t">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">Total:</span>
                <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
