import React from 'react'

function SingleDrinks({ drinks }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
      <img 
        src={drinks.strDrinkThumb} 
        alt={drinks.strDrink} 
        className="w-full h-50"
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{drinks.strDrink}</h2>
      </div>
    </div>
  )
}

export default SingleDrinks