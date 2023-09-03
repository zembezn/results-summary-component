import styled from "styled-components"

export const ContainerRes = styled.div`
width: 300px;
height: 500px;
max-width: 100%;
display: flex;
flex-direction: column;
background: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
border-radius: 25px;
text-align: center;
`

export const CircleContainer = styled.div`
border-radius: 100%;
width: 160px;
height: 160px;
background-color:hsla(256, 72%, 46%, 1);
background-color: hsla(241, 72%, 46%, 0.4);
color: hsl(220, 15%, 55%);
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
margin: 15px auto;
`

export const Span = styled.p`
color: hsl(0, 0%, 100%);
margin-top: 30px;
align-items: center;
justify-content: center;
`
export const Title = styled.p`
color: hsl(241, 100%, 89%);
display: flex;
align-items: center;
justify-content: center;
padding-top: 30px;
padding-bottom: 10px;
`