
import { Result } from "./Styled/Result.styled"

const Summary = ({ text, backgroundcolor, color, src, alt }) => {
  return (
        
        <Result backgroundcolor={backgroundcolor} color={color} >
        <img src={src} alt={alt}  />
          <p>{text}</p>
          {/* <div>80/100</div> */}
        </Result>
        )
}


export default Summary