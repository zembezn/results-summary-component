import styled from "styled-components"

export const Result = styled.div`
max-width: 80%;
height: 12%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: ${({ backgroundcolor }) => backgroundcolor};
color: ${({ color }) => color };
border-radius: 8px;
margin: 8px 30px 8px  ;
`
export const Category = styled.div`
display: flex;
margin: 5px;
`
export const Score = styled.p`
color: hsl(220, 15%, 55%);
margin: 20px;
`
