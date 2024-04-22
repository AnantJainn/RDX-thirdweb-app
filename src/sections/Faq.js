import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers:true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>

      <Container>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="Where can I view my Nfts?"
          >
            After you get the item, either by buying or making it, you can view
            it right away from your dashboard.
          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="How can I login?">
            You have the option to sign in using your social media accounts,
            email address, or your web3 wallet.
          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="What is Instareads?">
            Instareads operates on a 'read-to-earn' model. This system provides
            undeniable evidence of complete consumption, transforming reading
            from a leisure activity into a possible source of income. It enables
            readers to acquire rewards for their engagement with various forms
            of literature such as books, articles, newsletters, and so forth.{" "}
          </Accordion>
        </Box>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="What is RaindropsX Club?"
          >
            RaindropsX Club is a professional platform developed by artists, for
            artists. It's a community of innovative individuals who aren't
            afraid to dream big and are dedicated to constructing a new world.{" "}
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="When can I expect my royalties?"
          >
            Immediately, as Raindrops operates on a blockchain platform, all
            transactions are transparent, secure, and instantaneous.{" "}
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="What is the process to add my existing books?"
          >
            Adding your books is straightforward. Simply click on the 'add'
            function and your book will be added.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
