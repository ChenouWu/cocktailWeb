import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from '../context/cartContext';

function SearchingCockTail() {
  const [count, setCount] = useState(0);
    const { data } = useLoaderData();
    const drinks = useLoaderData();
    const { dispatch } = useCart(); // Access the cart dispatch function
    const price = 100;


    const { strDrink: name, strDrinkThumb: image, strCategory: category, strGlass: glass, strInstructions: instructions } = drinks;
    const handleIncrement = () => setCount(prevCount => prevCount + 1);
    const handleDecrement = () => setCount(prevCount => Math.max(0, prevCount - 1));


    const addToCart = () => {
        if (count > 0) {
            dispatch({
                type: 'ADD_TO_CART', // This should match the case in the reducer
                payload: { id: drink.idDrink, name, image, count, price: price } // Ensure this is correct
              });
              
            setCount(0); // Reset count after adding to cart
        }
       
    };
  ;

if (!drinks.data.drinks) {
    return (
        <div className="text-center p-4 mt-30">
            <h2 className="text-2xl font-bold mt-60">Sorry, No drinks found</h2>
            <Link to="/" className="text-blue-600 hover:underline mt-20 block">Back Home</Link>
        </div>
    );
}



    return (
        <div className="flex justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex flex-col items-start bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
                <img src={image} alt={name} className="w-full  object-cover border-2 mb-6 rounded-lg" />
                <h2 className="font-bold text-3xl mb-4 text-gray-800">{name}</h2>
                <div className="space-y-2 mb-6 w-full">
                    <p className="text-gray-700">
                        <span className="font-bold">Category:</span> {category}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-bold">Glass:</span> {glass}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-bold">Instructions:</span> {instructions}
                    </p>
                </div>
                
                <div className="flex items-center justify-between w-full mb-6">
                    <Link to="/cart" className="flex items-center text-blue-600 hover:text-blue-800">
                        <FaShoppingCart size={24} className="mr-2"/>
                        Go to cart
                    </Link> 
                    <div className="flex items-center">
                        <button onClick={handleDecrement} className="bg-gray-200 p-2 rounded-l">
                            <FaMinus />
                        </button>
                        <span className="bg-gray-100 py-2 px-4">{count}</span>
                        <button onClick={handleIncrement} className="bg-gray-200 p-2 rounded-r">
                            <FaPlus />
                        </button>
                    </div>
                    <button onClick={addToCart} className="bg-blue-600 text-white p-2 rounded">
                        Add to Cart
                    </button>
                </div>

                <Link to="/" className="self-start mt-auto font-semibold hover:underline text-blue-600 hover:text-blue-800">
                    Back Home
                </Link>
            </div>
        </div>
    );
}

export default SearchingCockTail;
