import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Button from './Button'


const FooterContainer = styled.section`
  display: flex;
  padding: 48px 48px 64px 48px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #172026;
`

const FooterTitle = styled.p`
  font-size: 48px;
  color: #FFFFFF;
  margin: 0;
  text-align: center;
  font-family: CoreSansA55;
  letter-spacing: -1.5px;
`

const FooterButton = styled(Button)`
  margin-top: 24px;
  padding-left: 100px;
  padding-right: 100px;
  height: 50px;
`

function Footer(): ReactElement {
  return (<FooterContainer>
    <FooterTitle>Deliver with Skip</FooterTitle>
    <FooterButton>Apply Now</FooterButton>
  </FooterContainer>)
}

export default Footer
