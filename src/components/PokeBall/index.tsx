import pokemonLogo from "../../assets/pokemon-logo.png"
import { LogoStyles } from "./styles";

const Logo = () => {
    return (
        <LogoStyles src={pokemonLogo} alt="Logo pokemon" />
    )
}

export default Logo;