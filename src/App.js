import GlobalStyles from "./Components/Globalstyle"
import { Result } from "./Components/Styled/Result.styled";
import { ContainerRes } from "./Components/Styled/ResultsContainer.styled";
import { ContainerSum } from "./Components/Styled/SummaryContainer.styled";


const App = () => {
  return (
    <>
      <GlobalStyles />

      <ContainerRes>
        <h3>Your Result</h3>
        <p>
          <span>76</span> of 100
        </p>
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
