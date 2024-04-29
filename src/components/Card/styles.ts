import styled from "styled-components";

export const CardsContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;


background-color: #dcdcdc;

padding: 2rem;
gap: 1rem;

margin-left: 4rem;
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

    &:hover{
        background-color: #757575;
        cursor: pointer;
        transition: 5ms;
        color: white;
    }
`

export const StylesImage = styled.img`
    width: 6.5rem;
    background-color: transparent;

`

export const PokemonName = styled.p`
    font-size: 1rem;
    font-weight: bold;
    background-color: white;
    background-color: transparent;

`


