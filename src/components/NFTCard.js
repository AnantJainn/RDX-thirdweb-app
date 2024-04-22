import {
  useAddress,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import { useSigner } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
const NFTCard = ({ tokenId }) => {
  const NFT_ADDRESS = "0x855A10eD0D2C0bDA949C127CeDFed1fc64d2CD8e";

  const address = useAddress();
  const signer = useSigner();
  console.log(signer);
  const { contract } = useContract(NFT_ADDRESS);
  console.log(contract);
  const { data } = useNFT(contract, tokenId);

  const cardStyle = {
    border: "1px solid #e1e1e1",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column", // Changed to column to stack image and content
    alignItems: "center", // Center items horizontally
    width: "400px",
    marginBottom: "20px",
    overflow: "hidden",
    backgroundColor: "#fff", // Moved here from contentContainerStyle
  };

  const imageContainerStyle = {
    width: "100%", // Image container should take full width of card
  };

  const imageStyle = {
    width: "100%", // Image should take full width of its container
    height: "auto", // Height should be auto to maintain aspect ratio
    objectFit: "cover", // Cover the imageContainer completely
  };

  const contentContainerStyle = {
    padding: "16px",
    textAlign: "center", // Center the text
  };

  const headingStyle = {
    color: "black",
    fontSize: "1.6rem", // Adjusted for better fit
    margin: "8px 0", // Added top and bottom margin
  };

  const descriptionStyle = {
    fontSize: "1.4rem",
    margin: "0 0 16px 0", // Added top margin
    height: "4em", // Set a fixed height for consistent card sizes
    overflow: "hidden", // Hide overflow
    textOverflow: "ellipsis", // Add an ellipsis to text that overflows
  };

  const buttonStyle = {
    backgroundColor: "#6C5DD3",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "0 auto", // Center button in the content container
    display: "block", // Ensure the button is block-level for auto margins to work
  };

  // const handleClick = async () => {
  //   if (address && contract) {
  //     try {
  //       const tx = await contract.erc1155.claim(tokenId, 1);
  //       console.log("NFT claimed successfully!", tx);
  //     } catch (error) {
  //       console.error("Error claiming NFT:", error);
  //     }
  //   }
  // };

  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <img
          src={data?.metadata.image}
          alt={data?.metadata.name}
          style={{ width: "400px", height: "350px" }}
        />
      </div>
      <div style={contentContainerStyle}>
        <h1 style={headingStyle}>{data?.metadata.name}</h1>
        <p style={descriptionStyle}>{data?.metadata.description}</p>
        <div>
          {!address ? (
            <p>Connect to claim</p>
          ) : (
            <Web3Button
              contractAddress={NFT_ADDRESS}
              action={() => contract.erc1155.claim(tokenId, 1)}
              style={buttonStyle}
            >
              Claim NFT
            </Web3Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
