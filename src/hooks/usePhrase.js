import { useState } from "react";
import { phrases } from "../data";
import { getRandomInt } from "../util/random";

export const usePhrase = () => {
  const [phrase] = useState(phrases[getRandomInt(0, phrases.length)]);

  return phrase;
};
