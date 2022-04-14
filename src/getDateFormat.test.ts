/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from 'vitest';

import dateFormat from './getDateFormat';

describe('getDateFormat', () => {
  test('should return current locale date format', () => {
    expect(dateFormat).toMatch(/(\w){1,4}.+(\w){1,2}.+(\w){1,4}/);
  });
});
