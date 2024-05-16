import React from "react";
import "./style.css";
import CopyIcon from "../../assets/images/icon-copy";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface InputInterface {
  value: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setIsManualInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = ({ value, onChange, setIsManualInput }: InputInterface) => {
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
        onFocus={() => {
          setHovered(!hovered);
          setIsManualInput(true);
        }}
        onBlur={() => {
          setHovered(!hovered);
        }}
      ></input>
      <CopyToClipboard text={value ?? ""} onCopy={onCopy}>
        {/* Not Enough time to figure out how to not have this take up space or not popin and change size */}
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
