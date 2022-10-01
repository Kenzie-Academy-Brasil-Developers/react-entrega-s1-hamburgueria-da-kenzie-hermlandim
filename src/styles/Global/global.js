import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    ul, ol, li{
        list-style: none;
    }
    img{
        max-width: 100%;
    }
    input, select{
        background: transparent;
        border: none;
    } 
    :root{
        //https://www.figma.com/file/oVfkgPVhj0xG9Jfi238pHd/M3---1B07---Entrega---Hamburgueria-da-Kenzie-(Copy)?node-id=1%3A417
        /*Primary Pallete*/

        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        /* Grey Scale */

        --color-gray-100: #333333;
        --color-gray-50: #828282; 
        --color-gray-20: #E0E0E0;
        --color-gray-0: #F5F5F5;
        --color-white: #FFFFFF;

        /* FeedBack Palette */

        --color-negative: #E60000;
        --color-warning: #FFCD07; 
        --color-sucess: #168821;
        --color-information: #155BCB;
    }

    
    body{
        background: var(--color-white);
        font-family: 'Inter', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p, span, li{
    color: var(--color-gray-100);
}

`;