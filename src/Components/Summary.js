
import { Category, Result, Score } from "./Styled/Result.styled"


const Summary = ({ text, backgroundcolor, color, src, alt, results }) => {

  return (
        <>
        <Result backgroundcolor={backgroundcolor} color={color} >
          <Category>
            <img src={src} alt={alt}  />
            <p>{text}</p>
          </Category>

          <Score results={results} >
            {/* {results.score}  */}
          / 100</Score>

        </Result>
        
        </>
        )
}


export default Summary