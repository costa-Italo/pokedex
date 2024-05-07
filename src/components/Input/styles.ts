import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: #ecf0f3;
    border-radius: 15px;
`;

export const InputStyles = styled.input`
    width: 20rem;
    height: 2.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    text-align: center;
    font-size: 1.25rem;
    background: #dcdfe6;
    color: rgb(78,78,78);
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6),
                    -9px -9px 16px rgba(2255,255,255,0.5);
`;
