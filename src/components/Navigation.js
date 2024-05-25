import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import { useNavigate, Link } from "react-router-dom";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.text};
    transform: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const GoToAppLink = styled.a`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: black;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Navigation = () => {
  const navigate = useNavigate();
  // const blogsection = navigate("/blogs");
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const goToApp = () => {
    navigate("/hello");
  };
  const StyledLink = styled(Link)`
    color: ${(props) => props.theme.text};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.text};
    }
  `;
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem>
          <MenuItem>
            <StyledLink to="/blogs">Blogs</StyledLink>
          </MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>Faq</MenuItem>
        </Menu>
        <GoToAppLink href="https://app.raindropsx.com/" target="_blank">
          Go to App
        </GoToAppLink>
      </NavBar>
    </Section>
  );
};

export default Navigation;
