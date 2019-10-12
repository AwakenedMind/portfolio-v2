import React from 'react'
import styled from 'styled-components'

import Bookmark from '../images/bookmarkpic.png'
import Crownstudio from '../images/crownstudio-pic.png'
import Yosemite from '../images/yosemite-park.png'
import DestroyGames from '../images/destroygames.png'

import Goto from '../images/ion-open-outline.svg'

const WorkHeader = styled.h3`
  font-size: 3em;
  color: #53C1DE;
  margin: 0;
  padding-right: 3rem;
  text-align: center;
  margin-bottom: calc(1.618rem * 2);

  /* iMac + Large Screens */
  @media only screen 
    and (min-width: 160em
) {
      font-size: 4em;  
  }
`

const WorkSection = styled.section`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: #0B1B33;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  /* iMac + Large Screens */
  @media only screen and (min-width: 160em) {
      max-width: 1200px;
  }

  @media only screen and (max-width : 90.000em) {
    /* max-width: 900px; */
    width: 100%;
    padding: 0;
}
@media only screen and (max-width: 67.500em) {
  /* max-width: 700px; */
  width: 100% !important;
  /* max-width: 600px; */
}

@media only screen and (max-width: 50em) {
  padding-right: 1rem;
  padding-left: 1rem;
}
  
`

const ProjectCard = styled.div`
  width: 100%;
  height: 450px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media only screen and (max-width: 50em) {
    grid-template-columns:  1fr;
  grid-template-rows: auto;}

  @media only screen and (max-width : 90.000em) {
    height: fit-content !important;
    /* height: 100%; */
}
`

const ProjectImg = styled.img`
  width: 100%;
  object-fit: contain;

  @media only screen and (max-width : 90.000em) {
    /* height: fit-content; */
    /* height: 100%; */
}
`

const ProjectDescriptionWrapper = styled.div`
  position: relative;
  height: 100%;
  @media only screen and (max-width: 50em) {
  padding-right: 1rem;
  padding-left: 1rem;
  margin-bottom: 2rem;
}

@media only screen and (max-width : 90.000em) {
    width: 100%;
    padding-top: 2rem;
}

@media only screen and (max-width : 90.000em) {

height: 100%;
}
`

const ProjectDescriptionHeader = styled.h4`
  text-align: right;
  text-align: ${props => props.left ? "left" : "right"};
  font-size: 1.5em;
  color: #53C1DE;

  /* iMac + Large Screens */
  @media only screen 
    and (min-width: 160em) {
      font-size: 1.8em;
  }

  @media only screen and (max-width : 90.000em) {
    width: 100%;
    padding-bottom: 2rem;
}

@media only screen and (max-width: 50em) {
    text-align: left;
  }
`

const ProjectDescriptionParagraph = styled.p`
  background: #182D4B;
  padding: 1rem;
  /* margin-right: 1rem; */
  font-size: 1.2em;
  /* iMac + Large Screens */
  @media only screen and (min-width: 160em) {
    font-size: 1.2em;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.4em;
  }
`

const ProjectDescriptionList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;

  @media only screen and (max-width : 90.000em) {
    width: 100%;
    padding-bottom: 2rem;
    }
`

const ProjectDescriptionListItem = styled.li`
  /* iMac + Large Screens */
  @media only screen 
    and (min-width: 160em
) {
      font-size: 1.2em;
  }

  @media only screen and (max-width : 90.000em) {
    height: fit-content;
    width: fit-content;
}

@media only screen and (max-width: 50em) {
    font-size: 1.4em;
}
`

const ProjectDescriptionIconList = styled.ul`
  display: flex;
  justify-content: ${props => props.left ? "flex-start" : "flex-end"};
  align-items: center;
  list-style-type: none;

  @media only screen and (max-width: 50em) {
    justify-content: flex-end !important;
  }
`

const ProjectDescriptionIconItem = styled.li`
  @media only screen and (max-width: 50em) {
    padding-right: 2rem;
  }

`

const GotoImage = styled.img`
  height: 32px;
  width: 32px;
  margin: 0;
  padding: 0;
`

const Work = () => {
  const projectBreak = 800

  const [width, setWidth] = React.useState(null)

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <WorkSection id="work">
      <ProjectWrapper>
        <WorkHeader>Work</WorkHeader>
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
          {width < projectBreak ? (
            <>
              <ProjectImg src={Crownstudio} />
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
            </>
          ) : (
              <>
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
              </>
            )}
        </ProjectCard>



        < ProjectCard >
          <ProjectImg src={Bookmark} />
          <ProjectDescriptionWrapper>
            <ProjectDescriptionHeader>Bookmark App</ProjectDescriptionHeader>
            <ProjectDescriptionParagraph>
              Bookmark Landing Page based off a FrontendMentor.io challenge. Worked with another developer to develop a responsive site based off images we were given for the challenge.
          </ProjectDescriptionParagraph>
            <ProjectDescriptionList>
              <ProjectDescriptionListItem>Javascript</ProjectDescriptionListItem>
              <ProjectDescriptionListItem>Sass</ProjectDescriptionListItem>

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
  )
}

export default Work
