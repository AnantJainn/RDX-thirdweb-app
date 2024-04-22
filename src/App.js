// import {
//   ThirdwebProvider,
//   metamaskWallet,
//   coinbaseWallet,
//   walletConnect,
//   localWallet,
//   embeddedWallet,
//   smartWallet,
//   useAddress,
// } from "@thirdweb-dev/react";
// import NFTDrop from "./components/NFTDrop";
// const smartWalletOptions = {
//   factoryAddress: "0x17e27D7Be06812a9452F4cE05f49a264d0075A70",
//   gasless: true,
// };

// const App = () => {
//   const activeChain = "sepolia";
//   return (
//     <ThirdwebProvider
//       clientId="7e9b4a065a1794e93d8839b9ebbbea96"
//       activeChain={activeChain}
//       autoConnectTimeout={10000}
//       supportedWallets={[
//         smartWallet(metamaskWallet(), smartWalletOptions),
//         smartWallet(coinbaseWallet({ recommended: true }), smartWalletOptions),
//         smartWallet(walletConnect(), smartWalletOptions),
//         smartWallet(localWallet(), smartWalletOptions),
//         smartWallet(
//           embeddedWallet({
//             auth: { options: ["email", "google", "apple", "facebook"] },
//           }),
//           smartWalletOptions
//         ),
//       ]}
//     >
//       <NFTDrop />
//     </ThirdwebProvider>
//   );
// };
// export default App;
// import "./App.css";
import { Routes, Route } from "react-router-dom";

// import GlobalStyles from "./Styles/GlobalStyles";
import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import { light } from "./Styles/Themes";
import Navigation from "./components/Navigation";
import Home from "./sections/Home";
import About from "./sections/About";
import Roadmap from "./sections/Roadmap";
import Showcase from "./sections/Showcase";
// import Team from "./components/sections/Team"; // Commented as per your existing code
import Faq from "./sections/Faq";
import Footer from "./sections/footer";
import Services from "./sections/Services";
import NFTDrop from "./components/NFTDrop";
import Profile from "./Pages/Profile";
import Landing from "./Pages/Landing";
import {
  ThirdwebProvider,
  // ConnectWallet,  // If not used directly here, no need to import
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  smartWallet,
  useAddress,
} from "@thirdweb-dev/react";

const smartWalletOptions = {
  factoryAddress: "0x17e27D7Be06812a9452F4cE05f49a264d0075A70",
  gasless: true,
};

function App() {
  const activeChain = "sepolia";
  return (
    <ThirdwebProvider
      clientId="7e9b4a065a1794e93d8839b9ebbbea96"
      activeChain={activeChain}
      autoConnectTimeout={10000}
      supportedWallets={[
        smartWallet(metamaskWallet(), smartWalletOptions),
        smartWallet(coinbaseWallet({ recommended: true }), smartWalletOptions),
        smartWallet(walletConnect(), smartWalletOptions),
        smartWallet(localWallet(), smartWalletOptions),
        smartWallet(
          embeddedWallet({
            auth: { options: ["email", "google", "apple", "facebook"] },
          }),
          smartWalletOptions
        ),
      ]}
    >
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Routes>
          {/* <Route
          path="/"
          element={
            <>
              <Navigation />
              <Home />
              <About />
              <Services />
              <Roadmap />
              <Showcase />
              
              <Faq />
              <Footer />
            </>
          }
        /> */}
          <Route path="/" element={<Landing />} />
          <Route path="/nft-drop" element={<NFTDrop />} />
          <Route path="/profile/:address" element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default App;
