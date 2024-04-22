import { useRef } from "react";
import "./services.css";
import { useState } from "react";
// import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  // const ref = useRef();
  const ref = useRef();
  const [showFullContent, setShowFullContent] = useState(false);
  const [showFullContent1, setShowFullContent1] = useState(false);
  const [showFullContent2, setShowFullContent2] = useState(false);
  const [showFullContent3, setShowFullContent3] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  const toggleContent1 = () => {
    setShowFullContent1(!showFullContent1);
  };
  const toggleContent2 = () => {
    setShowFullContent2(!showFullContent1);
  };
  const toggleContent3 = () => {
    setShowFullContent3(!showFullContent1);
  };

  // const isInView = useInView(ref, { margin: "-100px" });

  return (

    <div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
      style={{ marginBottom: "10px" }}
      id="services"
    >
      <div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="https://img.freepik.com/premium-photo/opened-book-with-flying-pages-butterflies-dark-backgroundgenerative-ai_391052-12859.jpg"
            alt=""
            style={{ width: "250px", height: "110px" }}
          />
          <h1 style={{ color: "white", fontWeight: "bold", fontSize: "60px" }}>
            A{" "}<b style={{ color: "#E8DBFD", transition: "color 0.3s" }}>Decentralised</b>{" "}
            Literary{" "}<b style={{ color: "#E8DBFD", transition: "color 0.3s" }}>Ecosystem</b>{" "}
          </h1>
        </div>
        <div className="title">
          {/* <h1 style={{ color: "white", fontWeight: "bold" }}>
            <b style={{ color: "#E8DBFD", transition: "color 0.3s", fontSize: "10px" }}>
            Ecosystem
            </b>{" "}
            <br/>
            
          </h1> */}
          <button
            style={{
              backgroundColor: "#E8DBFD",
              color: "black",
              border: "none",
              // cursor: "pointer",
              transition: "background-color 0.3s",
              padding: "10px",
              borderRadius: "30px 2px",
            }}
          >
            WHAT WE DO?
          </button>
        </div>
      </div>
      <div className="listContainer">
        <div
          className="box"
          style={{ color: "black", borderRadius: "20px", boxShadow: "10px 14px 20px rgba(255, 192, 203, 0.5)" }}
        >
          <h2 style={{ color: "rgba(255, 192, 203, 0.9)", fontWeight: "bold" }}>Raindrops DAO</h2>
          <br />
          <p style={{ color: "white" }}>
            {showFullContent ? (
              <>
              A Decentralized Creative Community RainDrops DAO is dedicated to paving the way for traditional local artists, digital creators, poets, authors, literature writers, and any artists intrigued by the NFT domain. We understand that there's a vast number of artists who haven't yet ventured into the NFT scene. Our goal is to establish a platform where we can interact with these artists in the WEB3 sphere.
              </>
            ) : (
              <>
              A Decentralized Creative Community RainDrops DAO is dedicated to paving the way for traditional local artists, digital creators,<button onClick={toggleContent} style={{ color: "rgba(255, 192, 203, 0.9)", fontWeight: "bold" }}>Read More</button>
              </>
            )}
          </p>
        </div>
        {/* Repeat the pattern for other boxes */}
        {/* </div> */}
        <div
          className="box"
          style={{ color: "black", borderRadius: "20px", boxShadow: "-10px 14px 20px rgba(255, 192, 203, 0.5)" }}
        >
          <h2 style={{ color: "rgba(255, 192, 203, 0.9)", fontWeight: "bold" }}>Raindrops Fest</h2>
          <br />
          <p style={{ color: "white" }}>
            {showFullContent1 ? (
              <>
              The Raindrops LitVerse Festival is a professional gathering dedicated to literature and books in the web3 world. We'll delve into the artistry, thought processes of writers, and the technological marvels surrounding web3 and the future of books. We're aiming to create a platform for engaging with artists in the WEB3 realm.
              </>
            ) : (
              <>
              The Raindrops LitVerse Festival is a professional gathering dedicated to literature and books in the web3 world.<button onClick={toggleContent1} style={{ color: "rgba(255, 192, 203, 0.9)", fontWeight: "bold" }}>Read More</button>
              </>
            )}
          </p>
          {/* <button>Go</button> */}
        </div>
        <div
          className="box"
          style={{ color: "black", borderRadius: "20px", boxShadow: "10px -14px 20px rgba(255, 192, 203, 0.5)" }}
        >
          <h2 style={{ color: "rgba(255, 192, 203, 0.9)", fontWeight: "bold" }}>Instareads</h2>
          <p style={{ color: "white" }}>
            {showFullContent2 ? (
              <>
              Our premier product operates on the concept of "read to earn," rewarding you each time you read a book. This transforms reading from a leisure activity into an opportunity to generate revenue. It enables readers to earn rewards by engaging with books, articles, newsletters, and more.
              </>
            ) : (
              <>
              Our premier product operates on the concept of "read to earn," rewarding you each time you read a book.<button onClick={toggleContent2} style={{ color: "rgba(255, 192, 203, 0.9)", fontWeight: "bold" }}>Read More</button>
              </>
            )}
          </p>
          {/* <button>Go</button> */}
        </div>
        <div
          className="box"
          style={{ color: "black", borderRadius: "20px", boxShadow: "-10px -14px 20px rgba(255, 192, 203, 0.5)" }}
        >
          <h2 style={{ color: "rgba(255, 192, 203, 0.9)", fontWeight: "bold" }}>RAI ( Raindrops AI)</h2>
          <br />
          <p style={{ color: "white" }}>
            {showFullContent3 ? (
              <>
              Raindrops Ai is an innovative, AI-driven solution tailored for the future of Publishing and Analytics. It's crafted to support emerging creators in producing top-notch work. This will enhance user retention by providing real-time data on platform activity. Additionally, it will facilitate future partnership deals and ensure easy navigation for users.
              </>
            ) : (
              <>
              Raindrops Ai is an innovative, AI-driven solution tailored for the future of Publishing and Analytics.<button onClick={toggleContent3} style={{ color: "rgba(255, 192, 203, 0.9)", fontWeight: "bold" }}>Read More</button>
              </>
            )}
          </p>
          <br />
          {/* <button>Go</button> */}
        </div>
      </div>
    </div >
  );
};

export default Services;
