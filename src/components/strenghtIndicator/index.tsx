import { appenedStyles } from "../../utils/style";
import "./style.css";

interface StrenghtIndicatorInterface {
  strenghtValue: number;
}

const StrenghtIndicator = ({ strenghtValue }: StrenghtIndicatorInterface) => {
  const coloredIndicators = Array.from({ length: 5 }, (_, index) => {
    return strenghtValue > index;
  });

  const styleMap = new Map([
    ["0", "strength-indicator"],
    ["1", "strenght-indicator-red"],
    ["2", "strenght-indicator-orange"],
    ["3", "strenght-indicator-yellow"],
    ["4", "strength-indicator-green"],
    ["5", "strength-indicator-green"],
  ]);

  return (
    <div className="indicator-container">
      <p className="body strenght-text">STRENGTH</p>
      <div className="strenght-container">
        <h3 className="heading-medium strenght-text">MEDIUM</h3>
        <div className="strenght-indicator-container">
          {Array.from(coloredIndicators, (value, index) => {
            const color = styleMap.get(strenghtValue.toString());
            if (value) {
              return (
                <div
                  key={`uncolored_${index}`} // Unique key for uncolored indicators
                  className={appenedStyles([color ?? "", "indicator-size"])}
                />
              );
            } else {
              return (
                <div
                  key={`uncolored_${index}`} // Unique key for uncolored indicators
                  className="strenght-indicator indicator-size"
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default StrenghtIndicator;
