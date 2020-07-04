import React from 'react'
import styled from 'styled-components'
import CourierForm from './CourierForm'

const CoverContainer = styled.div`
  display: relative;
`
const CoverBackground = styled.div`
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 680px;

  background-image: url(assets/background_lg.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0);  
  z-index: -1;
`

const CoverSubContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

const CoverControlGroup = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0px 60px 0px 60px;
`

const Quote = styled.div`
  color: #fff;
  flex-grow: 1;
  display: flex;
  margin-top: 160px;
`

function Cover () {
  return (<CoverContainer>
    <CoverBackground />
    <CoverSubContainer>
      <CoverControlGroup>
        <Quote>In just a few easy steps, you’ll be cruising towards making extra money. It’s a flexible opportunity that you can customize to fit your lifestyle.</Quote>
        <CourierForm></CourierForm>
      </CoverControlGroup>
    </CoverSubContainer>
  </CoverContainer>)
}

export default Cover
