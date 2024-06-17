import { Link } from "react-router-dom";
import { StyledBackToNaturalButton } from "./Button.styles";

function BackToNaturalButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledBackToNaturalButton onClick={onButtonClick}>
             <Link to={"/natural"}>BACK</Link>
        </StyledBackToNaturalButton>
     );
}

export default BackToNaturalButton;