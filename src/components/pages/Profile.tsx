import { PokebolaImage, PokemonImage, PokemonStatsContainer, ProfileContainer } from "./styles";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Pokebola from "../../assets/pokebola.png"

const Profile = () => {

    const { pokemonName } = useParams<{ pokemonName: string }>(); 
    const location = useLocation();
    const [abilities, setAbilities] = useState<string[]>([]);
    const [types, setTypes] = useState<string[]>([]);
    const [weight, setWeight] = useState<number | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                
                // Extrair habilidades
                const pokemonAbilities = data.abilities.map((ability: { ability: { name: string } }) => ability.ability.name);
                setAbilities(pokemonAbilities);
                
                // Extrair tipos
                const pokemonTypes = data.types.map((type: { type: { name: string } }) => type.type.name);
                setTypes(pokemonTypes);
                
                // Extrair peso
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
            <PokemonStatsContainer>
                <p>Habilidades:{abilities.map((ability, index) => (
                        <li key={index}>{ability}</li>
                    ))}
                </p>
                <p>Tipos:  {types.map((type, index) => (
                        <li key={index}>{type}</li>
                    ))}</p>
                <p>Peso: {weight !== null ? `${weight} kg` : 'Carregando...'}</p>
            </PokemonStatsContainer>

            <div>
                <h1>{pokemonName}</h1>
            </div>

            <div>
                <PokebolaImage src={Pokebola} alt="" onClick={() => navigate("/")}/>
                <p>Voltar</p>
            </div>
        </ProfileContainer>
    );
}

export default Profile;