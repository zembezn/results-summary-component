import styled from "styled-components"

export const Flex = styled.div`
display: flex;
flex-direction: column;
`
export const FlexContainer = styled.div`
display: flex;
border-radius: 30px;
box-shadow: 10px 15px 30px 5px hsla(0, 0%, 50%, 0.3);

@media (max-width: 375px) {
    flex-direction: column;
}
`

export const Attribution = styled.div`
display: flex;
width: 100%;
font-size: 62%; 
align-items: center;
justify-content: center;
margin-top: 30px;
color: hsl(228, 45%, 44%); 
`
