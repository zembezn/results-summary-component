import styled from "styled-components"

export const Result = styled.div`
height: 10%;
max-width: 80%;
display: flex;
flex-direction: row;
align-items: center;
background-color: ${({ backgroundcolor }) => backgroundcolor};
color: ${({ color }) => color };
border-radius: 8px;
`
export const Score = styled.div`
color: hsl(220, 15%, 55%);
display: flex;
`
