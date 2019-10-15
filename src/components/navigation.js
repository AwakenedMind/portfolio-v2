import React from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
  margin-left: 1.618rem;
  z-index: 2;
  
  @media only screen and (max-width: 50em) {
    margin-right: 0;
    margin-left: 0;
    justify-content: space-evenly;

  }
`

const NavigationLinks = styled.li`
  font-size: 1.4em;
  padding-right: 1.618rem;
  list-style-type: none;

  @media only screen and (min-width: 160em) {
    font-size: 1.8em;
  }

  @media only screen and (max-width: 50em) {
    /* font-size: 2em; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0;
  }
`

const StyledLink = styled(AnchorLink)`
  text-decoration: none;
  color: inherit;
`

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationLinks>
        <StyledLink href="#about">
          About
        </StyledLink>
      </NavigationLinks>
      <NavigationLinks>
        <StyledLink href="#work">
          Work
          </StyledLink>
      </NavigationLinks>
      <NavigationLinks>
        <StyledLink href="#contact">
          Contact
        </StyledLink>
      </NavigationLinks>
    </NavigationWrapper>
  )
}

export default Navigation
