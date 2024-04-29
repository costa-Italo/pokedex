
import { InputContainer, InputStyles } from "./styles";

interface Props {
    filteredPokemon: string[];
}

const Input:React.FC<Props> = ({ filteredPokemon }) => {

    
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
