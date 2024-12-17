import { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
  const cart = {} ; 
  for (let i = 0; i < all_product.length+1 ; i++) {
    cart[i] = 0 ;
  }
  return cart
}


function ShopContextProvider({ children }) {
  const [cartItems , setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev , [itemId]:prev[itemId]+1}));
  }
  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
  }

  const getTotal = ()=>{
    let totalPrice = 0 ;
    for( const item in cartItems){      
      if(cartItems[item]>0){
        let itemInfo = all_product.find((product)=>product.id === Number(item));
        totalPrice += itemInfo.new_price * cartItems[item] ;
      }
    }
    return totalPrice ;
  }

  const getTotalForSpan =()=>{
    let total = 0 ;
    for(const item in cartItems){
      if(cartItems[item]>0){
         total += cartItems[item] ;
      }
    }
    return total ;
  }

  const contextValue = {getTotalForSpan ,getTotal, all_product , cartItems , addToCart , removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
