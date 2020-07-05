import {
  TOGGLE_QUESTION,
  ToggleQuestionAction
} from "./types";

export function toggleQuestion(id: number): ToggleQuestionAction {
  return {
    type: TOGGLE_QUESTION,
    payload: id,
  };
}
