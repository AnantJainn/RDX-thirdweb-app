// import React from "react";
// import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { ThirdwebProvider } from "@thirdweb-dev/react";
// // import "./styles/globals.css";
// import { BrowserRouter } from "react-router-dom/dist";
// const activeChain = "ethereum";

// const container = document.getElementById("root");
// const root = createRoot(container);
// ReactDOM.render(
//   <React.StrictMode>
//     <ThirdwebProvider
//       activeChain={activeChain}
//       clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
//     >
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ThirdwebProvider>
//   </React.StrictMode>
// );
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
// const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
