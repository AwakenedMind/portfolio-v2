import React from 'react'
import Reacto from '../images/Reacto.svg'
import styled from 'styled-components'



const LandingWrapper = styled.section`
  height: 100vh;
  min-height: 1200px;
  background: #182D4B;
  position: relative;
  display: flex;
  justify-content: center;
`

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1.618rem;
  margin-top: 1.618rem;
`

const NavigationLinks = styled.div`
  font-size: 1.4em;
  padding-right: 1.618rem;

  @media only screen 
    and (min-width: 160em
) {
      font-size: 1.8em;
  }

  @media only screen and (max-width: 50em) {
    font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
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
    padding-top: 5rem;
    padding-left: 2rem;
    padding-right: 1rem;
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
  font-size: 6em;
  margin-bottom: 1.618rem;

  @media screen and (max-width: 992px) {
    font-size: 4em;
}

/* iMac + Large Screens */
@media only screen 
   and (min-width : 160.000em
) {
    font-size: 7em;
}

@media only screen 
  and (max-width : 1440px) {
    font-size: 4.5em;  
}

@media only screen and (max-width: 50.000em) {
  text-align: center;
  font-size: 4.5em;
}
`

const DescriptionHello = styled.div`
  font-size: 2em;

  /* iMac + Large Screens */
@media only screen 
   and (min-width : 160.000em
) {
    font-size: 3em;
}

@media only screen 
  and (max-width : 90.000em) {
    font-size: 2.5em;  
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

  /* iMac + Large Screens */
  @media only screen 
    and (min-width: 160em
) {
      font-size: 4em;
  }

  @media only screen and (max-width: 50.000em) {
  text-align: center;
}
`

const DescriptionParagraph = styled.p`
  font-size: 1.6em;
  width: 50%;
  color: #7AC2D6;
  margin-bottom: calc(1.618rem * 3);

    /* iMac + Large Screens */
  @media only screen 
    and (min-width: 160em
) {
      font-size: 2em;
      width: 70%
  }

  @media only screen 
  and (max-width : 1440px) {
    font-size: 1.6em;  
}

@media only screen and (max-width: 67.500em) {
    font-size: 2em;
}

@media only screen and (max-width: 50.000em) {
  text-align: center;
  width: 100%;
}
`

const ReactoImage = styled.img`
  position: absolute;
  right: 0%;
  bottom: 20%;
  
    /* iMac + Large Screens */
  @media only screen 
    and (min-width : 160.000em
) {
      transform: scale(1.2);
      bottom: 15%;
      right: 0%;
  }

  /* @media only screen 
  and (max-width : 1440px) {
    bottom: 15%;
    right: 0%; 
} */

@media only screen 
    and (max-width : 90.000em) {
      max-width: 600px;
      bottom: 15%;
      right: 0%;
}

@media only screen and (max-width: 67.500em) {
  bottom: 5%;
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
  margin-left: 2rem;

  @media only screen 
    and (min-width: 160em) {
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

const Landing = () => {
  return (
    <LandingWrapper>
      <NavigationWrapper>
        <NavigationLinks>
          About
        </NavigationLinks>
        <NavigationLinks>
          Work
        </NavigationLinks>
        <NavigationLinks>
          Contact
        </NavigationLinks>
      </NavigationWrapper>
      <DescriptionWrapper>
        <DescriptionHello>
          Hello I am
        </DescriptionHello>
        <DescriptionHeader>
          Robert Arteaga
        </DescriptionHeader>
        <DescriptionTitle>
          Frontend Developer & Designer
        </DescriptionTitle>
        <DescriptionParagraph>
          I use Figma to create wireframes and ReactJS to build exceptional UI’s across multiple devices
        </DescriptionParagraph>
        <DescriptionCTA>
          Get in Touch!
        </DescriptionCTA>
        <ReactoImage src={Reacto} />
      </DescriptionWrapper>
    </LandingWrapper>
  )
}

export default Landing


