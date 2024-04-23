
import Card from "./components/Card"
import { CardContainer } from "./components/Card/styles"
import Coach from "./components/CoachPokemon"
import InputSearch from "./components/InputSearch"
import FirtSection from "./components/LogoPokemon"
import { GlobalStyle } from "./globals/Globals"

function App() {

  return (

    <div>
        <GlobalStyle/>
        <FirtSection />
        <Coach />
        <InputSearch />
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
    </div>
  )
}

export default App
