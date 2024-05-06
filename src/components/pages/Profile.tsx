import { useState, useEffect } from "react";
import { PokemonAbilitiesContainer, PokemonImg, PokemonNameProfile, ProfileContainer, ProfileHeader, ProfileNameContainer } from "./styles";
import { GlobalStyle } from "../../globals/Globals";
import { useLocation, useParams } from "react-router-dom";

const Profile = () => {
    const { pokemonName } = useParams<{ pokemonName: string }>(); 
    const location = useLocation();
    const [abilities, setAbilities] = useState<string[]>([]);

    useEffect(() => {
        const fetchPokemonAbilities = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                const pokemonAbilities = data.abilities.map((ability:{ ability: {name:string } }) => ability.ability.name);
                setAbilities(pokemonAbilities);
            } catch (error) {
                console.error("Error fetching Pokemon abilities:", error);
            }
        };

        fetchPokemonAbilities();
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
                <h2>Abilities:</h2>
                <ul>
                    {abilities.map((ability, index) => (
                        <li key={index}>{ability}</li>
                    ))}
                </ul>
            </PokemonAbilitiesContainer>
            <ProfileNameContainer>
                <PokemonNameProfile>{pokemonName}</PokemonNameProfile>
            </ProfileNameContainer>

        </ProfileContainer>
    );
};

export default Profile;
