import { useState } from "react";
import Cart from './Cart.jsx'
import '../App.css';

function Search(props){


    function handleInputChange(event) {
        props.setPName(event.target.value); 
    }

    function searchItems(){
        console.log(props.PName);
    }

    return (
        <div className="SearchBar">
            <div>
                <input 
                    type="text" 
                    placeholder="Search a Product..." 
                    value={props.PName} 
                    onChange={handleInputChange} 
                    className="search"
                />
                <button onClick={searchItems} className="searchButton">Search</button>
            </div>
            
            
        </div>
    );
}

export default Search;
