import { Link } from "react-router-dom";
import { StyledViewButton } from "./Button.styles";

function ViewButton() {

     function onButtonClick() {

     }

     return ( 
        <StyledViewButton onClick={onButtonClick}>
             <Link to={"/natural/:id"}>View textiles</Link>
        </StyledViewButton>
     );
}

export default ViewButton;