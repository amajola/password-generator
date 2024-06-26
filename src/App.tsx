import "./App.css";
import React from "react";
import Input from "./components/input";
import Button from "./components/button";
import Slider from "./components/slider";
import StrenghtIndicator from "./components/strenghtIndicator";
import Checkbox from "./components/checkbox";
import { checkPasswordStrength, generatePassword } from "./utils/password";

type OptionType = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

function App() {
  const [passwordLenght, setPasswordLenght] = React.useState(0);
  const [password, setPassword] = React.useState<string>("");
  const [isManualInput, setIsManualInput] = React.useState(false);
  const [options, setOptions] = React.useState<OptionType>({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [passwordStrenght, setPasswordStrenght] = React.useState(
    checkPasswordStrength(password ?? ""),
  );

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (password) setPasswordLenght(password?.length);
  };

  React.useEffect(() => {
    if (passwordLenght > 0 && !isManualInput) {
      setPassword(
        generatePassword(
          passwordLenght,
          options.lowercase,
          options.uppercase,
          options.symbols,
          options.numbers,
        ).slice(0, passwordLenght),
      );
    } else if (passwordLenght === 0) setPassword("");
  }, [passwordLenght, isManualInput, options]);

  React.useEffect(() => {
    setPasswordLenght(password?.length);
    setPasswordStrenght(checkPasswordStrength(password ?? ""));
  }, [password]);

  const handleCheckBoxClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const name = event.currentTarget.getAttribute("checkbox-name");
    if (name) {
      const noOptionSelected =
        Object.values(options).filter((option) => option === true).length > 1;
      // Check if any option is selected or if the clicked option is being changed
      if (noOptionSelected || !options[name as keyof OptionType]) {
        setOptions({ ...options, [name]: !options[name as keyof OptionType] });
      }
    }
  };

  return (
    <div className="container">
      <Input
        value={password}
        onChange={handlePasswordChange}
        setIsManualInput={setIsManualInput}
      />
      <div className="body-container">
        <div className="body-padding">
          <Slider
            value={passwordLenght}
            setValue={setPasswordLenght}
            setIsManualInput={setIsManualInput}
          />
          <div className="checkbox-container">
            <Checkbox
              name="uppercase"
              handleClick={handleCheckBoxClick}
              isChecked={options.uppercase}
              label="Include Uppercase Letters"
            />
            <Checkbox
              name="lowercase"
              handleClick={handleCheckBoxClick}
              isChecked={options.lowercase}
              label="Include Lowercase Letters"
            />
            <Checkbox
              name="numbers"
              handleClick={handleCheckBoxClick}
              isChecked={options.numbers}
              label="Include Numbers"
            />
            <Checkbox
              name="symbols"
              handleClick={handleCheckBoxClick}
              isChecked={options.symbols}
              label="Include Symbols"
            />
          </div>
          <StrenghtIndicator strenghtValue={passwordStrenght} />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
