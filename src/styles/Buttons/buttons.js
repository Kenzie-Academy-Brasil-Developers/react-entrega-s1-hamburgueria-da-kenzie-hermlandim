import styled, {css} from "styled-components";

export const Buttons = styled.button`

    color: var(--color-white);

    font-size: 16px;
    font-weight: 600;
    /* line-height: 20px; */
    padding: 1rem;
    
    border-radius: 8px;


    ${({typeButton})=> {
        
        // eslint-disable-next-line default-case
        switch(typeButton){
            case "card":
                return css`
                    background-color: var(--color-primary);

                    &:hover{
                        background-color: var(--color-primary-50);
                    }
                `
            case "card-disabled":
                return css`
                    color: var(--color-gray-50);
                    background-color: var(--color-gray-20);

                    &:hover{
                        color: var(--color-gray-20);
                        background-color: var(--color-gray-50);
                    }
                `
            case "cart":
                return css`
                    padding: .5rem 1rem .5rem 1rem;
                    background-color: var(--color-primary);

                    &:hover{
                        background-color: var(--color-primary-50);
                    }                   
                `
            case "cart-disabled":
                return css`
                    padding: .5rem 1rem .5rem 1rem;
                    color: var(--color-gray-50);
                    background-color: var(--color-gray-20);

                    &:hover{
                        color: var(--color-gray-20);
                        background-color: var(--color-gray-50);
                    }
                `
        }

    }}

`