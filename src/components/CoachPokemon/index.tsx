import Ash from "../../assets/ash.jpg"
import { AshImage, CoachContainer, CoachTitle } from "./styles"

const Coach = () => {
    return (
        <CoachContainer>
            <AshImage src={Ash} alt="Ash e Pikachu" />
            <CoachTitle>Viva esta emoção: Explore, capture e se torne um mestre pokémon.</CoachTitle>
        </CoachContainer>
    )
}

export  default Coach