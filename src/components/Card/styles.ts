import styled from "styled-components";

export const CardsConstainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;

background-color: #dcdcdc;

padding: 2rem;
gap: 1rem;
`

export const CardStyles = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    height: 10rem;
    width: 8rem;
    
    border-radius: 0.25rem;
    background-color: white;

    gap: 1rem;
`

export const StylesImage = styled.img`
    width: 3rem;
    background-color: white;
`

export const PokemonName = styled.p`
    font-size: 0.75rem;
    font-weight: bold;
    background-color: white;
`
export const PokemonTypes = styled.p`
    font-size: 0.75rem;
    font-weight: bold;
    background-color: white;
`

