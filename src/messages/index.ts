import enCA from "./en-CA";
import frCA from "./fr-CA";
import { ENGLISH, FRANCAIS } from "../redux/language-selector/types";

export type MessagesList = typeof enCA | typeof frCA;

function getMessages(language: string): MessagesList {
  switch (language) {
    case ENGLISH:
      return enCA;
    case FRANCAIS:
      return frCA;
    default:
      return enCA;
  }
}

export default getMessages;
