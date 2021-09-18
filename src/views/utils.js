import Languages from "../assets/languages.json";
import PartOfSpeech from "../assets/part-of-speech.json";

export const LangCodeToLanguage = input => Languages.filter( ({ value }) => value === input )[0]?.text ?? "Unknown";
export const PosToLanguage = input => PartOfSpeech.filter( ({ value }) => value === input )[0]?.text ?? "Unknown";
