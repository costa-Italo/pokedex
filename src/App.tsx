import { useState } from "react"
import CardPokemon from "./components/Card"
import { CardsConstainer } from "./components/Card/styles"
import Header from "./components/Header"
import Input from "./components/Input"
import { GlobalStyle } from "./globals/Globals"

function App() {

  const [pokemons, SetPokemons] =useState([1]);

  return (

    <div>
        <GlobalStyle/> 
        <Header />
        <Input />  
        <CardsConstainer>  
          {pokemons.map(pokemon =>(
            <CardPokemon />
          ))}      
        </CardsConstainer> 
    </div>
    
  )
}

export default App
