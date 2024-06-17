import ViewTextilesButton from "../buttons/ViewTextilesButton";
import CloseButton from "../buttons/CloseButton";
import { StyledSemiCard } from "./StyledCard.styles";

function SemiCard() {

    return (  
        <>
          <StyledSemiCard>
            <div>
              <h1>SEMI SYNTHETIC FIBRE</h1>

              <h2>Rayon</h2>
              <p>Rayon mainly comes from wood pulp.</p>
            </div>

            <div>
              <h2>Viscose</h2>
              <p>Viscose was the first generation of semi-synthetic fibres (year 1905).</p>
              <p>Bamboo viscose comes from bamboo grass.</p>
            </div>
             
            <div>
              <h2>Modal</h2>
              <p>Modal was the second generation of semi-synthetic fibres (year 1950).
              <p>Modal often comes from beech trees.</p>  
              </p>
            </div>

            <div>
              <h2>Lyocell</h2>
              <p>Lyocell mainly comes from eucalyptus trees and is the latest generation of semi-synthetic
                 fibres (year ?).</p>
            </div>

            <div>
              <h2>Seacell</h2>
              <p>Seacell comes from seaweed.</p>
            </div>

            <div>
              <ViewTextilesButton />
              <CloseButton />
            </div>

          </StyledSemiCard>
        </>
    );
}

export default SemiCard;