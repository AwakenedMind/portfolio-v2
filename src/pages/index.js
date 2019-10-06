import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import Reacto from '../images/Reacto.svg'
import Github from '../images/github.svg'
import Linkedin from '../images/linkedin.svg'
import Twitter from '../images/twitter.svg'


const LandingWrapper = styled.section`
  height: 100vh;
  background: #182D4B;
  padding-left: 200px;
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
`

const DescriptionWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  padding-top: 10rem;
  position: relative;
  margin-right: 20vw;
  
`

const DescriptionHeader = styled.h1`
  font-size: 6em;
  margin-bottom: 1.618rem;
`

const DescriptionHello = styled.div`
  font-size: 2em;
`

const DescriptionTitle = styled.h2`
  font-size: 4em;
  opacity: 0.9;
  color: rgba(116, 144, 184, 0.69);
  margin-bottom: calc(1.618rem * 2);
`

const DescriptionParagraph = styled.p`
  font-size: 1.6em;
  width: 50%;
  color: #7AC2D6;
  margin-bottom: calc(1.618rem * 3);
`

const ReactoImage = styled.img`
  position: absolute;
  right: 0%;
  bottom: 20%;
`

const DescriptionCTA = styled.button`
  border: 8px solid #7AC2D6;
  background: #182D4B;
  text-align: center;
  color: white;
  padding: 12px 20px;
  font-size: 1.5em;
`

const SocialBar = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: calc(1.618rem * 3);
`

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

const SocialLink = styled.li`
  padding-top: 1rem;
`

const GithubImage = styled.img`
  height: 32px;
  width: 32px;
  margin: 0;
  padding: 0;
`

const TwitterImage = styled.img`
  height: 32px;
  width: 32px;
  margin: 0;
  padding: 0;
`

const LinkedinImage = styled.img`
  height: 32px;
  width: 32px;
  margin: 0;
  padding: 0;
`


const AboutMeWrapper = styled.section`
  min-height: 50vh;
  height: 100%;
  background: #182D4B;
`

const AboutHeader = styled.h3`
  font-size: 2.5em;

`

const IndexPage = () => (
  <Layout>

    <SocialBar>
      <SocialLinks>
        <SocialLink>
          <GithubImage src={Github} />
        </SocialLink>
        <SocialLink>
          <TwitterImage src={Twitter} />
        </SocialLink>
        <SocialLink>
          <LinkedinImage src={Linkedin} />
        </SocialLink>
      </SocialLinks>
    </SocialBar>
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
        <ReactoImage src={Reacto} />
        <DescriptionCTA>
          Get in Touch!
        </DescriptionCTA>
      </DescriptionWrapper>
    </LandingWrapper>

    <AboutMeWrapper>
      <AboutHeader>
        About
      </AboutHeader>
    </AboutMeWrapper>
  </Layout >
)

export default IndexPage
