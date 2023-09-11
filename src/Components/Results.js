import React from "react"
import { ContainerRes, Title, CircleContainer, Span, SubT, Fback } from "./Styled/ResultsContainer.styled"

const Results = () => {
  return (
    <ContainerRes>
        <Title>Your Result</Title>
        
          <CircleContainer>
            <Span>76</Span> 
              of 100
          </CircleContainer>  
        
        <SubT>Great</SubT>
        <Fback>You scored higher than 65% of the people who have taken these tests.</Fback>
      </ContainerRes>
  )
}

export default Results