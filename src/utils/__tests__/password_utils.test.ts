import { expect, test, describe } from "vitest";
import { checkPasswordStrength, generatePassword } from "../password";

describe("checkPasswordStrength function", () => {
  test("should return 0 for an empty string", () => {
    expect(checkPasswordStrength("")).toBe(0);
  });

  test("should return 0 for a password with less than 8 characters", () => {
    expect(checkPasswordStrength("abc")).toBe(0);
  });

  test("should return 1 for a password with 8 characters", () => {
    expect(checkPasswordStrength("abcdefg1")).toBe(2);
  });

  test("should return 4 for a strong password", () => {
    expect(checkPasswordStrength("Abcdefg1@")).toBe(4);
  });
});

describe("generatePassword function", () => {
  test("should generate a password with specified length", () => {
    const password = generatePassword(10, true, true, true, true);
    expect(password.length).toBe(10);
  });

  test("should include lower letters if specified", () => {
    const password = generatePassword(10, true, false, false, false);
    expect(/[a-z]/.test(password)).toBe(true);
  });

  test("should include capital letters if specified", () => {
    const password = generatePassword(10, false, true, false, false);
    expect(/[A-Z]/.test(password)).toBe(true);
  });

  test("should include symbols if specified", () => {
    const password = generatePassword(10, false, false, true, false);
    expect(/[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password)).toBe(true);
  });

  test("should include numbers if specified", () => {
    const password = generatePassword(10, false, false, false, true);
    expect(/[0-9]/.test(password)).toBe(true);
  });
});
