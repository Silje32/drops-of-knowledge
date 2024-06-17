import styled from "styled-components";

export const StyledBaseButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   min-width: 200px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   :hover {
      background-color: "#C09DDF";
   }

`

export const StyledViewButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   max-width: 270px;
   margin-left: 1000px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   :hover {
      background-color: "#C09DDF";
   }

`

export const StyledBackToNaturalButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   min-width: 200px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   :hover {
      background-color: "#C09DDF";
   }

`

export const StyledBackToSemiButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   min-width: 200px;
   cursor: pointer;
   margin-left: 920px;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   :hover {
      background-color: "#C09DDF";
   }

`

export const StyledBackToSyntheticButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   min-width: 200px;
   cursor: pointer;
   margin-left: 920px;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   :hover {
      background-color: "#C09DDF";
   }

`

export const StyledCloseButton = styled.button`
@font-face {
   font-family: 'noveldisplay-mediumxcmp';
   src: url('noveldisplay-mediumxcmp-webfont.woff2') format('woff2'),
        url('noveldisplay-mediumxcmp-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
}
   padding: 10px 20px;
   font-size: 22px;
   width: 30%;
   margin-left: 500px;
   cursor: pointer;
   color: ${(props) => (props.$isActive ? "blue" : "white")};
   background-color: ${(props) => (props.$isActive ? "black" : "#707070")};

   a {
      text-decoration: none;
      color: ${(props) => (props.$isActive ? "blue" : "white")};
   }

   a:hover {
      background-color: "#C09DDF";
   }
`
;
