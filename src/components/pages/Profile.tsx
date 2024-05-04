import { PokebolaStyles, PokemonName, PokemonNameProfile, ProfileContainer, ProfileHeader, ProfileNameContainer } from "./styles";
import { GlobalStyle } from "../../globals/Globals";
import Pokebola from "../../assets/pokebola.png";
import { useLocation, useParams } from "react-router-dom";

const Profile = () => {
    const { pokemonName } = useParams<{ pokemonName: string }>(); 
    const location = useLocation<{ imageUrl: string }>()
;
    return (          
            <ProfileContainer>
                <GlobalStyle />

                <ProfileHeader>
                    <PokebolaStyles src={Pokebola} alt="Pokebola" />
                    <PokemonName>Pokemon</PokemonName>
                </ProfileHeader>
                <ProfileNameContainer>
                    <PokemonNameProfile>{pokemonName} </PokemonNameProfile>
                    {location.state && (
                        <img src={location.state.imageUrl} alt="Foto do pokemon clicado" />
                    )}
                </ProfileNameContainer>
            </ProfileContainer>
        
    )
}

export default Profile;
