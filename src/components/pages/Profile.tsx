import { useState, useEffect } from "react";
import { PokemonAbilitiesContainer, PokemonImg, PokemonNameProfile, ProfileContainer, ProfileHeader, ProfileNameContainer } from "./styles";
import { GlobalStyle } from "../../globals/Globals";
import { useLocation, useParams } from "react-router-dom";

const Profile = () => {
    const { pokemonName } = useParams<{ pokemonName: string }>(); 
    const location = useLocation();
    const [abilities, setAbilities] = useState<string[]>([]);
    const [types, setTypes] = useState<string[]>([]);
    const [weight, setWeight] = useState<number | null>(null);

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
            <GlobalStyle />
            <ProfileHeader>
                {location.state && (
                    <PokemonImg src={location.state.imageUrl} alt="Foto do pokemon clicado" />
                )}
            </ProfileHeader>
            <PokemonAbilitiesContainer>
                <h2>Abilidades</h2>
                <ul>
                    {abilities.map((ability, index) => (
                        <li key={index}>{ability}</li>
                    ))}

<h2>Tipos</h2>
                <ul>
                    {types.map((type, index) => (
                        <li key={index}>{type}</li>
                    ))}

<h2>Peso</h2>
                <p>{weight !== null ? `${weight} kg` : 'Carregando...'}</p>
                </ul>
                </ul>
            </PokemonAbilitiesContainer>
        
            <ProfileNameContainer>
                <PokemonNameProfile>{pokemonName}</PokemonNameProfile>
            </ProfileNameContainer>
        </ProfileContainer>
    );
};

export default Profile;
