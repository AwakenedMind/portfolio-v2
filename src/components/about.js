import React from 'react'
import styled from 'styled-components'
import LargeDot from '../images/large-blue-dot.svg'

const AboutMeWrapper = styled.section`
  height: 100%;
  width: 100%;
  background: #0B1B33;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

    @media only screen and (max-width : 90.000em) {
      justify-content: center;
  }
`

const AboutSection = styled.div`
  /* margin-left: 200px; */
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 600px;
  height: 100%;

  @media only screen and (min-width: 90em) {
      max-width: 800px;
  }
`

const AboutHeader = styled.h3`
  font-size: 3em;
  color: #53C1DE;
  margin: 0;
  padding-right: 3rem;
  text-align: left;

  /* iMac + Large Screens */
    @media only screen and (min-width: 160em) {
      font-size: 4em;
  }

`

const AboutHeaderWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: calc(1.618rem * 2);

  /* iMac + Large Screens */
  @media only screen and (min-width: 160em) {
    width: 400px;
  }

  @media only screen and (max-width : 90.000em) {
    text-align: center;
    width: 100%;
  }
`

const AboutDescription = styled.p`
  max-width: 800px;
  width: 100%;
  margin-bottom: calc(1.618rem * 2);
  font-size: 1.2em;

    /* iMac + Large Screens */
  @media only screen and (min-width: 160em) {
    width: 950px;
    font-size: 1.4em;
  }

  @media only screen and (max-width : 90em) {
    width: 600px; 
    font-size: 1.4em;
}
  @media only screen and (max-width: 50em) {
    width: 100%;
    font-size: 1.5em;
    margin-bottom: calc(1.618rem * 3);
    text-align: center;

  }
`

const AboutTechnologyHeader = styled.h4`
  font-size: 1.8em;
  margin-bottom: calc(1.618rem * 2);
  margin-left :0;

    /* iMac + Large Screens */
    @media only screen and (min-width: 160em) {
      font-size: 2em;  
      }

 @media only screen 
  and (max-width : 90.000em) {

}

@media only screen and (max-width: 50em) {
    font-size: 1.8em;
  }

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

  @media only screen 
    and (max-width : 90.000em) {
      max-width: 600px;
}

@media only screen and (max-width: 50em) {
  justify-content: center;
  }
`

const AboutSkillsItem = styled.li`
  font-size: 1.5em;
  padding-right: 1rem;

    /* iMac + Large Screens */
    @media only screen 
    and (min-width: 160em
) {
      font-size: 1.6em;  
      }
  
  @media only screen and (max-width: 50em) {
    font-size: 1.5em;
    line-height: 1.2;
  }
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

const About = () => {
  return (
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
  )
}

export default About
