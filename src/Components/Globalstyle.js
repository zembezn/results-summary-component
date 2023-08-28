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
    display: flex;
    align-items: center;
    font-size: 18px;
    width: 100%;
    justify-content: center;
}

img {
    width: 100%;
    border-radius: 12px;
}

text {
    padding: 22px 10px;
}

h2 {
    font-size: 20px;
    padding-top: 22px;
    color: hsl(218, 44%, 22%);
    padding-bottom: 18px;
    align-items: center;
    justify-content: left;
}

p {
    color: hsl(220, 15%, 55%);
    padding-bottom: 16px;
    align-items: center;
    justify-content: right;
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
