export function capitalized(word) {
  try {
    return word[0].toUpperCase() + word.slice(1);
  } catch {
    throw new Error();
  }
}

export function reversedString(string) {
  return string.split("").reverse().join("");
}

export const calculator = (function () {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  return {
    add,
    subtract,
    divide,
    multiply,
  };
})();

export function caesarCipher(string, key) {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

  const indexes = []; // keep record of the indexes of the sent string
  string.split("").forEach((value) => {
    if (value.match("[a-z]")) indexes.push(lowerCase.indexOf(value));
    else if (value.match("[A-Z]")) indexes.push(upperCase.indexOf(value) + 100);
    else indexes.push(value);
  });

  function shifter(alphabets) {
    // now shift according to the key
    const shift = alphabets.splice(0, key);
    alphabets.push(...shift); // add them to the end of the alphabets
    return alphabets;
  }

  shifter(lowerCase);
  shifter(upperCase);

  indexes.forEach((index, idx) => {
    if (typeof index == "number") {
      if (index > 100) indexes[idx] = upperCase[index - 100];
      else if (index < 100) indexes[idx] = lowerCase[index];
    }
  }); // cipher
  return indexes.join("");
}

export function analyzeArray(array) {
  const average = () => array.reduce((a, b) => a + b, 0) / array.length;
  const min = () => Math.min(...array);
  const max = () => Math.max(...array);
  const length = () => array.length;
  return {
    average:average(),
    min: min(),
    max:max(),
    length:length(),
  }
}
