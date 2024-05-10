import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 2rem;
    margin-left: 4rem;
    background: #191923;
    border-radius: 20px;  

    @media (max-width: 600px) {
        display: flex;
        flex-direction: row;
        margin-left: 1rem;
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
    background: #242133;
    color: #cdd1e0;
    cursor: pointer;

    &:hover {
        background-color: #704cf1;
    }

    @media (max-width: 600px) {
        width: 4rem;
        height: 6rem;
}
`;

export const StylesImage = styled.img`
    width: 6.5rem;
    background-color: transparent;

    @media (max-width: 600px) {
        width: 3rem;  
}
`;

export const PokemonName = styled.p`
    font-size: 1.2rem;
    font-weight: lighter;
    background-color: transparent;

    @media (max-width: 600px) {
    font-size: 0.7rem;
}

`;

