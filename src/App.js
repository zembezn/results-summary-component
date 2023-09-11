import React from "react";
import GlobalStyles from "./Components/Globalstyle"
import Results from "./Components/Results";
import Summary from "./Components/Summary";
import { useEffect, useState } from "react"
import { ContainerSum, Title } from "./Components/Styled/SummaryContainer.styled";
import { Button } from "./Components/Styled/Button.styled";
import { Flex, FlexContainer, Attribution } from "./Components/Styled/Flex.styled";

const App = () =>{ 

  const [results, setResults] = useState([])
  
  useEffect(() => {
    const getResults = async () => {
      const resultsFromServer = await fetchResults()
      setResults(resultsFromServer)
    }
  
    getResults()
  }, [])

  //Fetch Results
  const fetchResults = async () => {
    const res = await fetch("http://localhost:5000/results")
    const data = await res.json()

    return data
    }

return (
    <Flex>
    <FlexContainer>

    <GlobalStyles />
    <Results />

    <ContainerSum>

      <Title>Summary</Title>
      
      {results.map((result) => (<Summary key={results.id} result={result}/>))}
      
      <Button>Continue</Button>

    </ContainerSum>
    </FlexContainer>

    <Attribution>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/zembezn?tab=repositories">Kanya Zembe</a>.
    </Attribution> 

    </Flex>
  
);
}

export default App;


