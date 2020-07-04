import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const GetStartedContainer = styled.section`
  display: flex;
  padding: 72px;
  justify-content: center;
  background-color: #172026;
`

const GetStartedBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-width: 1150px;
  width: calc(100% + 40px);
  margin: -20px;
`

const GetStartedTitle = styled.div`
  margin: 0;
  box-sizing: border-box;
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  padding: 20px;
  color: #fff;
  font-family: CoreSansA55;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 31.2px;
  box-sizing: border-box;
`

const GetStartedStep = styled.div`
  flex-grow: 0;
  max-width: 33.33333%;
  flex-basis: 33.33333%;
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
`

const GetStartedStepTitle = styled.div`
  color: rgb(255, 255, 255);
  font-family: CoreSansA45;
  font-size: 21px;
  letter-spacing: 0px;
  line-height: 27.3px;
  margin-bottom: 8px;
`

const GetStartedStepDescription = styled.div`
  color: rgb(255, 255, 255);
  font-family: CoreSansA45;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 22.4px;
  text-align: left;
`

const GetStartedButtonBox = styled(GetStartedStep)`
`

const GetStartedButton = styled(Button)`
  width: 100%;
`

function GetStarted() {
  return (<GetStartedContainer>
    <GetStartedBox>
      <GetStartedTitle>How To Get Started</GetStartedTitle>
      <GetStartedStep>
        <GetStartedStepTitle>Sign Up</GetStartedStepTitle>
        <GetStartedStepDescription>Create an account, upload documents, and complete a quick background check.</GetStartedStepDescription>
      </GetStartedStep>
      <GetStartedStep>
        <GetStartedStepTitle>Download the Courier App</GetStartedStepTitle>
        <GetStartedStepDescription>Set your availability within the Courier App and pick up any available open shifts.</GetStartedStepDescription>
      </GetStartedStep>
      <GetStartedStep>
        <GetStartedStepTitle>Earn Money</GetStartedStepTitle>
        <GetStartedStepDescription>Once you have all the tools you need, you can start making deliveries to earn extra money.</GetStartedStepDescription>
      </GetStartedStep>
      <GetStartedButtonBox>
        <GetStartedButton>Apply now</GetStartedButton>
      </GetStartedButtonBox>
    </GetStartedBox>
  </GetStartedContainer>)
}

export default GetStarted
