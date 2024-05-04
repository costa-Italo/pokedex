import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${pokemon.name}`);
  };

  return (
    <CardStyles onClick={handleClick}>
      <StylesImage src={pokemon.sprites.front_default} />
      <PokemonName>{pokemon.name}</PokemonName>
    </CardStyles>
  )
}

export default CardPokemon;