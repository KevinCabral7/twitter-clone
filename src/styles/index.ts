import { createGlobalStyle } from "styled-components";
import Bold from "../fonts/ChirpBold.ttf";
import Regular from "../fonts/ChirpRegular.ttf";
import Medium from "../fonts/ChirpMedium.ttf";
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'ChirpRegular';
    src: url(${Regular}) format('truetype');
  }
  @font-face {
    font-family: 'ChirpBold';
    src: url(${Bold}) format('truetype');
  }
  @font-face {
    font-family: 'ChirpMedium';
    src: url(${Medium}) format('truetype');
  }
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    background-color:#000;
    font-family: ChirpRegular;
    color: #fff;
    svg{
        fill: #fff;
        width: 25px;
        margin-left: 22px;
    }
  }
`;

export default GlobalStyle;
