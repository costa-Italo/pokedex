import { useEffect, useState } from "react"
import CardPokemon from "./components/Card"
import { CardsContainer } from "./components/Card/styles"
import Header from "./components/Header"
import Input from "./components/Input"
import { GlobalStyle } from "./globals/Globals"

function App() {

  const [pokemons, SetPokemons] =useState([]);

  const getApiData = async () => {
    const endpoints = [];

    try {
      for(let i = 1; i <= 80; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      await Promise.all(endpoints.map((endpoint => fetch(endpoint))))
      .then ((res) => Promise.all(res.map(async r => r.json())))
      .then (res =>
        SetPokemons(res)
      )
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    getApiData();
  },[])  

  return (

    <div>
        <GlobalStyle/> 
        <Header />
        <Input />  
        <CardsContainer> 
          {pokemons.map(pokemon =>(
            <CardPokemon 
              pokemon={pokemon}
            />
          ))}      
        </CardsContainer> 
    </div>
    
  )
}

export default App