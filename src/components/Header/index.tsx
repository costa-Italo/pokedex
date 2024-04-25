
import {HeaderContainer, LogoStyles } from "./styles";
import Logo from "../../assets/pokemon-logo-sem-fundo.png"

const Header = () => {
    return (
        <HeaderContainer>     
            <LogoStyles src={Logo} alt="Pokémon Logo" />
        </HeaderContainer>
    );
}

export default Header;