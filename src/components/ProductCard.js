import { useDispatch,useSelector } from 'react-redux';
import { add,remove } from '../store/cartSlice';
import { useState,useEffect } from 'react';

export function ProductCard({productdata}) {
  
  const dispatch = useDispatch();
  const [isInCart,setIsInCart] = useState(false);
  const cartproduct = useSelector(selector=>selector.cartState.cartList);

  useEffect(()=>{
    const updatedcartproduct = cartproduct.find(item=>item.id === productdata.id);
    if(updatedcartproduct){
      setIsInCart(true);
    }else{
      setIsInCart(false);
    }
  },[cartproduct,productdata.id])
  
    
  return (

  <div className="max-w-xs p-2 border shadow-md ml-8 mb-5">
   
  <div>
    <img
      src={`./assets/images/${productdata.id}.png`}
      className="border w-96 h-48"
      alt=""
    />
    <h1 className="text-md my-3">{productdata.name}</h1>
    
  </div>

  <div className="flex justify-between">
    <span className="text-lg">${productdata.price}</span>
    {
      isInCart ? (<button className="text-sm font-medium text-white bg-red-600 px-2 py-1 rounded" onClick = {()=>dispatch(remove(productdata))}>
      Remove
    </button>) : (<button className="text-sm font-medium text-white bg-blue-900 px-2 py-1 rounded" onClick = {()=>dispatch(add(productdata))}>
      Add To Cart
    </button>)  
    }
   
    
  </div>
</div> 
)
}
