import { Link } from "react-router-dom";
import { StyledBackToSyntheticButton } from "./Button.styles";

function BackToSyntheticButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledBackToSyntheticButton onClick={onButtonClick}>
             <Link to={"/synthetic"}>BACK</Link>
        </StyledBackToSyntheticButton>
     );
}

export default BackToSyntheticButton;