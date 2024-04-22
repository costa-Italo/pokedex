
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
    </div>
  )
}

export default App
