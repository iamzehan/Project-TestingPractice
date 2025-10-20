import {
  capitalized,
  reversedString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./test";

test("Capitalizes the first letter", () => {
  expect(capitalized("ziaul")).toBe("Ziaul");
});

test("Reverses a string", () => {
  expect(reversedString("String")).toBe("gnirtS");
});

test("Calculates", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(10, 4)).toBe(6);
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.multiply(4, 7)).toBe(28);
});

test("CaesarCipher", () => {
  expect(caesarCipher("zehan", 3)).toBe("chkdq");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Decoupled Array Analyzer", () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj.average).toBe(4);
  expect(obj.min).toBe(1);
  expect(obj.max).toBe(8);
  expect(obj.length).toBe(6)
});
