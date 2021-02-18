import enCA from "./en-CA.json";
import frCA from "./fr-CA.json";
import ptBR from "./pt-BR.json";
import {
  ENGLISH_CA,
  FRANCAIS_CA,
  PORTUGUESE_BR,
} from "../redux/language-selector/types";

export type MessagesList = typeof enCA | typeof frCA | typeof ptBR;

function getMessages(language: string): MessagesList {
  switch (language) {
    case ENGLISH_CA:
      return enCA;
    case FRANCAIS_CA:
      return frCA;
    case PORTUGUESE_BR:
      return ptBR;
    default:
      return enCA;
  }
}

export default getMessages;
