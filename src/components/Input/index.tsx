
import { InputContainer, InputStyles } from "./styles";

const Input = ({ filteredPokemon }) => {

    
    return (
        <InputContainer>
            <InputStyles 
                type="text"
                placeholder="Procure um porkemon"
                onChange={(e) => filteredPokemon(e.target.value)}
            />
        </InputContainer>
    )
}

export default Input;