import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from '../context/cartContext';

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

export const loaderForId = async ({ params }) => {
    const { id } = params;
    const { data } = await axios.get(`${url}${id}`);
    return { data };
}

function DrinksDetail() {
    const [count, setCount] = useState(0);
    const { data } = useLoaderData();
    const drink = data.drinks[0];
    const price = 100;

    const { strDrink: name, strDrinkThumb: image, strCategory: category, strGlass: glass, strInstructions: instructions } = drink;

    const { dispatch } = useCart();

    const handleIncrement = () => setCount(prevCount => prevCount + 1);
    const handleDecrement = () => setCount(prevCount => Math.max(0, prevCount - 1));

    const addToCart = () => {
        if (count > 0) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: { id: drink.idDrink, name, image, count, price: price }
            });
            setCount(0);
        }
    };

    return (
        <div className="min-h-screen  flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-8xl  mx-auto w-full">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-96 w-full object-cover md:w-96" src={image} alt={name} />
                        </div>
                        <div className="p-8 w-full flex flex-col justify-between">
                            <div>
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{category}</div>
                                <h1 className="mt-2 text-3xl font-extrabold text-gray-900">{name}</h1>
                                <p className="mt-4 text-gray-500">Glass: {glass}</p>
                                <p className="mt-4 text-gray-600">{instructions}</p>
                            </div>
                            
                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex items-center border rounded-md">
                                    <button onClick={handleDecrement} className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200">
                                        <FaMinus />
                                    </button>
                                    <span className="px-4 py-2 bg-white">{count}</span>
                                    <button onClick={handleIncrement} className="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200">
                                        <FaPlus />
                                    </button>
                                </div>
                                <button 
                                    onClick={addToCart} 
                                    className="ml-4 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Add to Cart
                                </button>
                            </div>
                            
                            <div className="mt-8 flex items-center justify-between">
                                <Link to="/cart" className="flex items-center text-indigo-600 hover:text-indigo-800">
                                    <FaShoppingCart size={20} className="mr-2"/>
                                    Go to cart
                                </Link>
                                <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
                                    Back Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DrinksDetail;
