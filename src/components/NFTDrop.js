import { useContract, useMetadata } from "@thirdweb-dev/react";
import NFTCard from "./NFTCard";
import Navbar from "./Navbar";
const NFTDrop = () => {
  const NFT_ADDRESS = "0x855A10eD0D2C0bDA949C127CeDFed1fc64d2CD8e";
  const { contract } = useContract(NFT_ADDRESS);
  const { data: metadata, isLoading: loadingMetadata } = useMetadata(contract);

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const flexStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  };

  const spinnerStyle = {
    width: "50px",
    height: "50px",
  };

  const simpleGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Changed from 2 to 3
    gap: "10px",
    marginTop: "10px",
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        {loadingMetadata ? (
          <div style={flexStyle}>
            <div style={spinnerStyle}>Loading...</div>
          </div>
        ) : (
          <div style={simpleGridStyle}>
            <NFTCard tokenId={"0"} />
            <NFTCard tokenId={"1"} />
            <NFTCard tokenId={"2"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDrop;
