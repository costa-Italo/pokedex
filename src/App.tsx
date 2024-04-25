import CardPokemon from "./components/Card"
import { CardsConstainer } from "./components/Card/styles"
import Header from "./components/Header"
import Input from "./components/Input"
import { GlobalStyle } from "./globals/Globals"

function App() {

  return (

    <div>
        <GlobalStyle/> 
        <Header />
        <Input />  
        <CardsConstainer>  
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
        </CardsConstainer> 
    </div>
    
  )
}

export default App
