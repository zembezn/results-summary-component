import Result from "../../Result/Result";
import Button from "./Button/Button";
import { WhiteContainerStyle } from "./Styled/WhiteContainer.styled";


const WhiteContainer = () => {
  return (
    <WhiteContainerStyle>
        <h1>Summary</h1>
        <Result />
        <Result />
        <Result />
        <Result />
        <Button />
    </WhiteContainerStyle>
  )
}

export default WhiteContainer