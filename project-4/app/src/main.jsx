import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *{
    box-sizing : border-box;
    margin : 0;
    padding : 0;
   }

   body{
    background-color: #323334;
    color : white;
    min-height : 100vh;
   }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);


// const FoodCardContainer = styled.section`
//   display : flex;
//   justify-content: space-around;
// `;
// const FoodCards = styled.div`
// display: flex;
// align-items: flex-start;
// gap: 20px;
// `;
// const FoodCard = styled.div`
// width: 340px;
// height: 167px;
// flex-shrink: 0;

// border-radius: 19.447px;
// border: 0.659px solid #98F9FF;
// background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
// background-blend-mode: overlay, normal;
// backdrop-filter: blur(13.184196472167969px);
// `;