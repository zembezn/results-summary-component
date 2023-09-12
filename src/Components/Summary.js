import React from "react"
import PropTypes from 'prop-types'
import { Category, Result, Score, ResultScore } from "./Styled/Result.styled"

const Summary = ({ result }) => {


  return (
  
    <Result key={result.id} bgColor={result.bgcolor} color={result.color} >
      <Category>
        
        <img key={result.id} src={result.icon} />
        <p key={result.id} >{result.category}</p>
        
      </Category>

      <Score>
        <ResultScore key={result.id} >{result.score}</ResultScore>/ 100 
      </Score>

    </Result>
  )
}


Summary.propTypes = {
  result: PropTypes.any
}


export default Summary