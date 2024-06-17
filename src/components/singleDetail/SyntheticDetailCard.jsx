import BackToSyntheticButton from "../buttons/BackToSyntheticButton";
import { StyledSyntheticDetailCard } from "../singleDetail/StyledDetailCard.styles";


function SyntheticDetailCard() {

    return (  
        <>
          <StyledSyntheticDetailCard>
            <div>
              <BackToSyntheticButton/>
            </div>
          </StyledSyntheticDetailCard>
        </>
    );
}

export default SyntheticDetailCard;