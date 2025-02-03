export function getFirstLettersUppercase(str) {
  const words = str.split(/\s+/);

  const firstLetters = words.map((word) => word.charAt(0));

  const concatenatedLetters = firstLetters.join("").toUpperCase();

  return concatenatedLetters;
}
