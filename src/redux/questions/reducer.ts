import {
  QuestionState,
  QuestionActionsTypes,
  TOGGLE_QUESTION,
} from "./types";

const INITIAL_STATE = {
  expandedQuestions: new Set<number>(),
};

export default function questionReducer(
  state: QuestionState = INITIAL_STATE,
  action: QuestionActionsTypes
): QuestionState {
  let expandedQuestions;

  if (action.type === TOGGLE_QUESTION) {
    expandedQuestions = new Set(state.expandedQuestions);
    if(expandedQuestions.has(action.payload)) {
      expandedQuestions.delete(action.payload)
    } else {
      expandedQuestions.add(action.payload);
    }
    return { ...state, expandedQuestions };
  } else {
    return state;
  }
}
