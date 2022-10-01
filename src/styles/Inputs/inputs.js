import styled from "styled-components";

export const Inputs = styled.input`

    padding: 0.5rem 1rem 0.5rem 0.5rem;

    border: none;

     /* border: 2.5px solid var(--color-gray-20); */
     border-radius: 10px; 

    &::placeholder{
        color: var(--color-gray-20);
    }

    &:focus{
        outline: none;
        /* border: 2.5px solid var(--color-gray-100); */
    }
    &:focus::placeholder{
        color: var(--color-gray-50);
    }

`