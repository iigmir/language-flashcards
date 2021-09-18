import Languages from "../assets/languages.json";

export const LangCodeToLanguage = input => Languages.filter( ({ value }) => value === input )[0]?.text ?? "Unknown";
