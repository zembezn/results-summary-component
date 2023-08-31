import GlobalStyles from "./Components/Globalstyle"
import Results from "./Components/Results";
import Summary from "./Components/Summary";
import { ContainerSum } from "./Components/Styled/SummaryContainer.styled";


const App = () => (
  <>
    <GlobalStyles />

    <Results />

    <ContainerSum>
      <h2>Summary</h2>
      <Summary />
    </ContainerSum>


  </>
)

export default App;
