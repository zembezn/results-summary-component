import React from "react"
import PropTypes from "prop-types"
import { ContainerRes, Title, CircleContainer, Span, SubT, Fback } from "./Styled/ResultsContainer.styled"

const Results = ({ results }) => {

const scores = results.map((score) => { return score.score;})

  function findAverage(array) {
    let average = 0;
    for (let i = 0; i < array.length; i++){
      let currentNum = array[i]
      average += currentNum;
    }
    average = average / array.length
    average = average.toFixed(0)
    return average;
  }

  const Average = findAverage(scores)

  return (
    <ContainerRes>
        <Title>Your Result</Title>
        
          <CircleContainer>
            <Span>{Average}</Span> of 100
          </CircleContainer>  
        
        <SubT>Great</SubT>
        <Fback>You scored higher than 65% of the people who have taken these tests.</Fback>
      </ContainerRes>
  )
}

Results.propTypes = {
  results: PropTypes.any
}

export default Results