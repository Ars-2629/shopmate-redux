import { useSelector } from "react-redux";
import { CartCard } from "../components/CartCard";
import { useTitle } from "../hooks/useTitle";

export  function Cart({title}) {

  const cartproduct = useSelector(selector => selector.cartState.cartList);
  const cartproductTotalAmount = useSelector(selector => selector.cartState.total);

 useTitle(title);

  return (
    <main>
   <h1 className="text-center sm:mt-4 mt-2 ">Cart Items: {cartproduct.length} / $ {cartproductTotalAmount} </h1>
       <div className="mx-5 sm:mx-20 sm:my-4 my-2 flex justify-start flex-wrap">
      {cartproduct.map((cartdata)=>(
        <CartCard cartdata={cartdata} key ={cartdata.id}/>
      ))}
    </div>  
    
    </main>
   
  )
}
