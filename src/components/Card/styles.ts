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
    &:hover {
        font-weight: bold;
    }
    
`;

export const CardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    height: 10rem;
    width: 8rem;
    border-radius: 5px;
    background: #ecf0f3;
    color: #31344b;
    cursor: pointer;
    box-shadow: -3px -3px 7px #ffffff,
                    3px 3px 5px #ceced1;

    &:hover {
        box-shadow: inset -3px -3px 7px #ffffff,
                    inset 3px 3px 5px #ceced1;

    }
`;


export const StylesImage = styled.img`
    width: 6.5rem;
    background-color: transparent;
`;

export const PokemonName = styled.p`
    font-size: 1.2rem;
    font-weight: lighter;
    background-color: transparent;

`;
