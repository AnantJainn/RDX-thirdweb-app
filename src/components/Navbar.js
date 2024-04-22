import React, { useState } from "react";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const address = useAddress();
  const navigate = useNavigate();
  const disconnect = useDisconnect();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    if (address) {
      navigate(`/profile/${address}`);
    }
  };

  const handleHome = () => {
    navigate("/");
  };
  // const handleProfile = () => {
  //   window.location.href = `/profile/${address}`;
  // };
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const containerStyle = {
    maxWidth: "1200px",
    padding: "20px 0",
    margin: "0 auto",
  };

  const flexStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const textStyles = {
    fontWeight: "bold",
  };

  const avatarStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    cursor: "pointer",
  };

  const menuItemStyle = {
    cursor: "pointer",
    padding: "8px 16px",
    textDecoration: "none",
    color: "#333",
    display: "block",
  };

  return (
    <div style={containerStyle}>
      <div style={flexStyle}>
        <h1 style={textStyles} onClick={handleHome}>
          Raindrops X
        </h1>

        {!address ? (
          <ConnectWallet
            btnTitle="Sign In"
            theme="light"
            style={{
              padding: "8px 16px",
              background: "black",
              borderRadius: "4px",
            }}
          />
        ) : (
          <div style={{ position: "relative" }}>
            <img
              style={avatarStyle}
              src={`https://avatars.dicebear.com/api/avataaars/${address}.svg`}
              alt="User Avatar"
              onClick={handleDropdownToggle}
            />
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  zIndex: "1",
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                  <li style={menuItemStyle} onClick={handleProfileClick}>
                    Profile
                  </li>
                  <li style={menuItemStyle} onClick={disconnect}>
                    Sign Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
