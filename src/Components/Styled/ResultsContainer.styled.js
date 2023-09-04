import styled from "styled-components"

export const ContainerRes = styled.div`
width: 350px;
height: 480px;
max-width: 100%;
display: flex;
flex-direction: column;
background: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
border-radius: 25px;
text-align: center;
`

export const CircleContainer = styled.div`
border-radius: 100%;
width: 200px;
height: 200px;
background-color:hsla(256, 72%, 46%, 1);
background-color: hsla(241, 72%, 46%, 0.4);
color: hsl(220, 15%, 55%);
display: flex;
flex-direction: column;
justify-content: center;
margin: 15px auto;
`

export const Span = styled.span`
color: hsl(0, 0%, 100%);
font-size: 400%;
`

export const Title = styled.p`
color: hsl(241, 100%, 89%);
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
margin-bottom: 10px;
font-size: 130%;
`
export const SubT = styled.p`
color: hsl(0, 0%, 100%);
font-size: 180%;
margin: 5px auto;
`

export const Fback = styled.p`
color: hsl(241, 100%, 89%);
margin: 10px 50px;
`