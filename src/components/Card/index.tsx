import { CardStyles, PokemonName, PokemonTypes, StylesImage } from "./styles";
import Pokemon from "../../assets/pikachu.png"

const CardPokemon = () => {
    return (    
            <CardStyles>
                <StylesImage src={Pokemon} alt="" />
                <PokemonName>Nome</PokemonName>
                <PokemonTypes>Tipo 1 - Tipo 2</PokemonTypes>
            </CardStyles>

    )
}

export default CardPokemon;