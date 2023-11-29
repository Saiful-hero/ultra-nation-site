import { useEffect, useState } from 'react'
import './App.css'
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [countries, setCountries] = useState([]);
  const [adding, setAdding] = useState([]);
  
  useEffect( ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      // console.log(data);
      const names = countries.map((country) => country.continents);
      console.log(names)
    }
      )
  }, [])

  // event handler decleration
  const handleAddCountry = (country) =>{
    console.log('Country Added', country)
    const newAdding = [...adding, country];
    setAdding(newAdding)
  }
  
   
  return (
    <>
      <div>
        <h1>Total Countries: {countries.length}</h1>
        <h2>Contry Added: {adding.length}</h2>
        <Cart cart={adding}></Cart>
       <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.ccn3}></Country>)
        }
       </ul>
        
      </div>
    </>
  )
}

export default App
