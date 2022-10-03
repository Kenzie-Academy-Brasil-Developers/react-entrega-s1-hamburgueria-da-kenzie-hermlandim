/* eslint-disable default-case */
import styled, { css } from "styled-components";
import { Constructors } from "../../Components/Constructor/constructor";


    export const TagConstructor = styled(Constructors)`

    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    flex-direction: ${(props) => props.flexDirection};
    flex-wrap: ${(props) => props.flexWrap};
    background-color: ${(props) => props.backgroundColor};

    height: ${(props) => props.height};

    text-align: ${(props) => props.textAlign};

    width: ${(props) => props.width};
    padding: ${(props) => props.padding};

    gap: ${(props) => props.gap};

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
            case "section":
                return css`
                `
            case "ul":
                return css`
                display: flex;
                `
            case "aside":
                return css`
                border: 2px solid var(--color-gray-20);
                border-bottom: 0px;
                border-radius: 10px 10px 0px 0px;
                height: 300px;
                max-height: 600px;
                `
        }
    }}
`
