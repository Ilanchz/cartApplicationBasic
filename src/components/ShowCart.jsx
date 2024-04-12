import React,{useState,useEffect} from 'react';

function ShowCart(props) {
  const { CartData, data } = props;

  const [CartItems, setCartItems] = useState([]);

  useEffect(() => {
    const newCartItems = [];

    for (let i = 0; i < CartData.length; i++) {
      const index = parseInt(CartData[i]);
      const item = data.find(item => item.index === index);
      if (item) {
        newCartItems.push(item);
      }
    }

    setCartItems(newCartItems);
  }, [CartData,data]); 


  return (
    <div>
      <p>Cart Items</p>
      <ul>
        {CartItems.map((item) => (
          <li key={item.index} className='cart-item-box'>
            <div className='cart-item-wrapper'>
            <img src={item.imageURL} alt={item.Pdtname} width="100" height="100"/>
                <div className='cart-details'>
                <h3>{item.Pdtname}</h3>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.Qty}</p>
                <button>+</button>
                <button>-</button>
                <p>Price: ${item.Price}</p>
                
                </div>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowCart;
