import ViewButton from "../buttons/ViewButton";
import { StyledHomeCard, StyledFlex } from "./StyledCard.styles";


function HomeCard() {

    return (  
       <>
        <StyledHomeCard>
          <StyledFlex>
            
            <h1>Home</h1>
            <div>
              <ViewButton />
            </div>

          </StyledFlex> 
        </StyledHomeCard>
       </>
    );
}

export default HomeCard;