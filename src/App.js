import GlobalStyles from "./Components/Globalstyle"
import Results from "./Components/Results";
import Summary from "./Components/Summary";
import { ContainerSum } from "./Components/Styled/SummaryContainer.styled";
import { Button } from "./Components/Styled/Button.styled";
import { Flex } from "./Components/Styled/Flex.styled";

const App = () => (
  <>
    <Flex>

    <GlobalStyles />
    <Results />

    <ContainerSum>
      <p>Summary</p>
      <Summary text={"Reaction"} backgroundcolor="hsla(0, 100%, 67%, 0.1)" color="hsl(0, 100%, 67%)" src="./images/icon-reaction.svg" alt="reaction"/>
      <Summary text={"Memory"} backgroundcolor="hsla(39, 100%, 56%, 0.1)" color="hsl(39, 100%, 56%)" src="./images/icon-memory.svg" alt="memory"/>
      <Summary text={"Verbal"} backgroundcolor="hsla(166, 100%, 37%, 0.1)" color="hsl(166, 100%, 37%)" src="./images/icon-verbal.svg" alt="verbal"/>
      <Summary text={"Visual"} backgroundcolor="hsla(234, 85%, 45%, 0.1)" color="hsl(234, 85%, 45%)" src="./images/icon-visual.svg" alt="visual"/>
      <Button>Continue</Button>
    </ContainerSum>

    </Flex>
  </>
)

export default App;


