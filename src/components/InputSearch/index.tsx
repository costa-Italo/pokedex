import { MagnifyingGlass } from "@phosphor-icons/react";
import { ButtonStyles, InputContainer, InputStyles, InputTitle } from "./styles";

const InputSearch = () => {
    return (
        <InputContainer>          
            <InputTitle><MagnifyingGlass size={30}/>Encontre seu pokémon:</InputTitle>
            <div>
                <InputStyles
                    type="text" 
                    placeholder="Escolha seu pokémon!"
                />
                <ButtonStyles>Pesquisar</ButtonStyles>
            </div>
        </InputContainer>  
    )
}

export default InputSearch;