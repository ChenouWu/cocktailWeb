import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Landing from './Pages/Landing';
import About from './Pages/About';
import HomeLayout from './Pages/HomeLayout';
import ContactMe from './Pages/Contact';
import {loaderForDisplay} from "./components/ItemsDisplay";
import ItemsDisplay from './components/ItemsDisplay';
import DrinksDetail, { loaderForId } from './components/DrinksDetail';
import SearchingCockTail from './components/SearchingCockTail';
import { loaderForName } from './components/SearchingForm';
import LoginPage from './Pages/LoginPage';
import Cart from './Pages/Cart';
import { cartContext as CartContext } from './context/cartContext';

function App() {
  const router =createBrowserRouter(
    [{
      path:"/",
      element:<HomeLayout/>,
      children:[{
        index:true,
        element:<ItemsDisplay/>,
        loader:loaderForDisplay
      },{
        path:"/about",
        element:<About/>
      },{
        path:'/contact',
        element:<ContactMe/>
      },{
        path:'/details/:id',
        element:<DrinksDetail/>,
        loader: loaderForId
      },{
        path:'/searching/:name',
        element:<SearchingCockTail/>,
        loader:loaderForName,
      },{
        path:"/Login",
        element:<LoginPage/>
      },{
        path:'/cart',
        element:<Cart/>
      }]
  }]
)
  return (
    <CartContext>
    <RouterProvider router={router}/>
    </CartContext>
  )
}

export default App
