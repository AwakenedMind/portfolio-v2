import React from 'react'
import styled from 'styled-components'

import Github from '../images/github.svg'
import Linkedin from '../images/linkedin.svg'
import Twitter from '../images/twitter.svg'
import LargeDot from '../images/large-blue-dot.svg'
import Behance from '../images/behance.svg'

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

  @media only screen and (max-width: 67.5em) {
    display: none;
}
`

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
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

const Social = () => {
  return (
    <SocialBar>
      <SocialLinks>
        <SocialLink>
          <a href="https://github.com/AwakenedMind" target="_blank">
            <GithubImage src={Github} />
          </a>
        </SocialLink>
        <SocialLink>
          <a href="https://twitter.com/RobArteaga4" target="_blank">
            <TwitterImage src={Twitter} />
          </a>
        </SocialLink>
        <SocialLink>
          <a href="https://www.linkedin.com/in/robert-arteaga-a3ab89127/" target="_blank">
            <LinkedinImage src={Linkedin} />
          </a>
        </SocialLink>
        <SocialLink>
          <a href="https://www.behance.net/roba1" target="_blank">
            <BehanceImage src={Behance} />
          </a>
        </SocialLink>
      </SocialLinks>
    </SocialBar>
  )
}

export default Social
