import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  smartWallet,
  useAddress,
} from "@thirdweb-dev/react";
import NFTDrop from "./components/NFTDrop";
const smartWalletOptions = {
  factoryAddress: "0x17e27D7Be06812a9452F4cE05f49a264d0075A70",
  gasless: true,
};

const App = () => {
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
      <NFTDrop />
    </ThirdwebProvider>
  );
};
export default App;
