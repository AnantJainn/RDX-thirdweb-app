// import React from "react";
// import { Link } from "react-router-dom";

// import { IMAGES } from "../Images";
// const PageTitle = (props) => {
//   return (
//     <div
//       className="dz-bnr-inr dz-bnr-inr-sm text-center overlay-primary-dark"
//       style={{ backgroundImage: "url(" + IMAGES.Banner + ")" }}
//     >
//       <div className="container">
//         <div className="dz-bnr-inr-entry">
//           <h1>{props.activePage}</h1>
//           <nav className="breadcrumb-row m-t15">
//             <ul className="breadcrumb">
//               <li className="breadcrumb-item">
//                 <Link to={"/"}>{props.mainPage}</Link>
//               </li>
//               <li className="breadcrumb-item active">{props.activePage}</li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };
// const gridCard = [
//   {
//     image: IMAGES.BlogPic1,
//     title: "How to convince recruiters and get your dream",
//     date: "14 Feb 2022",
//   },
//   {
//     image: IMAGES.BlogPic2,
//     title: "5 things to know about the March 2022",
//     date: "23 June 2022",
//   },
//   {
//     image: IMAGES.BlogPic3,
//     title: "Job Board is the most important sector",
//     date: "30 Dec 2022",
//   },
//   {
//     image: IMAGES.BlogPic4,
//     title: "These Bizarre Truths Behind Job.",
//     date: "10 Jan 2023",
//   },
//   {
//     image: IMAGES.BlogPic5,
//     title: "Jobs You Should Answer Truthfully.",
//     date: "15 Feb 2023",
//   },
//   {
//     image: IMAGES.BlogPic6,
//     title: "5 Reasons Why You Should Invest In Jobs.",
//     date: "24 March 2023",
//   },
// ];

// const Blogs = () => {
//   return (
//     <div className="page-content">
//       <PageTitle activePage="Blog grid" mainPage="Blog" />
//       <section className="content-inner position-relative">
//         <div className="container">
//           <div className="row">
//             {gridCard.map((data, index) => (
//               <div className="col-xl-4 col-md-6  m-b30" key={index}>
//                 <div className="dz-card style-1 overlay-shine">
//                   <div className="dz-media">
//                     <Link to={"/blog-details"}>
//                       <img src={data.image} alt="" />
//                     </Link>
//                     <span className="date">
//                       <Link to={"#"}>{data.date}</Link>
//                     </span>
//                   </div>
//                   <div className="dz-info">
//                     <div className="dz-meta">
//                       <ul>
//                         <li className="post-author text-primary">
//                           <span>
//                             <i className="fa-solid fa-user" />
//                           </span>{" "}
//                           By Kk Sharma
//                         </li>
//                         <li className="post-date text-primary">
//                           <span>
//                             <i className="fa-solid fa-message" />
//                           </span>{" "}
//                           24 Comments
//                         </li>
//                       </ul>
//                     </div>
//                     <h4 className="dz-title">
//                       <Link to={"/blog-details"}>{data.title}</Link>
//                     </h4>
//                     <p>
//                       A wonderful serenity has taken of my entire soul, like
//                       these.
//                     </p>
//                     <Link to={"/blog-details"} className="btn btn-primary">
//                       Read More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="row">
//             <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
//               <nav aria-label="Blog Pagination">
//                 <ul
//                   className="pagination style-1 text-center  wow fadeInUp"
//                   data-wow-delay="0.8s"
//                 >
//                   <li className="page-item">
//                     <Link to={"#"} className="page-link prev">
//                       <i className="fas fa-chevron-left"></i>
//                     </Link>
//                   </li>
//                   <li className="page-item">
//                     <Link to={"#"} className="page-link active">
//                       1
//                     </Link>
//                   </li>
//                   <li className="page-item">
//                     <Link to={"#"} className="page-link">
//                       2
//                     </Link>
//                   </li>
//                   <li className="page-item">
//                     <Link to={"#"} className="page-link">
//                       3
//                     </Link>
//                   </li>
//                   <li className="page-item">
//                     <Link to={"#"} className="page-link next">
//                       <i className="fas fa-chevron-right"></i>
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blogs;
import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../Images";

const PageTitle = (props) => {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <div
        style={{
          backgroundImage: `url(${IMAGES.Banner})`,
          textAlign: "center",
          position: "relative",
          padding: "100px 0",
          color: "#fff",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Blue color with opacity
            zIndex: 0,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1>{props.activePage}</h1>
          <nav style={{ marginTop: "15px" }}>
            <ul
              style={{ listStyle: "none", padding: 0, display: "inline-block" }}
            >
              <li style={{ display: "inline", marginRight: "5px" }}>
                <Link to={"/"} style={{ color: "#fff" }}>
                  {props.mainPage}
                </Link>
              </li>
              <li style={{ display: "inline", marginRight: "5px" }}>
                <span style={{ color: "#fff" }}>&gt;</span>
              </li>
              <li style={{ display: "inline" }}>
                <span style={{ color: "#fff" }}>{props.activePage}</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

const gridCard = [
  {
    image: IMAGES.BlogPic1,
    title: "How to convince recruiters and get your dream",
    date: "14 Feb 2022",
  },
  {
    image: IMAGES.BlogPic2,
    title: "5 things to know about the March 2022",
    date: "23 June 2022",
  },
  {
    image: IMAGES.BlogPic3,
    title: "Job Board is the most important sector",
    date: "30 Dec 2022",
  },
  {
    image: IMAGES.BlogPic4,
    title: "These Bizarre Truths Behind Job.",
    date: "10 Jan 2023",
  },
  {
    image: IMAGES.BlogPic5,
    title: "Jobs You Should Answer Truthfully.",
    date: "15 Feb 2023",
  },
  {
    image: IMAGES.BlogPic6,
    title: "5 Reasons Why You Should Invest In Jobs.",
    date: "24 March 2023",
  },
];

const Blogs = () => {
  return (
    <div style={{ padding: "60px 0" }}>
      <PageTitle activePage="Blog" mainPage="Blog" />
      <section style={{ position: "relative" }}>
        <div className="container">
          <div
            className="row"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              margin: "20px",
            }}
          >
            {gridCard.map((data, index) => (
              <div key={index} style={{ marginBottom: "30px" }}>
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <Link to={"/blog-details"}>
                      <img
                        src={data.image}
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </Link>
                    <span
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "#fff",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        color: "#333",
                      }}
                    >
                      <Link to={"#"} style={{ color: "#333" }}>
                        {data.date}
                      </Link>
                    </span>
                  </div>
                  <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                    <div style={{ marginBottom: "10px", color: "#555" }}>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          justifyContent: "space-between",
                          color: "#007bff",
                        }}
                      >
                        <li>
                          <span>
                            <i className="fa-solid fa-user" />
                          </span>{" "}
                          By Kk Sharma
                        </li>
                        <li>
                          <span>
                            <i className="fa-solid fa-message" />
                          </span>{" "}
                          24 Comments
                        </li>
                      </ul>
                    </div>
                    <h4 style={{ margin: "0 0 10px", fontSize: "18px" }}>
                      <Link to={"/blog-details"} style={{ color: "#333" }}>
                        {data.title}
                      </Link>
                    </h4>
                    <p style={{ color: "#777" }}>
                      A wonderful serenity has taken of my entire soul, like
                      these.
                    </p>
                    <Link to={"/blog-details"} style={{ color: "#007bff" }}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div
              className="col-xl-12 col-lg-12"
              style={{
                marginBottom: "30px",
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              <nav aria-label="Blog Pagination">
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "inline-flex",
                  }}
                >
                  <li style={{ marginRight: "5px" }}>
                    <Link
                      to={"#"}
                      style={{ padding: "10px", color: "#007bff" }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </Link>
                  </li>
                  <li style={{ marginRight: "5px" }}>
                    <Link
                      to={"#"}
                      style={{
                        padding: "10px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        borderRadius: "5px",
                      }}
                    >
                      1
                    </Link>
                  </li>
                  <li style={{ marginRight: "5px" }}>
                    <Link
                      to={"#"}
                      style={{ padding: "10px", color: "#007bff" }}
                    >
                      2
                    </Link>
                  </li>
                  <li style={{ marginRight: "5px" }}>
                    <Link
                      to={"#"}
                      style={{ padding: "10px", color: "#007bff" }}
                    >
                      3
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"#"}
                      style={{ padding: "10px", color: "#007bff" }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
