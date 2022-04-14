import { describe, expect, test } from 'vitest';

import formatTime from './formatTime';

const defaultLocale = 'en-US';

describe('formatTime', () => {
  test('should format a Date object following users locale', () => {
    const date = new Date('2022-03-10T18:05:00');

    const result: string = formatTime(date, {}, defaultLocale);

    expect(result).toMatch(/(18(.)05)/);
  });

  test('should format a string following users locale', () => {
    const date = '2022-03-10T18:05:00';

    const result: string = formatTime(date, {}, defaultLocale);

    expect(result).toMatch(/(18(.)05)/);
  });

  test('should allow additional modificator options', () => {
    const date = '2022-03-10T18:05:00';

    const result: string = formatTime(
      date,
      {
        hour12: true,
      },
      defaultLocale
    );
    const result2: string = formatTime(
      date,
      {
        hour: 'numeric',
        hour12: true,
      },
      defaultLocale
    );

    expect(result).toMatch(/(06(.)05) p\.*m\.*/i);
    expect(result2).toMatch(/(6(.)05) p\.*m\.*/i);
  });
});
