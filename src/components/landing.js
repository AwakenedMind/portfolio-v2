import React, { useState, useEffect } from 'react'
import Reacto from '../images/Reacto.svg'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const LandingWrapper = styled.section`
  min-height: 100vh;
  height: 100%;
  background: #182D4B;
  position: relative;
  display: flex;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;

  @media only screen and (max-width: 50em) {
    justify-content: flex-start;
    margin-bottom: calc(1.618rem * 2);
  }

  @media only screen and (max-width: 67.500em) {
    padding: 0;
  }
`

const DescriptionWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  padding-top: 10rem;
  position: relative;
  margin-right: 20vw;

  @media screen and (max-width: 992px) {
    margin-right: 0;
  }

  @media only screen and (max-width: 67.500em) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  @media only screen and (max-width: 50em) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

`

const DescriptionHeader = styled.h1`
  font-size: 5em;
  margin-bottom: 1.618rem;


  @media only screen and (min-width : 160.000em) {
    font-size: 7em;
  }

  @media only screen and (max-width: 67.500em) {
    font-size: 5em;
  }

  @media only screen and (max-width: 50.000em) {
    text-align: center;
    font-size: 3.5em;
  }
`

const DescriptionHello = styled.div`
  font-size: 2em;

  @media only screen and (min-width : 160.000em) {
    font-size: 3em;
  }

  @media only screen 
    and (max-width : 90.000em) {
      font-size: 1.8em;  
  }

  @media only screen and (max-width: 50.000em) {
    text-align: center;
    font-size: 2.5em;
  }
`

const DescriptionTitle = styled.h2`
  font-size: 3.5em;
  opacity: 0.9;
  color: rgba(116, 144, 184, 0.69);
  margin-bottom: calc(1.618rem * 2);

  @media only screen and (min-width: 160em) {
    font-size: 4em;
  }

  @media only screen and (max-width: 67.500em) {
    font-size: 2.5em;
  }

  @media only screen and (max-width: 50.000em) {
    text-align: center;
    font-size: 2em;
  }
`

const DescriptionParagraph = styled.p`
  font-size: 1.6em;
  width: 50%;
  color: #7AC2D6;
  margin-bottom: calc(1.618rem * 3);
  max-width: 500px;
  margin-right: 0;

  @media only screen and (min-width: 160em) {
      font-size: 2em;
      width: 70%
  }

  @media only screen and (max-width : 1440px) {
    font-size: 1.6em;  
  }

  @media only screen and (max-width: 67.500em) {
    font-size: 1.4em;
  }

  @media only screen and (max-width: 50.000em) {
    text-align: center;
    width: 100%;
  }
`

const ReactoImage = styled.img`
  position: absolute;
  right: 20%;
  bottom: 10%;
  transform: scale(0.7);
  z-index: 2;
  
  @media only screen and (min-width : 160.000em) {
    transform: scale(1);
  }

  @media only screen and (max-width : 90.000em) {
    max-width: 600px;
    right: 0%;
    transform: scale(0.8);
  }

  @media only screen and (max-width: 67.500em) {

    transform: scale(0.4);
    right: -10%;
  }

  @media only screen and (max-height: 50em) {
    display: none;
  }

  @media only screen and (max-width: 50em) {
    display: none;
  }

`

const DescriptionCTA = styled.button`
  border: 8px solid #7AC2D6;
  background: #182D4B;
  text-align: center;
  color: white;
  padding: 12px 20px;
  font-size: 1.5em;
  max-width: 200px;
  /* margin-left: 2rem; */

  @media only screen and (min-width: 160em) {
    font-size: 1.8em;
    padding: 14px 24px;
    max-width: 300px;
    margin-left: 4rem;
  }

  @media only screen and (max-width: 50.000em) {
    padding: 18px 28px;
    font-size: 1.3em;
  
  }
`

const StyledLink = styled(AnchorLink)`
  text-decoration: none;
  color: inherit;
`

const DescriptionCTAWrapper = styled.div`
  width: 100%;

  @media only screen and (max-width: 50.000em) {

  margin: 0 auto;
  display: flex;
  justify-content: center;
  
  }
`

const Landing = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = () => (<DescriptionHello style={{ transitionDelay: '100ms' }}>Hello I am</DescriptionHello>)

  const two = () => (
    <DescriptionHeader style={{ transitionDelay: '300ms' }}>Robert Arteaga</DescriptionHeader>
  )

  const three = () => (
    <DescriptionTitle style={{ transitionDelay: '500ms' }}>
      Frontend Developer & Designer
    </DescriptionTitle>
  );

  const four = () => (
    <DescriptionParagraph style={{ transitionDelay: '700ms' }}>
      I use Figma to create wireframes and ReactJS to build exceptional UI’s across multiple devices
  </DescriptionParagraph>
  );

  const five = () => (
    <DescriptionCTAWrapper>
      <DescriptionCTA style={{ transitionDelay: '900ms' }} onClick={() => window.location.href = 'mailto:daspanisharmada@gmail.com'}>
        Get in Touch!
      </DescriptionCTA>
    </DescriptionCTAWrapper>
  );

  const items = [one, two, three, four, five];

  return (
    <LandingWrapper>
      <DescriptionWrapper>
        <TransitionGroup>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                {item}
              </CSSTransition>
            ))}
        </TransitionGroup>
      </DescriptionWrapper>
      {/* <ReactoImage src={Reacto} /> */}
    </LandingWrapper>
  )
}

export default Landing


