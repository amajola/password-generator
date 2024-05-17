import { appenedStyles } from "../../utils/style";
import "./style.css";

interface StrenghtIndicatorInterface {
  strenghtValue: number;
}

const StrenghtIndicator = ({ strenghtValue }: StrenghtIndicatorInterface) => {
  const coloredIndicators = Array.from({ length: 4 }, (_, index) => {
    return strenghtValue > index;
  });

  const styleMap = new Map([
    ["0", "strength-indicator"],
    ["1", "strenght-indicator-red"],
    ["2", "strenght-indicator-orange"],
    ["3", "strenght-indicator-yellow"],
    ["4", "strength-indicator-green"],
  ]);

  const strenghtMap = new Map([
    ["0", "TOO WEAK!"],
    ["1", "WEAK"],
    ["2", "MEDIUM"],
    ["3", "STRONG"],
    ["4", "Very Strong"],
  ]);

  return (
    <div className="indicator-container">
      <p className="body indicator-heading">STRENGTH</p>
      <div className="strenght-container">
        <h3 className="heading-medium strenght-text">{strenghtMap.get(strenghtValue.toString())}</h3>
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
