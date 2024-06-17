import { Link } from "react-router-dom";
import { StyledViewButton } from "./Button.styles";

function ViewButton() {

     function onButtonClick() {

     }

     return ( 
        <StyledViewButton onClick={onButtonClick}>
             <Link to={"/home/:id"}>View More</Link>
        </StyledViewButton>
     );
}

export default ViewButton;