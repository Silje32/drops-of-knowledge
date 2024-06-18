import { NavLink } from "react-router-dom";
import LogoImg from "../logo/LogoImg";
import Header from "../header/Header";
import { NavStyling } from "./Nav.styles"; 


function Nav() {

  return (
    <nav>
        <NavStyling>       
            <>       
              <ul>
                 <LogoImg />
                 <Header />   
                <li>
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/natural">NATURAL</NavLink>
                </li>
                <li>
                  <NavLink to="/semi">SEMI SYNTHETIC</NavLink>
                </li>
                <li>
                  <NavLink to="/synthetic">SYNTHETIC</NavLink>
                </li>
                <li>
                  <NavLink to="/sources">SOURCES</NavLink>
                </li>
              </ul>  
            </> 
        </NavStyling> 
    </nav>
  );
}

export default Nav;