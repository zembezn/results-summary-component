import GlobalStyles from "./Components/Globalstyle"
import { Result } from "./Components/Styled/Result.styled";
import { Span, CircleContainer, ContainerRes, Title } from "./Components/Styled/ResultsContainer.styled";
import { ContainerSum } from "./Components/Styled/SummaryContainer.styled";


const App = () => {
  return (
    <>
      <GlobalStyles />

      <ContainerRes>
        <Title>Your Result</Title>
        
          <CircleContainer>
            <Span>76</Span> 
            of 100
          </CircleContainer>  
        
        <h1>Great</h1>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </ContainerRes>
      
      <ContainerSum>
        <h2>Summary</h2>
        <Result />
      </ContainerSum>
     

    </>
  );
}

export default App;
