import "./style.css";
import ArrowLeft from "../../assets/images/icon-arrow-right";

const Button = () => {
  return (
    <div>
      <a className="button-container body" href="https://github.com/amajola/password-generator">
        Go to the Github Repo
        <ArrowLeft className="arrow-icon" />
      </a>
    </div>
  );
};

export default Button;
