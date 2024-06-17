import { Link } from "react-router-dom";
import { StyledBackToSemiButton } from "./Button.styles";

function BackToHomeButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledBackToSemiButton onClick={onButtonClick}>
             <Link to={"/semi"}>BACK</Link>
        </StyledBackToSemiButton>
     );
}

export default BackToHomeButton;