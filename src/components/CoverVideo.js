import React from "react";
import styled from "styled-components";
import GIF from "../assets/header-image.gif";

const VideoContainer = styled.div`
  width: 100%;

  img {
    left: 200px;
    right: 500px;
    marginleft: 200px;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <img
        src={GIF}
        type="video/mp4"
        autoPlay
        muted
        loop
        width={500}
        height={500}
      />
    </VideoContainer>
  );
};

export default CoverVideo;
