import styled from "styled-components";

export const StyledButton = styled.div`
border-radius: 50px;
width: 80%;
height: 10%;
cursor: pointer;
background-color: hsl(224, 30%, 27%);
color: hsl(0, 0%, 100%);
display: flex;
justify-content: center;
align-items: center;
margin: auto;

&:hover {
background: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
}

@media (max-width: 768px) {
    font-size: 90%;
}
`