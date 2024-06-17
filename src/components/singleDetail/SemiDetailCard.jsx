import BackToSemiButton from "../buttons/BackToSemiButton";
import { StyledSemiDetailCard } from "../singleDetail/StyledDetailCard.styles";
import { StyledButtonCard } from "../cards/StyledCard.styles";


function SemiDetailCard() {

    return (  
        <>
          <StyledSemiDetailCard>
              <div>
                <h3>Details</h3>
              </div> 
          
              <div>
                <StyledButtonCard>
                  <BackToSemiButton />
                </StyledButtonCard>   
              </div>
          </StyledSemiDetailCard>
        </>
    );
}

export default SemiDetailCard;