import { PokebolaStyles, PokemonName, PokemonNameProfile, ProfileContainer, ProfileHeader, ProfileNameContainer } from "./styles";
import { GlobalStyle } from "../../globals/Globals";
import Pokebola from "../../assets/pokebola.png";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { pokemonName } = useParams<{ pokemonName: string }>(); 

    return (          
            <ProfileContainer>
                <GlobalStyle />

                <ProfileHeader>
                    <PokebolaStyles src={Pokebola} alt="Pokebola" />
                    <PokemonName>Pokemon</PokemonName>
                </ProfileHeader>
                <ProfileNameContainer>
                    <PokemonNameProfile>{pokemonName} </PokemonNameProfile>
                </ProfileNameContainer>
            </ProfileContainer>
        
    )
}

export default Profile;
