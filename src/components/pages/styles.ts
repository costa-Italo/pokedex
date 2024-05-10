
import styled from "styled-components";

export const ProfileContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    li {
        list-style: none;
      
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
}
`

export const PokemonImage = styled.img`
    width: 10rem;
    background-color: #95f0f2;
    border-radius: 50%;

    @media (max-width: 600px) {
        width: 10rem;
}
`

export const PokemonStatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
    gap: 2rem;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
}
`

export const PokemonStatsStyles = styled.p`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    font-weight: bold;
    font-size: 1rem;
    color: #cdd1e0;
    border: 1px solid #704cf1;
    padding: 1rem;
    border-radius: 1rem;
    justify-content: center;

`

export const PokemonProfileName = styled.h1`
    font-size: 5rem;
    color: #cdd1e0;

    @media (max-width: 600px) {
        font-size: 4rem;
}
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BackButton = styled.button`
    width: 8rem;
    height: 2rem;
    border-radius: 0.25rem;
    background-color: #704cf1;
    border: none;
    cursor: pointer;
    color: #cdd1e0;
    font-weight: bold;
    margin-top: 1rem;

    @media (max-width: 600px) {
        margin-top: 2rem;
}

`