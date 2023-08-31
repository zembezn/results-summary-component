import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Outfit', sans-serif;
    background-color: hsl(0, 0%, 100%);
    min-height: 100vh;
    align-items: center;
    font-size: 18px;
    width: 100%;
    height: 100%;
    justify-content: center;
}

img {
    width: 100%;
    border-radius: 12px;
    width: 20px;
    height: 20px;
    padding-left: 10px;
}

text {
    padding: 22px 10px;
}

h1 {
    font-size: 35px;
    margin: 10px auto;
    color: hsl(0, 0%, 100%);
    align-items: center;
    justify-content: center;
    font-weight: lighter;
}

h3 {
    color: hsl(0, 100%, 67%);
    align-items: center;
    justify-content: right;
    font-size: 1em;
    font-weight: lighter;
}

p {
    color: hsl(241, 100%, 89%);
    align-items: center;
    }
.attribution { font-size: 11px; text-align: center; }
.attribution a { color: hsl(228, 45%, 44%); }

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

`

export default GlobalStyles
