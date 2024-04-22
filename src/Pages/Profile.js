import React, { useState, useEffect } from "react";
import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const NFT_ADDRESS = "0x855A10eD0D2C0bDA949C127CeDFed1fc64d2CD8e";
  const navigate = useNavigate();
  const address = useAddress();
  const { contract } = useContract(NFT_ADDRESS);

  const [transferAddress, setTransferAddress] = useState("");
  const toast = (message) => {
    console.log(message);
  };

  // Fetching owned NFTs using useOwnedNFTs
  const { data: ownedNFTs, isLoading: loadingOwnedNFTs } = useOwnedNFTs(
    contract,
    address
  );

  useEffect(() => {
    if (!loadingOwnedNFTs && ownedNFTs) {
      console.log("Owned NFTs:", ownedNFTs);
    }
  }, [loadingOwnedNFTs, ownedNFTs]);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "40px" }}>
      <button
        onClick={() => navigate("/nft-drop")}
        style={{
          padding: "8px 16px",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Back
      </button>
      <h1 style={{ marginTop: "40px", marginBottom: "20px", color: "#333" }}>
        Profile
      </h1>
      <div>
        <p style={{ fontWeight: "bold", color: "#333" }}>My Elements:</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {!loadingOwnedNFTs &&
            ownedNFTs.map((nft) => (
              <div
                key={nft.id}
                style={{
                  overflow: "hidden",
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                <img
                  src={nft.metadata.image}
                  alt={nft.metadata.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    marginBottom: "10px",
                  }}
                >
                  <p style={{ fontWeight: "bold", color: "#333" }}>
                    {nft.metadata.name}
                  </p>
                  <p style={{ color: "#333" }}>Qty: {nft.quantityOwned}</p>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    marginBottom: "10px",
                    color: "#333",
                  }}
                >
                  Transfer to:
                </p>
                <input
                  type="text"
                  placeholder="0x00000"
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    marginBottom: "10px",
                    boxSizing: "border-box",
                  }}
                  value={transferAddress}
                  onChange={(e) => setTransferAddress(e.target.value)}
                />
                {transferAddress !== "" && (
                  <div>
                    <button
                      onClick={() => {
                        contract.methods
                          .transfer(transferAddress, nft.metadata.id, 1)
                          .send()
                          .on("transactionHash", () => {
                            toast("Transfer in progress...");
                            setTransferAddress("");
                          })
                          .on("receipt", () => {
                            toast("Transfer completed successfully.");
                          })
                          .on("error", (error) => {
                            toast(
                              `Error transferring element: ${error.message}`
                            );
                          });
                      }}
                      style={{
                        padding: "8px 16px",
                        background: "#f0f0f0",
                        color: "#333",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Transfer
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
