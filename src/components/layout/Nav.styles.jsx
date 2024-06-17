import styled from "styled-components";

export const NavStyling = styled.nav`

ul {
   list-style-type: none;
   padding: 20px 30px;
   display: flex;
   justify-content: space-between;
   max-width: 3100px;
   cursor: pointer;
   background-color: ${(props) => (props.$nav ? "#5EA7EF" : "white")};
}

ul li {
   margin: 0 auto;
}


a {
   color: ${(props) => (props.$nav ? "white" : "black")};
   text-decoration: none;
   font-size: 18px;
   font-family: haboro-serif, times new roman, serif;
   font-style: normal;
   font-weight: 500;
}

a:hover {
   color: #5EA7EF;
}

`; 
