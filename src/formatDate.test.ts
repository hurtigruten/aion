import { describe, expect, test } from 'vitest';

import formatDate from './formatDate';

const dateRegexp = /\d{1,4}.\d{1,2}.\d{1,4}/;
const defaultLocale = 'en-US';

describe('formatDate', () => {
  test('should format a Date object following users locale', () => {
    const date = new Date('2020 10 13');

    const result: string = formatDate(date, {}, defaultLocale);

    expect(result).toMatch(dateRegexp);
  });

  test('should format a string (incorrect format) object following users locale', () => {
    const date = '20201013';

    const result: string = formatDate(date, {}, defaultLocale);

    expect(result).toMatch(dateRegexp);
  });

  test('should format a string (correct format) object following users locale', () => {
    const date = '2022-03-10T18:05:00';
    const date2 = '2022 03 10 18:05';

    const result: string = formatDate(date, {}, defaultLocale);
    const result2: string = formatDate(date2, {}, defaultLocale);

    expect(result).toMatch(dateRegexp);
    expect(result2).toMatch(dateRegexp);
  });

  test('should allow additional modificator options', () => {
    const date = '20201013';

    const result: string = formatDate(
      date,
      {
        month: 'short',
      },
      defaultLocale
    );

    expect(result).toMatch(/[A-Z][a-z]{1,}/gi);
  });

  test('should allow formatting with locales manually set', () => {
    const date = '20201013';

    const result: string = formatDate(date, {}, defaultLocale);
    const result2: string = formatDate(date, {}, 'no-NB');

    expect(result).toEqual('10/13/2020');
    expect(result2).toEqual('13.10.2020');
  });
});
