import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { toggleQuestion } from "../../redux/questions/actions";
import { FormattedMessage } from "react-intl";
import {
  Question,
  QuestionBody,
  QuestionButton,
  QuestionHeader,
  QuestionsBox,
  QuestionsContainer,
  QuestionsList,
  QuestionsListBlock,
  QuestionsTitle,
  QuestionTitle,
} from "./styles";
import questions from "../../data/questions";

function Questions(): ReactElement {
  const { expandedQuestions } = useSelector(
    (state: RootState) => state.question
  );
  const dispatch = useDispatch();

  return (
    <QuestionsContainer>
      <QuestionsBox>
        <QuestionsTitle>
          <FormattedMessage id="questions" />
        </QuestionsTitle>
        <QuestionsList>
          {questions.map((blocks, idx) => (
            <QuestionsListBlock key={idx}>
              {blocks.map((question) => (
                <Question
                  data-testid={`question${question.id}`}
                  key={question.id}
                  onClick={() => {
                    dispatch(toggleQuestion(question.id));
                  }}
                  expanded={expandedQuestions.has(question.id)}
                >
                  <QuestionHeader>
                    <QuestionTitle>
                      <FormattedMessage id={question.titleId} />
                    </QuestionTitle>
                    <QuestionButton
                      data-testid={`question-button${question.id}`}
                      expanded={expandedQuestions.has(question.id)}
                    />
                  </QuestionHeader>
                  <QuestionBody>
                    <FormattedMessage id={question.detailId} />
                  </QuestionBody>
                </Question>
              ))}
            </QuestionsListBlock>
          ))}
        </QuestionsList>
      </QuestionsBox>
    </QuestionsContainer>
  );
}

export default Questions;
