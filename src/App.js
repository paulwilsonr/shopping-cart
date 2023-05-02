import './App.css';
import {React, useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import RouteSwitch from './components/RouteSwitch';


function App() {
  const [shopData, setShopData] = useState([]);

  const fetchShopData = () => {
    fetch("https://fortnite-api.com/v2/shop/br")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setShopData(data.data.daily.entries)
    })
  }

  useEffect(() =>{
    fetchShopData()
  }, [])

  return (<div>
    <NavBar />
    <RouteSwitch shopData={shopData}/>
  </div>)
}

export default App;
