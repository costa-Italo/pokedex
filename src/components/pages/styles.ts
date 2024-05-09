
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
`

export const PokemonImage = styled.img`
    width: 16rem;
`

export const PokemonStatsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
`

export const PokemonStatsStyles = styled.p`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    font-weight: bold;
    font-size: 1rem;
    color: #cdd1e0;
`

export const PokemonProfileName = styled.h1`
    font-size: 15rem;
    color: #cdd1e0;
`

export const PokebolaImage = styled.img`
    width: 3rem;
    cursor: pointer;
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`