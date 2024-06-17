import ViewTextileButton from "../buttons/ViewTextilesButton";
import { StyledSyntheticCard, StyledFlex } from "./StyledCard.styles";


function SyntheticCard() {

    return (  
       <>
         <StyledSyntheticCard>
           <StyledFlex>
            <h1>SYNTHETIC FIBRE</h1>

            <div>
              <h2>Nylon</h2> 
              <p></p>
            </div>
            
            <div>
              <h2>Polyester</h2>
              <p></p>
            </div>
           
            <div>
              <h2>Spandex</h2>  
            </div>

            <div>
                <ViewTextileButton />
            </div>
           
          </StyledFlex> 
         </StyledSyntheticCard>
       </>
    );
}

export default SyntheticCard;