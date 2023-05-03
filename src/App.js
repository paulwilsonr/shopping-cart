import './App.css';
import { React, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import RouteSwitch from './components/RouteSwitch';
import CartSideBar from './components/CartSideBar';
import uniqid from "uniqid";


function App() {
  const [shopData, setShopData] = useState([]);
  const [shoppingCartContents, setShoppingCartContents] = useState([]);
  const [isCartHidden, setIsCartHidden] = useState('hidden');


  const fetchShopData = () => {
    fetch("https://fortnite-api.com/v2/shop/br")
      .then(response => {
        return response.json()
      })
      .then(data => {
        const rawShopData = []
        data.data.daily.entries.forEach((entry) => {
          let newEntry = {
            name: entry.items[0].name,
            picture: entry.items[0].images.icon,
            price: entry.finalPrice,
            key: uniqid()
          }
          rawShopData.push(newEntry);
        })
        setShopData(rawShopData);
      })
  }

  const handleAddToCart = (itemName, itemPrice) => {
    if (!alreadyInCart(itemName)) {
      setShoppingCartContents([
        ...shoppingCartContents,
        {
          name: itemName,
          price: itemPrice,
          quantity: '1',
          key: uniqid(),
        }])
    }
  }

  const alreadyInCart = (itemName) => {
    let inCart = false;
    shoppingCartContents.forEach((cartItem) => {
      if (cartItem.name === itemName) {
        inCart = cartItem;
        
      };
    })

    return inCart;
  }

  const handleQuantityChange = (itemName, newQuantity) => {
    const item = alreadyInCart(itemName);
    const itemIndex = shoppingCartContents.indexOf(item);
    item.quantity = newQuantity
    const newCart = shoppingCartContents;
    newCart[itemIndex] = item;
    setShoppingCartContents(newCart);
  }

  const handleClear = (itemName) => {
    const item = alreadyInCart(itemName);
    setShoppingCartContents(shoppingCartContents.filter(filterItem => filterItem !== item));

  }

  
  function toggleCart(newValue) {
      setIsCartHidden(newValue)
  }


  useEffect(() => {
    fetchShopData()
  }, [])


  return (<div>
    <NavBar toggleCart={toggleCart} isCartHidden={isCartHidden}/>
    <CartSideBar isCartHidden={isCartHidden} cartArr={shoppingCartContents} handleQuantityChange={handleQuantityChange} handleClear={handleClear} />
    <RouteSwitch shopData={shopData} handleAddToCart= {handleAddToCart} />
  </div>)
}

export default App;



