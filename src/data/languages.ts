import {
  ENGLISH_CA,
  FRANCAIS_CA,
  PORTUGUESE_BR,
} from "../redux/language-selector/types";

const languages = [
  { value: FRANCAIS_CA, label: "Français", testid: "francais-selector" },
  { value: ENGLISH_CA, label: "English", testid: "english-selector" },
  {
    value: PORTUGUESE_BR,
    label: "Brazilian Portuguese",
    testid: "brazilian-portuguese-selector",
  },
];

export default languages;
