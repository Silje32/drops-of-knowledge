import { Link } from "react-router-dom";
import { StyledDetailsButton } from "../singleDetail/StyledDetailButton.styles";

function DetailsButton() {

    function onButtonClick() {

    }

    return ( 
        <StyledDetailsButton onClick={onButtonClick}>
            <Link to={"/natural/:id"}>VIEW MORE</Link>
        </StyledDetailsButton>
    );
}

export default DetailsButton;