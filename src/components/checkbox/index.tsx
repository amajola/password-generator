import CheckIcon from "../../assets/images/icon-check";
import "./style.css";

interface CheckboxInterface {
  isChecked: boolean;
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  label: string;
  disabled?: boolean;
  name: string;
}

const Checkbox = ({
  isChecked,
  handleClick,
  label,
  name,
}: CheckboxInterface) => {
  return (
    <div className="custom-checkbox">
      <div
        checkbox-name={name}
        className={isChecked ? "checkbox checked" : "checkbox"}
        onClick={(event) => handleClick(event)}
      >
        {isChecked && <CheckIcon />}
      </div>
      <label htmlFor="checkbox" className="body">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
