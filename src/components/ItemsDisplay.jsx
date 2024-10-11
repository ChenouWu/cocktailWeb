import React from 'react';
import axios from "axios";
import SingleDrinks from './SingleDrinks';
import { useLoaderData, Link } from 'react-router-dom';
import Poster from '../assets/Poster.jpg'

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;

export const loaderForDisplay = async () => {
  const res = await axios.get(url);
  const drinks = res.data.drinks;
  return drinks;
}

function ItemsDisplay() {
  const drinks = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative mt-5">
        <img 
          src={Poster} 
          alt="Cocktail Poster" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Discover Our Margaritas</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">New Margaritas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {drinks.map((drink) => (
            <Link key={drink.idDrink} to={`/details/${drink.idDrink}`} className="block transition duration-300 ease-in-out transform hover:scale-105">
              <SingleDrinks drinks={drink} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemsDisplay;