import styled from "styled-components";
import device from "../../responsive/device";
import MaterialIcon from "../material-icon";

export const QuestionsContainer = styled.section`
  padding: 64px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const QuestionsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 960px;
  width: calc(100% + 40px);
  margin: -20px;
  box-sizing: border-box;
`;

export const QuestionsTitle = styled.div`
  color: rgb(51, 51, 51);
  font-family: CoreSansA65;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 31.2px;
  width: 100%;
  padding: 20px;
`;

export const QuestionsList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const QuestionsListBlock = styled.div`
  padding: 20px;
  flex-grow: 0;
  margin: 0;
  box-sizing: border-box;

  @media ${device.laptop} {
    max-width: 50%;
    flex-basis: 50%;
  }
`;

export const Question = styled.div<{ expanded?: boolean }>`
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  max-height: ${(props) => (props.expanded ? "400px" : "70px")};
  overflow-x: hidden;
  overflow-y: hidden;
  border-bottom: solid 1px #b0b6c9;
  transition: max-height 0.4s ease-in-out;
`;

export const QuestionHeader = styled.div`
  display: flex;
  flex-basis: auto;
  flex-shrink: 0;
  align-items: center;
  flex-direction: row;
`;

export const QuestionTitle = styled.div`
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
  flex-shrink: 1;
`;

export const QuestionButton = styled(MaterialIcon)<{ expanded?: boolean }>`
  width: 1em;
  height: 1em;
  overflow: hidden;
  font-size: 24px;
  flex-shrink: 0;
  color: rgb(0, 108, 187);
  transform: rotate(${(props) => (props.expanded ? "180deg" : "0deg")});
  transition: transform 0.4s ease-in-out;

  &::after {
    content: "keyboard_arrow_down";
  }
`;

export const QuestionBody = styled.div`
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
`;
