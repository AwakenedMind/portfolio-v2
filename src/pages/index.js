import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

import Reacto from '../images/Reacto.svg'
import Github from '../images/github.svg'
import Linkedin from '../images/linkedin.svg'
import Twitter from '../images/twitter.svg'
import LargeDot from '../images/large-blue-dot.svg'
import HorizontalLine from '../images/horizontal-line.svg'
import Goto from '../images/ion-open-outline.svg'
import Behance from '../images/behance.svg'

import Bookmark from '../images/bookmarkpic.png'
import Crownstudio from '../images/crownstudio-pic.png'
import Yosemite from '../images/yosemite-park.png'
import DestroyGames from '../images/destroygames.png'

const LandingWrapper = styled.section`
  height: 100vh;
  min-height: 1200px;
  background: #182D4B;
  /* padding-left: 200px; */
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
  max-width: 200px;
`

const SocialBar = styled.section`
  position: fixed;
  bottom: 0px;
  left: 40px;
  height: fit-content;
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

const BehanceImage = styled.img`
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
  height: 100%;
  width: 100%;
  background: #0B1B33;
  padding-left: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  min-height: 100vh;
`

const AboutSection = styled.div`
  /* margin-left: 20vw; */
  margin-left: 200px;
`

const AboutHeader = styled.h3`
  font-size: 3em;
  color: #53C1DE;
  margin: 0;
  padding-right: 3rem;

`

const AboutHeaderWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: calc(1.618rem * 2);
`

const AboutDescription = styled.p`
  max-width: 800px;
  width: 100%;
  margin-bottom: calc(1.618rem * 2);
  font-size: 1.2em;
`

const AboutTechnologyHeader = styled.h4`
  font-size: 1.8em;
  margin-bottom: calc(1.618rem * 2);

`

const AboutSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 800px;
  width: 100%;
  height: 100%;
  list-style-type: none;
  margin: 0;
`

const AboutSkillsItem = styled.li`
  font-size: 1.6em;
  padding-right: 1rem;
`

const LargeBlueDot = styled.img`
  margin: 0;
  padding: 0;
  height: 24px;
  width: 24px;
  margin-right: 0.5rem;
`

const SmallBlueDot = styled.img`
  margin: 0;
  padding: 0;
  height: 12px;
  width: 12px;
  margin-right: 0.5rem;
`

const WorkSection = styled.section`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: #0B1B33;
  padding-left: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const WorkHeaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  /* background: #182D4B; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: calc(1.618rem * 4);
`

const WorkHeader = styled.h3`
  font-size: 3em;
  color: #53C1DE;
  margin: 0;
  padding-right: 3rem;
  text-align: center;
`

const WorkHorizontalLine = styled.img`
  width: 100%;
  height: 3px;
  margin: 0;
`

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`

const ProjectCard = styled.div`
  width: 100%;
  height: 450px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`

const ProjectImg = styled.img`
  width: 100%;
  object-fit: contain;
`

const ProjectDescriptionWrapper = styled.div`
  position: relative;
`

const ProjectDescriptionHeader = styled.h4`
  text-align: right;
  text-align: ${props => props.left ? "left" : "right"};
  font-size: 1.5em;
  color: #53C1DE;
`

const ProjectDescriptionParagraph = styled.p`
  background: #182D4B;
  padding: 1rem;
  /* margin-right: 1rem; */

`

const ProjectDescriptionList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
`

const ProjectDescriptionListItem = styled.li`

`

const ProjectDescriptionIconList = styled.ul`
  display: flex;
  justify-content: ${props => props.left ? "flex-start" : "flex-end"};
  align-items: center;
  list-style-type: none;
`

const ProjectDescriptionIconItem = styled.li`

`

const GotoImage = styled.img`
  height: 32px;
  width: 32px;
  margin: 0;
  padding: 0;
`

const ContactWrapper = styled.section`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Contact = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-items: center;
align-items: center;
max-width: 800px;
`

const ContactHeader = styled.h4`
  font-size: 2em;
  text-align: center;
`

const ContactSubheader = styled.div`
  font-size: 1.5em;
  text-align: center;
`

const ContactButton = styled.button`
margin-top: calc(1.618rem * 2);
  border: 8px solid #7AC2D6;
  background: #182D4B;
  text-align: center;
  color: white;
  padding: 12px 20px;
  font-size: 1.5em;
  max-width: 200px;
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
        <SocialLink>
          <BehanceImage src={Linkedin} />
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
      <AboutSection>
        <AboutHeaderWrapper>
          <AboutHeader>
            About
        </AboutHeader>
          <LargeBlueDot src={LargeDot} />
          <LargeBlueDot src={LargeDot} />
          <LargeBlueDot src={LargeDot} />

        </AboutHeaderWrapper>
        <AboutDescription>
          My name is Robert and I am a frontend developer & designer based in Southern California. I went to school at San Jose State University, CA in 2016 and in 2017 my friend and I started our first startup. Ever since then, I’ve been fascinated with startup culture and the thrill of gaining new users to a site.
          I love keeping up and take inspiration with the latest web design trends on websites like Behance and Dribble.

      </AboutDescription>
        <AboutTechnologyHeader>
          Technologies I have worked with:
      </AboutTechnologyHeader>
        <AboutSkills>
          <AboutSkillsItem>
            <SmallBlueDot src={LargeDot} />
            ReactJS
        </AboutSkillsItem>
          <AboutSkillsItem>
            <SmallBlueDot src={LargeDot} />

            GatsbyJS
        </AboutSkillsItem>
          <AboutSkillsItem>
            <SmallBlueDot src={LargeDot} />

            NodeJS
        </AboutSkillsItem>
          <AboutSkillsItem>
            <SmallBlueDot src={LargeDot} />

            GraphQL
        </AboutSkillsItem>
          <AboutSkillsItem>
            <SmallBlueDot src={LargeDot} />

            Jest
        </AboutSkillsItem>
          <AboutSkillsItem>
            <SmallBlueDot src={LargeDot} />

            CircleCI
        </AboutSkillsItem>
          <AboutSkillsItem>
            <SmallBlueDot src={LargeDot} />

            Firebase
        </AboutSkillsItem>
          <AboutSkillsItem>
            <SmallBlueDot src={LargeDot} />

            Netlify
        </AboutSkillsItem>
        </AboutSkills>

      </AboutSection>
    </AboutMeWrapper>
    <WorkSection>
      <WorkHeaderWrapper>
        <WorkHeader>Work</WorkHeader>
        {/* <WorkHorizontalLine src={HorizontalLine} /> */}
      </WorkHeaderWrapper>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectImg src={DestroyGames} />

          <ProjectDescriptionWrapper>
            <ProjectDescriptionHeader>DestroyGames</ProjectDescriptionHeader>
            <ProjectDescriptionParagraph>
              DestroyGames is a gaming platform for playing .io games (popular multiplayer browser games). Players can easily visit the site and find their next favorite game.
            </ProjectDescriptionParagraph>
            <ProjectDescriptionList>
              <ProjectDescriptionListItem>GatsbyJS</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>ReactJS</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>Firebase</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>ContentfulCMS</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>Netlify Auth / Function</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>FaunaDB</ProjectDescriptionListItem>
            </ProjectDescriptionList>
            <ProjectDescriptionIconList>
              <ProjectDescriptionIconItem>
                <GotoImage src={Goto} />
              </ProjectDescriptionIconItem>
            </ProjectDescriptionIconList>
          </ProjectDescriptionWrapper>

        </ProjectCard>
        {/* Project 2 Crown Studio */}
        <ProjectCard>
          <ProjectDescriptionWrapper>
            <ProjectDescriptionHeader left>CrownStudio</ProjectDescriptionHeader>
            <ProjectDescriptionParagraph>
              CrownStudio is a digital agency mockup wireframed in Figma based in Brisbane, Au. The landing page is built with industry standard web design & UI/UX trends.
            </ProjectDescriptionParagraph>
            <ProjectDescriptionList left>
              <ProjectDescriptionListItem>ReactJS</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>Javascript</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>Sass</ProjectDescriptionListItem>
            </ProjectDescriptionList>
            <ProjectDescriptionIconList left>
              <ProjectDescriptionIconItem>
                <GotoImage src={Goto} />
              </ProjectDescriptionIconItem>
            </ProjectDescriptionIconList>
          </ProjectDescriptionWrapper>
          <ProjectImg src={Crownstudio} />

        </ProjectCard>

        <ProjectCard>
          <ProjectImg src={DestroyGames} />

          <ProjectDescriptionWrapper>
            <ProjectDescriptionHeader>DestroyGames</ProjectDescriptionHeader>
            <ProjectDescriptionParagraph>
              DestroyGames is a gaming platform for playing .io games (popular multiplayer browser games). Players can easily visit the site and find their next favorite game.
            </ProjectDescriptionParagraph>
            <ProjectDescriptionList>
              <ProjectDescriptionListItem>GatsbyJS</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>ReactJS</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>Firebase</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>ContentfulCMS</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>Netlify Auth / Function</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>FaunaDB</ProjectDescriptionListItem>
            </ProjectDescriptionList>
            <ProjectDescriptionIconList>
              <ProjectDescriptionIconItem>
                <GotoImage src={Goto} />
              </ProjectDescriptionIconItem>
            </ProjectDescriptionIconList>
          </ProjectDescriptionWrapper>

        </ProjectCard>
      </ProjectWrapper>
    </WorkSection>
    <ContactWrapper>
      <Contact>
        <ContactHeader>
          Available for freelance oppurtunities
        </ContactHeader>
        <ContactSubheader>
          Thank you for stopping by! Feel free to send me a message, and I will try to reply promptly.
        </ContactSubheader>
        <ContactButton>
          Get in touch!
        </ContactButton>
      </Contact>
    </ContactWrapper>
  </Layout >
)

export default IndexPage
