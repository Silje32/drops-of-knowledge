import BackToNaturalButton from "../buttons/BackToNaturalButton";
import { StyledNaturalDetailCard } from "../singleDetail/StyledDetailCard.styles";


function NaturalDetailCard() {

    return (  
        <>
          <StyledNaturalDetailCard>

            <h1>NATURAL SINGLE PAGE</h1>
            <div>
              <BackToNaturalButton/>
            </div>
          </StyledNaturalDetailCard>
        </>
    );
}

export default NaturalDetailCard;