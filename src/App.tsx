import { useEffect, useState } from "react"
import CardPokemon from "./components/Card"
import { CardsContainer } from "./components/Card/styles"
import Header from "./components/Header"
import Input from "./components/Input"
import { GlobalStyle } from "./globals/Globals"
import RoutesApp from "./components/RoutesApp"

function App() {

  interface PokemonData {
    name: string;
  }

  const [pokemons, SetPokemons] = useState([]);

  const [filterPokemon, setFilterPokemon] = useState("");

  const filteredPokemon = (nome: string) => {
    setFilterPokemon(nome)
  }

  const getApiData = async () => {
    const endpoints: string[] = [];

    try {
      for (let i = 1; i <= 80; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      await Promise.all(endpoints.map((endpoint => fetch(endpoint))))
      .then ((res: Response[]) => Promise.all(res.map(async r => r.json())))
      .then ((res: PokemonData[]) => SetPokemons(res))
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
        <Input filteredPokemon={filteredPokemon}/>  
        <RoutesApp />
        <CardsContainer> 
          {pokemons.filter((pokemon) => pokemon.name.includes(filterPokemon)).map((pokemon, index) =>(
            <CardPokemon 
              pokemon={pokemon}
              key={index}
            />
          ))}      
        </CardsContainer> 
    </div>
    
  )
}

export default App