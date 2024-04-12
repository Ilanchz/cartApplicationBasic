import '../App.css'



function Shop(props){

    function createNewItem(newItem){
        let items=props.CartData;
        items.push(newItem);
        return items;
    }


    function addCart(event){
        alert("Added to cart");
        console.log(event.target.value);
        props.setCartData(createNewItem(event.target.value));
        console.log(props.CartData)
        
    }
    
    function ShopItems(Product,index){
        return <div className="ShopItem" key={Product.index}>
            <img src={Product.imageURL} alt="Product Image" width="200" height="200"></img>
            <label type="text">{"Product Name: "+Product.Pdtname}</label>
            <label type="text">{"Price: "+Product.Price}</label>
            <label type="text">{"Size: "+Product.size}</label>
            <button onClick={addCart} value={Product.index} className="addCart">Add to Cart</button>
        </div>
    }

    function filterproducts(product){
        if (props.PName===""){
            return true;
        }else{
            if (product.Pdtname===props.PName){
                return true;
            }else{
                return false;
            }
        }
    }

    const Products=props.data.filter(filterproducts);

    return <div className="ShopPage">
        {Products.map((product, index) => ShopItems(product, index))}
    </div>
}

export default Shop;