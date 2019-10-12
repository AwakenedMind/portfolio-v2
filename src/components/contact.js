import React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.section`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactFlex = styled.div`
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

    /* iMac + Large Screens */
  @media only screen 
    and (min-width: 160em
) {
      font-size: 2.2em;
      margin-bottom: calc(1.618rem * 2);
  }
`

const ContactSubheader = styled.div`
  font-size: 1.5em;
  text-align: center;

  /* iMac + Large Screens */
  @media only screen 
    and (min-width: 160em
) {
      font-size: 1.8em;
      margin-bottom: calc(1.618rem);
  }

  @media only screen and (max-width: 50em) {
      font-size: 1.5em;
      margin-bottom: calc(1.618rem);
      padding-right: 2rem;
      padding-left: 2rem;
  }
  
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

  /* iMac + Large Screens */
    @media only screen 
    and (min-width: 160em
) {
      padding: 14px 24px;
      font-size: 1.8em;
      max-width: 300px;
  }
`

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactFlex>
        <ContactHeader>
          Available for freelance oppurtunities
      </ContactHeader>
        <ContactSubheader>
          Thank you for stopping by! Feel free to send me a message, and I will try to reply promptly.
      </ContactSubheader>
        <ContactButton>
          Get in touch!
      </ContactButton>
      </ContactFlex>
    </ContactWrapper>
  )
}

export default Contact
