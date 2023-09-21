import React from "react";
import GlobalStyles from "./Components/Styled/Globalstyle"
import Results from "./Components/Results";
import Summary from "./Components/Summary";
import { useEffect, useState } from "react"
import { Flex, FlexContainer } from "./Components/Styled/Flex.styled";
import Attribution from "./Components/Attribution";

const App = () => { 

  const [results, setResults] = useState([])
  
  useEffect(() => {
    const fetchResults = async () => {
      const res = await fetch("https://raw.githubusercontent.com/zembezn/results-summary-component/master/db.json")
      const data = await res.json()
  
      setResults(data)
      console.log(data)
      }
  
    fetchResults()
  }, [])
    
  return (
    <Flex>

    <GlobalStyles />

    <FlexContainer>
    
    <Results results={results} />

    <Summary results={results} />

    </FlexContainer>

    <Attribution /> 

    </Flex>
  );
}

export default App;


