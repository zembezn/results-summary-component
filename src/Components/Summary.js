import React from "react"
import PropTypes from 'prop-types'
import { Category, Result, Score } from "./Styled/Result.styled"


const Summary = ({ result }) => {


  return (
    <Result key={result.id} backgroundColor={result.backgroundColor} color={result.color} >
      <Category key={result.id}>
        
        <img key={result.id} src={result.icon} />
        <p key={result.id} >{result.category}</p>
        
      </Category>

      <Score key={result.id} >
        <div key={result.id} >{result.score}</div> / 100 
      </Score>

    </Result>

  )
}


Summary.propTypes = {
  text: PropTypes.string,
  backgroundcolor: PropTypes.string,
  color: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  score: PropTypes.string,
  result: PropTypes.any
}


export default Summary