import { InputContainer, InputStyles } from "./styles";

interface Props {
    filteredPokemon: (nome: string) => void;
}

const Input:React.FC<Props> = ({ filteredPokemon }) => {

    
    return (
        <InputContainer>
            <InputStyles 
                type="text"
                placeholder="Encontre seu pokemon"
                onChange={(e) => filteredPokemon(e.target.value)}
            />
        </InputContainer>
    )
}

export default Input;
