import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 2rem;
    margin-left: 4rem;
    background: #ecf0f3;
    border-radius: 20px;
    
`;

export const CardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    height: 10rem;
    width: 8rem;
    border-radius: 20px;
    background-color: #f0f0f0;
    box-shadow: 5px 5px 10px #bfbfbf, 
                -5px -5px 10px #ffffff;
    transition: all 0.3s ease;
    
    &:hover {
        cursor: pointer;
        color: #595959;
        box-shadow: inset 5px 5px 10px #bfbfbf, 
                    inset -5px -5px 10px #ffffff;
    }
`;

export const StylesImage = styled.img`
    width: 6.5rem;
    background-color: transparent;
`;

export const PokemonName = styled.p`
    font-size: 1rem;
    font-weight: bold;
    background-color: transparent;
`;
