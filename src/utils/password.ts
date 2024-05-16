export const checkPasswordStrength = (password: string): number => {
  const regex = {
    lowerCase: /[a-z]/,
    upperCase: /[A-Z]/,
    digits: /[0-9]/,
    specialChars: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
  };

  let strength = 0;

  const passwordLenght = password.length >= 8;
  if (passwordLenght) strength++;

  // Check for lowercase, uppercase, digits, and special characters and increment strength
  if (regex.lowerCase.test(password) && passwordLenght) strength++;
  if (regex.upperCase.test(password) && passwordLenght) strength++;
  if (regex.digits.test(password) && passwordLenght) strength++;
  if (regex.specialChars.test(password) && passwordLenght) strength++;

  return strength;
};

export const generatePassword = (
  length: number,
  includeLowerLetters: boolean,
  includeCapitalLetters: boolean,
  includeSymbols: boolean,
  includeNumber: boolean,
): string => {
  const charset: string[] = [];
  const password: string[] = [];

  if (includeNumber) charset.push("0123456789");
  if (includeLowerLetters) charset.push("abcdefghijklmnopqrstuvwxyz");
  if (includeCapitalLetters) charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (includeSymbols) charset.push("!@#$%^&*()_+~`|}{[]\\:;?><,./-=");

  // Ensure at least one character from each category is included
  charset.forEach((categoryChars) => {
    // Gets a charater at a spefic index
    const randomChar = categoryChars.charAt(
      // This is from the range of 0 - categoryChars.length
      Math.floor(Math.random() * categoryChars.length),
    );
    password.push(randomChar);
  });

  // Fill the rest of the password with random characters
  const remainingLength = length - password.length;
  const remainingCharset = charset.join("");
  const remainingPassword = Array.from({ length: remainingLength }, () =>
    remainingCharset.charAt(
      Math.floor(Math.random() * remainingCharset.length),
    ),
  );

  const finalPasswordArray = password.concat(remainingPassword);

  return finalPasswordArray.join("");
};
