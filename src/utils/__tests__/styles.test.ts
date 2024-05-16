import { expect, test, describe } from "vitest";
import { appenedStyles } from '../style';

describe('appenedStyles function', () => {
  test('should concatenate an array of strings into a single string separated by spaces', () => {
    const styles = ['font-size: 16px', 'color: #333', 'line-height: 1.5'];
    const expected = 'font-size: 16px color: #333 line-height: 1.5';
    const result = appenedStyles(styles);
    expect(result).toEqual(expected);
  });

  test('should return an empty string if provided an empty array', () => {
    const styles: string[] = [];
    const expected = '';
    const result = appenedStyles(styles);
    expect(result).toEqual(expected);
  });

  test('should handle single element arrays', () => {
    const styles = ['font-size: 16px;'];
    const expected = 'font-size: 16px;';
    const result = appenedStyles(styles);
    expect(result).toEqual(expected);
  });

  test('should handle arrays with duplicate elements', () => {
    const styles = ['font-size: 16px;', 'font-size: 16px;', 'color: #333;', 'line-height: 1.5;'];
    const expected = 'font-size: 16px; font-size: 16px; color: #333; line-height: 1.5;';
    const result = appenedStyles(styles);
    expect(result).toEqual(expected);
  });
});
