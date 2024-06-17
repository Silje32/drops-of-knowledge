import ViewTextilesButton from "../buttons/ViewTextilesButton";
import { StyledNaturalCard, StyledFlex } from "./StyledCard.styles";

function NaturalCard() {

    return (  
        <>
          <StyledNaturalCard>
            <StyledFlex>
            <h1>NATURAL FIBRE</h1>

            <div>
              <h2>Silk</h2>
              <p></p>
            </div>
           
            <div>
              <h2>Wool</h2>
              <p></p>
            </div>
           
            <div>
              <h2>Cotton</h2>
              <h2>- The King of Textiles</h2>
              <p>  </p>
            </div>
            
            <div>
              <h2>Linen</h2>
              <p></p>
            </div>
           
            <div>
              <ViewTextilesButton />
            </div>

            </StyledFlex> 
          </StyledNaturalCard>
        </>
    );
}

export default NaturalCard;