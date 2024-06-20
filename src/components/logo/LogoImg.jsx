import { Link } from "react-router-dom";
import Logo from "../../images/Logo_final.jpg";
import { StyledLogo } from "./Logo.styles";


function LogoImg() {

    function onLogoClick() {

    }

    return (
        <>
          <div>
              <Link to={"/"}>
                 <StyledLogo src={Logo}  alt="Logo" onClick={onLogoClick} />
              </Link>
          </div>   
        </> 
    );
  }

export default LogoImg;