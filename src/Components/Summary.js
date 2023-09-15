import React from "react"
import PropTypes from 'prop-types'
import { ContainerSum, Title } from "./Styled/SummaryContainer.styled";
import { Category, Result, Score, ResultScore } from "./Styled/Result.styled"
import Button from "./Button";

const Summary = ( {results} ) => {

  return (
    <ContainerSum>

      <Title>Summary</Title>

      {results.map((result) => (

        <Result key={result.id} background={result.bgColor} color={result.color} >

        <Category>
          
          <img src={result.icon} />
          <p>{result.category}</p>
          
        </Category>
  
        <Score>
          <ResultScore>{result.score}</ResultScore>/ 100 
        </Score>
  
      </Result>

      ))}

    <Button text="Continue" onClick={() => {console.log("click")} } />

    </ContainerSum>
  )
}


Summary.propTypes = {
  results: PropTypes.any,
  background: PropTypes.string
  
}


export default Summary