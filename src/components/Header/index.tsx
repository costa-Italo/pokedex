import {HeaderContainer, LogoStyles } from "./styles";
import Logo from "../../assets/pokemon-logo-sem-fundo.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>     
            <LogoStyles src={ Logo } alt="Pokémon Logo" onClick={() => navigate("/")}/>
        </HeaderContainer>
    );
}

export default Header;