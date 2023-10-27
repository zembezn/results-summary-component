import styled from "styled-components"

export const ContainerRes = styled.div`
width: 350px;
height: 480px;
display: flex;
flex-direction: column;
background: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
border-radius: 30px;
text-align: center;

@media (max-width: 768px) {
    width: 375px;
    height: 360px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
}
`

export const CircleContainer = styled.div`
border-radius: 100%;
width: 200px;
height: 200px;
background: linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0.1));
color: hsl(220, 15%, 55%);
display: flex;
flex-direction: column;
justify-content: center;
margin: 15px auto;
font-weight: bold;

@media (max-width: 768px) {
    border-radius: 100%;
    width: 130px;
    height: 130px;
}
`

export const Span = styled.span`
color: hsl(0, 0%, 100%);
font-size: 400%;
font-weight: bold;

@media (max-width: 768px) {
    font-size: 300%;
}
`

export const Title = styled.p`
color: hsl(241, 100%, 89%);
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
margin-bottom: 10px;
font-size: 130%;

@media (max-width: 768px) {
    font-size: 110%;
}
`
export const SubT = styled.p`
color: hsl(0, 0%, 100%);
font-size: 175%;
margin: 5px auto;
font-weight: bold;

@media (max-width: 768px) {
    font-size: 150%;
}
`

export const Fback = styled.p`
color: hsl(241, 100%, 89%);
margin: 10px 50px;

@media (max-width: 768px) {
    font-size: 90%;
}
`