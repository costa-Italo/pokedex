import { CardStyles, PokemonName, PokemonTypes, StylesImage } from "./styles";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

interface Props {
  pokemon: Pokemon;
}

const CardPokemon: React.FC<Props> = ({pokemon}) => {
    return (    
            <CardStyles>
                <StylesImage src={pokemon.sprites.front_default} alt="" />
                <PokemonName>{pokemon.name}</PokemonName>
                <PokemonTypes>Tipo 1 - Tipo 2</PokemonTypes>
            </CardStyles>

    )
}

export default CardPokemon;
