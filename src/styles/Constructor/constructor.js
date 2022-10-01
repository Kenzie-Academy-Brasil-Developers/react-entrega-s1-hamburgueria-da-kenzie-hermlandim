/* eslint-disable default-case */
import styled, { css } from "styled-components";
import { Constructors } from "../../Components/Constructor/constructor";


    export const TagConstructor = styled(Constructors)`

    color: ${(props) => props.fontColor}; /* utilizando o valor da props como valor de color */
    /* Regra condicional com props, o CSS se altera com base no valor da prop */
    ${({tagName}) => {
        switch (tagName){
            case "img":
                return css`

                `
            case "figure": 
                return css`

                `
            case "main":
                return css`
                `
        }
    }}
`
