export const appenedStyles = (styles: Array<string>): string => {
  return styles.reduce((reducer, element) => {
    if (reducer !== "") {
      return reducer + " " + element;
    } else return element;
  }, "");
};
