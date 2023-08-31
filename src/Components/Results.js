
import { ContainerRes, Title, CircleContainer, Span } from "./Styled/ResultsContainer.styled"

const Results = () => {
  return (
    <ContainerRes>
        <Title>Your Result</Title>
        
          <CircleContainer>
            <Span>76</Span> 
            of 100
          </CircleContainer>  
        
        <h1>Great</h1>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </ContainerRes>
  )
}

export default Results