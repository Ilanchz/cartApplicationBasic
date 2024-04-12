import { useState } from 'react';
import '../App.css';
import Search from './Search';
import Shop from './Shop';
import Cart from './Cart';

const Product=[
  {
    ID:1, Pdtname: "Shirt",imageURL:"https://m.media-amazon.com/images/I/81hxCj6SQrL._SY741_.jpg",size: 12,Qty: 6, Price: 449, index: 0
  },
  {
    ID:2, Pdtname: "T-Shirt",imageURL:"https://m.media-amazon.com/images/I/71l+PPUo18L._SY741_.jpg",size: 14,Qty: 6, Price: 549, index: 1
  },
  {
    ID:1, Pdtname: "Shirt",imageURL:"https://m.media-amazon.com/images/I/715L6TkYbkL._SX569_.jpg",size: 16,Qty: 6, Price: 649, index: 2
  },
  {
    ID:3, Pdtname: "Shorts",imageURL:"https://m.media-amazon.com/images/I/61ytp19r+ZL._SX679_.jpg",size: 18,Qty: 6, Price: 349, index: 3
  },
  {
    ID:4, Pdtname: "Kurti",imageURL:"https://m.media-amazon.com/images/I/61cBdahE8CL._SY741_.jpg",size: 22,Qty: 6, Price: 799, index: 4
  },
  {
    ID:4, Pdtname: "Kurti",imageURL:"https://m.media-amazon.com/images/I/614IllcGVOL._AC_UL320_.jpg",size: 20,Qty: 6, Price: 799, index: 5
  }
  
];

function MainPage() {

  const [PName,setPName]=useState("");
  const [CartData,setCartData]=useState([]);
  return (
    <div>
      <Search PName={PName} setPName={setPName} data={Product} CartData={CartData}/>
      <div className='shop-cart-container'>
        <Shop data={Product} PName={PName} CartData={CartData} setCartData={setCartData}/>
        <Cart CartData={CartData} data={Product}/>
      </div>
      
    </div>
  );
}

export default MainPage;