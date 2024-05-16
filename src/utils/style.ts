export const appenedStyles = (styles: Array<string>): string => {
  return styles.reduce((reducer, element) => {
    return reducer + " " + element;
  }, "");
};
