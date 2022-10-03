/* eslint-disable default-case */
import styled, { css } from "styled-components";
import { BaseTitle } from "../Components/typography";


    export const StyledTags = styled(BaseTitle)`
    font-weight: 700;
    line-height: 24px;
    color: ${(props) => props.fontColor}; /* utilizando o valor da props como valor de color */
    /* Regra condicional com props, o CSS se altera com base no valor da prop */
    text-align: ${(props) => props.textAlign};
    border-radius: ${(props) => props.borderRadius};
    background-color: ${(props) => props.backgroundColor};

    height: ${(props) => props.height};

    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    flex-direction: ${(props) => props.flexDirection};

    margin-left: ${(props) => props.marginLeft};
    ${({typography}) => {
        switch (typography){
            case "h1":
                return css`
                    font-size: 26px;
                    line-height: 34px;
                `
            case "h2": 
                return css`
                    font-size: 22px;
                `
            case "h3": 
                return css`
                    font-size: 18px;
                `
            case "h4": 
                return css`
                    font-size: 14px;
                    line-height: 24px;
                `
            case "headline": 
                return css`
                    font-size: 16px;
                    font-weight: 400;
                `
            case "body": 
                return css`
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--color-gray-50);
                `
            case "body-600": 
                return css`
                    font-size: 14px;
                    font-weight: 600;
                    
                `
            case "caption": 
                return css`
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 16px;
                                        font-weight: 400;
                    color: var(--color-gray-50);
                `
        }
    }}
`
