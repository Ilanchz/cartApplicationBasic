import { useState } from 'react';
import '../App.css';
import ShowCart from './ShowCart.jsx';


function Cart(props){

    const [cartStatus,setCartStatus]=useState(false);

    function displayCart(){
        setCartStatus((!cartStatus));
    }
    
    return <div>
        <button className="CartButton" onClick={displayCart}>Cart</button>
        {cartStatus ? <ShowCart CartData={props.CartData} data={props.data}/>: undefined}
    </div>
}

export default Cart;