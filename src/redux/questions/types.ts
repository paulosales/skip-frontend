export const TOGGLE_QUESTION = "TOGGLE_QUESTION";

export interface ToggleQuestionAction {
  type: typeof TOGGLE_QUESTION;
  payload: number;
}

export type QuestionActionsTypes = ToggleQuestionAction;

export interface QuestionState {
  expandedQuestions: Set<number>;
}
