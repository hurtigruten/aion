import { describe, expect, test } from 'vitest';

import isDateValid from './isDateValid';

describe('isDateValid', () => {
  test('should return true for valid date', () => {
    const input = new Date('2020 02 32');
    const input2 = new Date('2020 02 20');

    expect(isDateValid(input)).toBeFalsy();
    expect(isDateValid(input2)).toBeTruthy();
  });
});
