import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Outfit', sans-serif;
    background-color: hsl(0, 0%, 100%);
    display: flex;
    min-height: 100vh;
    align-items: center;
    font-size: 18px;
    justify-content: center;
}

img {
    width: 100%;
    border-radius: 12px;
    width: 18px;
    height: 18px;
    padding-left: 10px;
    padding-right: 8px;
}

text {
    padding: 22px 10px;
}

  
.attribution { font-size: 11px; text-align: center; }
.attribution a { color: hsl(228, 45%, 44%); }
`

export default GlobalStyles
