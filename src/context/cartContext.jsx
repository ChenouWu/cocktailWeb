import React from 'react'
import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';

const context = createContext();

const initialState ={
    items:[],
}

const carReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { 
                ...state, 
                items: [...state.items, action.payload] // Ensure you are adding to the 'items' array
            };
        case 'REMOVE_FROM_CART':
            return { 
                ...state, 
                items: state.items.filter(item => item.id !== action.payload.id) 
            };
        default:
            return state;
    }
};

export function cartContext({children}) {
    const [state,dispatch] = useReducer(carReducer,initialState)
  return (
    <context.Provider value={{ state, dispatch }}>
    {children}
  </context.Provider>
  )
}

export const useCart = () =>useContext(context);
