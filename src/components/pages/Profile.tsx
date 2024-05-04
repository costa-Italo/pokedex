import { PokemonImg, PokemonNameProfile, ProfileContainer, ProfileHeader, ProfileNameContainer } from "./styles";
import { GlobalStyle } from "../../globals/Globals";

import { useLocation, useParams } from "react-router-dom";

const Profile = () => {
    const { pokemonName } = useParams<{ pokemonName: string }>(); 
    const location = useLocation();
    return (          
            <ProfileContainer>
                <GlobalStyle />

                <ProfileHeader>
                {location.state && (
                        <PokemonImg src={location.state.imageUrl} alt="Foto do pokemon clicado" />
                    )}
                </ProfileHeader>
                <ProfileNameContainer>
                    <PokemonNameProfile>{pokemonName} </PokemonNameProfile>
                </ProfileNameContainer>
            </ProfileContainer>
        
    )
}

export default Profile;