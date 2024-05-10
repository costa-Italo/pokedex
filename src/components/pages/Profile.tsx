import { BackButton, FooterContainer, PokemonImage, PokemonProfileName, PokemonStatsContainer, PokemonStatsStyles, ProfileContainer } from "./styles";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GlobalStyle } from "../../globals/Globals";

const Profile = () => {

    const { pokemonName } = useParams<{ pokemonName: string }>(); // Solução encontrada para obter o parâmetro 'pokemonName' da URl
    const location = useLocation(); // Solução encontrada para puxar os dados do pokemon específico e levar para a página de perfil.
    const [abilities, setAbilities] = useState<string[]>([]);
    const [types, setTypes] = useState<string[]>([]);
    const [weight, setWeight] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {

        // Função assíncrona que faz uma solicitação a api usando o nome do pokemon. Se a chamada for bem sucedida os dados são convertidos para JSON.
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                
                // Extrai do objeto data as abilidades do pokemon específico. 
                const pokemonAbilities = data.abilities.map((ability: { ability: { name: string } }) => ability.ability.name);
                setAbilities(pokemonAbilities);
                
                // Extrai do objeto data os tipos do pokemon específico. 
                const pokemonTypes = data.types.map((type: { type: { name: string } }) => type.type.name);
                setTypes(pokemonTypes);
                
                // Extrai do objeto data o peso do pokemon.
                setWeight(data.weight);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }
        };

        fetchData();
    }, [pokemonName]);
    
    return (
        <ProfileContainer>

            <div>
                {location.state && (
                    <PokemonImage src={location.state.imageUrl} alt="Foto do pokemon clicado" />
                )}
            </div>
            
            <div>
                <PokemonProfileName>{pokemonName}</PokemonProfileName>
            </div>

            <PokemonStatsContainer>
                <PokemonStatsStyles>Habilidades:{abilities.map((ability, index) => (
                        <li key={index}>{ability}</li>
                    ))}
                </PokemonStatsStyles>

                <PokemonStatsStyles>Tipos:  {types.map((type, index) => (
                        <li key={index}>{type}</li>
                    ))}
                </PokemonStatsStyles>

            <PokemonStatsStyles>
                Peso:
                <li>{weight !== null ? `${weight} kg` : 'Carregando...'}</li>
            </PokemonStatsStyles>

            </PokemonStatsContainer>


            <FooterContainer>
                

                <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
            </FooterContainer>
            <GlobalStyle />
        </ProfileContainer>
    );
}

export default Profile;