import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;
    padding: 0.25rem;

    background-color: black;
`

export const CardImage = styled.img`
    width: 3rem;
`

export const CardStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.25rem;
    height: 5rem;

    background-color: #565759;
    color: #e8f9fa;

    font-size: 0.85rem;
    font-weight: bold;

    border-radius: 0.20rem;
`