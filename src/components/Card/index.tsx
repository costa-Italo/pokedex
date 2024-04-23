import pikachu from "../../assets/pikachu.png"
import { CardContainer, CardImage, CardStyles } from "./styles";

const Card = () => {
    return (
        <CardContainer>
            <CardStyles>
                <CardImage src={pikachu} alt="" />
                <p>Pikachu</p>
                <p>speed-boost: 100</p>
                <p>Sturdy: 100</p>
                <p>Static: 100</p>
                <p>Volt Absorb: 100</p>
                <p>Flash Fire: 100</p>
            </CardStyles>
        </CardContainer>
    )
}

export default Card;