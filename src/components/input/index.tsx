import React from "react";
import "./style.css";
import CopyIcon from "../../assets/images/icon-copy";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface InputInterface {
  value: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: InputInterface) => {
  const [hovered, setHovered] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const onCopy = async () => {
    if (!value) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div
      className={`input-container ${hovered ? "input-container-hovered" : ""}`}
    >
      <input
        type="text"
        className="custom-input heading-large"
        placeholder="P4$5W0rD!"
        value={value ?? ""}
        onChange={onChange}
        onFocus={() => setHovered(!hovered)}
        onBlur={() => setHovered(!hovered)}
        onClick={() => onCopy()}
      ></input>
      <CopyToClipboard text={value ?? ""} onCopy={onCopy}>
        <button className="icon-container">
          <p className={`body copied-text ${copied ? "visible" : ""}`}>
            COPIED
          </p>
          <CopyIcon className="copy-icon" />
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Input;
