import { CardStyles, PokemonName, PokemonTypes, StylesImage } from "./styles";
import Pokemon from "../../assets/pikachu.png"

const CardPokemon = ({pokemon}) => {
    return (    
            <CardStyles>
                <StylesImage src={pokemon.sprites.front_default} alt="" />
                <PokemonName>{pokemon.name}</PokemonName>
                <PokemonTypes>Tipo 1 - Tipo 2</PokemonTypes>
            </CardStyles>

    )
}

export default CardPokemon;