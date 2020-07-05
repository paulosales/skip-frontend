import React, { ReactElement } from 'react'
import styled from 'styled-components'
import device from '../responsive/devices'

const QuestionsContainer = styled.section`
  padding: 64px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
`

const QuestionsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 960px;
  width: calc(100% + 40px);
  margin: -20px;
  box-sizing: border-box
`

const QuestionsTitle = styled.div`
  color: rgb(51, 51, 51);
  font-family: CoreSansA65;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 31.2px;
  width: 100%;
  padding: 20px;
`

const QuestionsList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const QuestionsListBlock = styled.div`
  padding: 20px;
  flex-grow: 0;
  margin: 0;
  box-sizing: border-box;

  @media ${device.laptop} {
    max-width: 50%;
    flex-basis: 50%;
  }
`

const Question = styled.div<{expanded?: boolean}>`
  height: ${props => props.expanded?'auto':'70px'};
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  border-bottom: solid 1px #B0B6C9;
`

const QuestionHeader = styled.div`
  display: flex;
  flex-basis: auto;
  flex-shrink: 0;
  align-items: center;
  flex-direction: row;
`

const QuestionTitle = styled.div`
  color: rgb(23, 32, 38);
  font-family: CoreSansA65;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 22.4px;
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: left;
  flex-basis: 0%;
  flex-grow: 1;
  flex-shrink: 1
`

const QuestionButton = styled.span`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  direction: ltr;
  width: 1em;
  height: 1em;
  overflow: hidden;
  font-size: 24px;
  user-select: none;
  flex-shrink: 0;
  color: rgb(0, 108, 187);
`

const QuestionBody = styled.div`
  color: rgb(51, 51, 51);
  font-family: CoreSansA45;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 22.4px;
  padding-bottom: 24px;
  text-align: left;
  display: inline;
  margin: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  border-width: 0px;
`

const questions1 = [
  {
    id: 1,
    title: "How do I make money?",
    detail: "As a courier, you make money on the Skip network through delivery fees and customer tips."
  },
  {
    id: 2,
    title: "How much will I make?",
    detail: "As a courier, the amount of money you make on the Skip network depends on a few key factors, including how many deliveries you make and how far you drive for each order."
  },
  {
    id: 3,
    title: "How many orders can I expect to deliver?",
    detail: "The number of deliveries you’ll make depends on order volume. Skip operates a unique, closed network which means that we’re always working to make sure there’s a healthy match of food couriers to orders so couriers are still able to maximize the amount of deliveries they can make."
  },
  {
    id: 4,
    title: "When do I get paid?",
    detail: "For cash orders, you will collect the money from the customer once you complete the delivery. All earnings from online orders will be paid to your account on a weekly basis."
  }
]

const questions2 = [
  {
    id: 5,
    title: "What do I need to be a courier?",
    detail: "To operate as a courier on the Skip network, you’ll need a reliable vehicle, a valid driver’s license, vehicle insurance, vehicle registration, and a background check. You’ll also need to have a smartphone, a data plan, a phone charger and thermal bags. In Canada, you’ll also need to provide documentation that you’re legally able to work, such as a Canadian passport or work permit."
  },
  {
    id: 6,
    title: "When can I get started?",
    detail: "You can start making deliveries on the network once you complete the signup process and have all of the required tools."
  },
  {
    id: 7,
    title: "What does it mean to be independently contracted?",
    detail: "All couriers on the SkipTheDishes network are independently contracted. This means that you are in charge of choosing when you drive, how much you want to earn, and having the right tools."
  },
  {
    id: 8,
    title: "Can I deliver on the SkipTheDishes network using my bicycle?",
    detail: "Currently, the bicycle program is only available in select markets. To see if your region offers the bicycle program, visit the Courier Portal. If the bicycle icon is in colour, the bicycle program is available! If the bicycle icon is in grey, the program isn’t in your region quite yet, but stay tuned!"
  },
  {
    id: 9,
    title: "Can I deliver on the SkipTheDishes network as an on-foot courier?",
    detail: "Stay tuned for further updates for on-foot couriers!"
  },
  {
    id: 10,
    title: "What are some of the advantages of being an independent contractor?",
    detail: "All couriers on the SkipTheDishes network are independently contracted. You provide your own tools, set your own availability, and decide when to take a short or extended break from driving."
  },
]

function Questions(): ReactElement {
  return (<QuestionsContainer>
    <QuestionsBox>
      <QuestionsTitle>Questions</QuestionsTitle>
      <QuestionsList>
        <QuestionsListBlock>
          {questions1.map(question => <Question key={question.id}>
            <QuestionHeader>
              <QuestionTitle>{question.title}</QuestionTitle>
              <QuestionButton>add</QuestionButton>
            </QuestionHeader>
            <QuestionBody>{question.detail}</QuestionBody>
          </Question>)}
        </QuestionsListBlock>
        <QuestionsListBlock>
          {questions2.map(question => <Question key={question.id}>
            <QuestionHeader>
              <QuestionTitle>{question.title}</QuestionTitle>
              <QuestionButton>add</QuestionButton>
            </QuestionHeader>
            <QuestionBody>{question.detail}</QuestionBody>
          </Question>)}
        </QuestionsListBlock>
      </QuestionsList>
    </QuestionsBox>
  </QuestionsContainer>)
}

export default Questions
