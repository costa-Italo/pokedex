import styled from "styled-components";

export const RoutesAppContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
`

export const RoutesAppTitle = styled.h1`
    font-size: 1.5rem;
    cursor: pointer;  
    transition: 0.1s;
    
    &:hover {
        color: red;  
    }
`