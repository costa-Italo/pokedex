import { GlobalStyle } from "../../globals/Globals";
import Header from "../Header";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { pokemonName } = useParams<{ pokemonName: string }>(); 

    return (
        <>
            <Header />
            <GlobalStyle />
            <div>
                <h2>{pokemonName}</h2> 
            </div>
        </>     
    )
}

export default Profile;
