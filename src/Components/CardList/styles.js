import styled from "styled-components";

export const List = styled.li`
    border: 2px solid var(--color-gray-20);
    border-radius: 10px;

    width: 32%;

    

    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */


    figure{
        background-color: var(--color-gray-0);
        text-align: center;
        width: 100%;
    }

    img{
        max-width: 100%;
        height: 100%;
        width: 100%;
        object-fit: none;
    }
`