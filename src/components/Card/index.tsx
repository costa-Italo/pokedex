// Importações
import { useNavigate } from "react-router-dom";
import { CardStyles, PokemonName, StylesImage } from "./styles";

// Interface que define o objeto pokemon 'name' e uma url de imagem 'front_default'
interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

// Interface que indica as propriedades esperadas no componente 'CardPokemon'
interface Props {
  pokemon: Pokemon;
}

// Componente que recebe as popriedades da interface 'Props'
const CardPokemon: React.FC<Props> = ({ pokemon }) => {

  // Hook que permite navegar entre rotas diferentes
  const navigate = useNavigate();

  // Função que indica que quando o card for clicado, vai abrir um perfil do pokemon especifico
  const handleClick = () => {
    navigate(`/profile/${pokemon.name}`, { state: { imageUrl: pokemon.sprites.front_default }});
  };


  return (
    // Componente com um 'onClick' que chama a função 'handleClick'
    // Chamando direto da api a foto do pokemon e o nome.
    <CardStyles onClick={handleClick}>
      <StylesImage src={pokemon.sprites.front_default} /> 
      <PokemonName>{pokemon.name}</PokemonName>
    </CardStyles>
  )
}

export default CardPokemon;