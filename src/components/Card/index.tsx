import { CardStyles, PokemonName, StylesImage } from "./styles";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

interface Props {
  pokemon: Pokemon;
}

const CardPokemon: React.FC<Props> = ({ pokemon }) => {
    return (    
            <CardStyles>
                <StylesImage src={pokemon.sprites.front_default} alt="" />
                <PokemonName>{pokemon.name}</PokemonName>
            </CardStyles>

    )
}

export default CardPokemon;
