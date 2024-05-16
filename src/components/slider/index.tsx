import React from "react";
import "./style.css";

interface SliderInterface {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Slider = ({ value, setValue }: SliderInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const track = inputRef.current;
    const percentage = (value / 30) * 100;
    if (track) {
      // Gradient doesn't perfectly go all the way to the thumb because it's a gradient'
      track.style.background = `linear-gradient(to right, var(--color-neon-gren) 0%, var(--color-very-dark-gray) ${percentage}%)`;
    }
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="slider-container">
      <div className="slider-header">
        <p className="body">Character Length</p>
        <h3 className="heading-large slider-value">{value}</h3>
      </div>
      <div>
        <input
          className="slider"
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="30"
          value={value}
          onChange={handleInputChange}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default Slider;
