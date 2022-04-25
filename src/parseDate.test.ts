import { describe, expect, test } from 'vitest';

import parseDate from './parseDate';
import isDateValid from './isDateValid';

describe('parseDate', () => {
  test('should return a Date if provided string is  acceptable', () => {
    const input: string = '2022-03-10T18:05:00';

    const result: Date = parseDate(input);

    expect(isDateValid(result)).toBeTruthy();
    expect(result.getDate()).toEqual(10);
    expect(result.getMonth()).toEqual(2);
    expect(result.getFullYear()).toEqual(2022);
  });

  test('should add spaces to a date string and return a Date', () => {
    const input: string = '20201120';

    const result: Date = parseDate(input);

    expect(isDateValid(result)).toBeTruthy();
    expect(result.getDate()).toEqual(20);
    expect(result.getMonth()).toEqual(10);
    expect(result.getFullYear()).toEqual(2020);
  });

  test('should allow custom parse formats', () => {
    const input: string = '20.11.2020';
    const pattern: string = 'dd.MM.yyyy';

    const result = parseDate(input, pattern);

    expect(isDateValid(result)).toBeTruthy();
    expect(result.getDate()).toEqual(20);
    expect(result.getMonth()).toEqual(10);
    expect(result.getFullYear()).toEqual(2020);

    const input2: string = '19/11/29';
    const pattern2: string = 'yy/MM/dd';

    const result2 = parseDate(input2, pattern2);

    expect(isDateValid(result2)).toBeTruthy();
    expect(result2.getDate()).toEqual(29);
    expect(result2.getMonth()).toEqual(10);
    expect(result2.getFullYear()).toEqual(2019);

    const input3: string = '02/11/2031';
    const pattern3: string = 'MM/dd/yyyy';

    const result3 = parseDate(input3, pattern3);

    expect(isDateValid(result3)).toBeTruthy();
    expect(result3.getDate()).toEqual(11);
    expect(result3.getMonth()).toEqual(1);
    expect(result3.getFullYear()).toEqual(2031);
  });

  test('should parse date without time', () => {
    const input: string = '2022-03-10';

    const result: Date = parseDate(input);

    expect(isDateValid(result)).toBeTruthy();
    expect(result.getDate()).toEqual(10);
    expect(result.getMonth()).toEqual(2);
    expect(result.getFullYear()).toEqual(2022);
    expect(result).toEqual(new Date('2022-03-10T00:00:00.000Z'));
  });
});
