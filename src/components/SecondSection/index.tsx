import Headline from "../Headline"
import Pikachu from "../Pikachu"
import { SecondSectionContainer } from "./styles"

const SecondSection = () => {
    return (
        <SecondSectionContainer>
        <Headline />

            <div>
                <Pikachu />
            </div>
        </SecondSectionContainer>
    )
}

export default SecondSection