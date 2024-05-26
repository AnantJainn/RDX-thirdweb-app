import React from "react";
import { useParams } from "react-router-dom";
import { IMAGES } from "../Images";

const blogData = [
  {
    id: 1,
    image: IMAGES.BlogPic1,
    title: "How to convince recruiters and get your dream",
    date: "14 Feb 2022",
    author: "Kk Sharma",
    content: [
      "During a recent period, crypto markets have been experiencing a stagnation phase, with digital assets consolidating for several weeks. This has led investors to question whether the bull market will resume. Despite multiple attempts at a sustained rally in recent weeks, prices have been sold off, exemplified by Bitcoin's drop of nearly 5% from $63,000 to just above $60,000. This decline occurred amid concerns about inflation and hawkish remarks from Federal Reserve policymakers.",
      "The current situation mirrors the market action observed between April and September of 2023 when Bitcoin remained range-bound between $25,000 and $30,000 for six months. Charles Edwards, the founder of Capriole Investment, described this phase as the 'bore you to death' period, suggesting that it could persist for one to six months with low volatility until market sentiment becomes overwhelmingly negative, signaling a potential turnaround.",
      "Analytics firm Santiment noted a lack of faith among traders in Bitcoin's recent retracement, indicating a possible bottoming out of prices. Bitfinex analysts suggested that the market uncertainty might continue into early summer, with expectations of the Federal Reserve's quantitative tightening potentially affecting cryptocurrency prices positively.",
      "Despite recent weakness in the U.S. dollar, its subsequent rebound coinciding with Bitcoin's recovery from near $56,000 could signal a turning point in the trend. A weaker dollar might support the next phase of the crypto rally, leading to a bullish outlook for Bitcoin in the third and fourth quarters of the year.",
    ],
  },
  {
    id: 2,
    image: IMAGES.BlogPic2,
    title: "5 things to know about the March 2022",
    date: "23 June 2022",
    author: "Kk Sharma",
    content: "Full content of the blog post 2...",
  },
  {
    id: 3,
    image: IMAGES.BlogPic3,
    title: "Job Board is the most important sector",
    date: "30 Dec 2022",
    author: "Kk Sharma",
    content: "Full content of the blog post 3...",
  },
  {
    id: 4,
    image: IMAGES.BlogPic4,
    title: "These Bizarre Truths Behind Job.",
    date: "10 Jan 2023",
    author: "Kk Sharma",
    content: "Full content of the blog post 4...",
  },
  {
    id: 5,
    image: IMAGES.BlogPic5,
    title: "Jobs You Should Answer Truthfully.",
    date: "15 Feb 2023",
    author: "Kk Sharma",
    content: "Full content of the blog post 5...",
  },
  {
    id: 6,
    image: IMAGES.BlogPic6,
    title: "5 Reasons Why You Should Invest In Jobs.",
    date: "24 March 2023",
    author: "Kk Sharma",
    content: "Full content of the blog post 6...",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div style={{ padding: "60px 0" }}>
      <div
        className="container"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          {blog.title}
        </h1>
        <div
          style={{ textAlign: "center", marginBottom: "20px", color: "#777" }}
        >
          <p style={{ margin: 0 }}>
            <span style={{ fontWeight: "bold" }}>By {blog.author}</span> |{" "}
            {blog.date}
          </p>
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
        <div style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
