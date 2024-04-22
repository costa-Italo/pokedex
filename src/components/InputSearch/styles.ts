import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: red;
    background-color: black;

    padding: 5rem;
`

export const InputTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: #f8f9fa;
    font-size: 1.25rem;
    font-weight: bold;

    gap: 1rem;
    width: 25rem;
`

export const InputStyles = styled.input`
    width: 25rem;
    height: 2.5rem;

    margin-top: 0.25rem;

    border-radius: 0.20rem;
    border: 1px solid #323232;

    text-align: center;

    background-color: #050911;
`

export const ButtonStyles = styled.button`
    height: 2.5rem;
    width: 5rem;

    background-color: #ed5564;
    border: none;
    border-radius: 0.20rem;

    color: #f8f9fa;
    font-weight: bold;

    font-size: 1rem;
`

