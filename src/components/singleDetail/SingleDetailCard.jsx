import CloseButton from "../buttons/CloseButton";
import { StyledSingleDetailCard } from "../singleDetail/StyledDetailCard.styles";


function SingleDetailCard() {

    return (  
        <>
          <StyledSingleDetailCard>
              <div>
                <h3>Single Detail</h3>
              </div> 
          
              <div>
                   <CloseButton/>  
              </div>
          </StyledSingleDetailCard>
        </>
    );
}

export default SingleDetailCard;