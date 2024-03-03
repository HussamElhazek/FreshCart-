import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Mainslider from './components/Mainslider/Mainslider'

import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import Mainlayout from './components/Layout/Mainlayout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import Cart from './components/Cart/Cart'
import Wishlist from './components/WishList/WishList'
import Authilayout from './components/Layout/Authilayout'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import NotFound from './components/NotFound/NotFound' 
import { Offline, Online } from "react-detect-offline";
import offlinez from '../src/assetes/images/offline.jpg'
import ProtectsRoute from './components/ProtectsRoutes/ProtectsRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import StoreContextProvider from './context/storeContext'
import { ToastContainer } from 'react-toastify';
import Address from './components/Address/Address'
import AllOrders from './components/Orders/ALLOrders'

export default function App() { 
  let routers= createBrowserRouter([
    {path:'/' , element:<Mainlayout/>,children:[
      {index:true, element:<ProtectsRoute>  <Home/>  </ProtectsRoute>},
      {path:'home' , element: <ProtectsRoute>  <Home/>  </ProtectsRoute>},
      {path:'products' , element:<ProtectsRoute>  <Products/>  </ProtectsRoute>},
      {path:'categories' , element:<ProtectsRoute>  <Categories/>  </ProtectsRoute>},
      {path:'brands' , element: <ProtectsRoute>  <Brands/>  </ProtectsRoute>},
      {path:'cart' , element: <ProtectsRoute>  <Cart/>  </ProtectsRoute>},
      {path:'wish list' , element: <ProtectsRoute>  <Wishlist/>  </ProtectsRoute>},
      {path:'product-details/:id' , element: <ProtectsRoute>  <ProductDetails/>  </ProtectsRoute>},
      {path:'Address/:id' , element: <ProtectsRoute>  <Address/>  </ProtectsRoute>},
      
      {path:'*' , element: <NotFound/>},

    ]} ,
    {path:'/' , element:<Authilayout/>,children:[
     
      {path:'signup' , element: <Signup/>},
      {path:'signin' , element: <Signin/>},
    
    ]}
  ])
  return (
    <>
     <StoreContextProvider>
     <RouterProvider router={routers}/>
     </StoreContextProvider>
    
      <ToastContainer theme='colored'/>
   
    <Offline>
    <div className='d-flex align-items-center justify-content-center m-5 '>
     <img src={offlinez} alt=""  />
    </div>
    </Offline>
       
  
    
    </>
  )
}
