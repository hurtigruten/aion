import dateFormat from './getDateFormat';
import isDateValid from './isDateValid';

const parseDate = (
  input: string,
  pattern: string = dateFormat.replace(/m/g, 'M')
) => {
  const reducedSpecials = input.replace(/\D/gi, '');
  const splitDateString = `${reducedSpecials.substring(
    0,
    4
  )} ${reducedSpecials.substring(4, 6)} ${reducedSpecials.substring(6, 8)}`;
  const formattedParsedDate = new Date(splitDateString);
  const userTimezoneOffset = formattedParsedDate.getTimezoneOffset() * 60000;
  const formattedParsedDateWithTZ = new Date(
    formattedParsedDate.getTime() - userTimezoneOffset
  );
  if (isDateValid(formattedParsedDateWithTZ)) return formattedParsedDateWithTZ;

  if (pattern.trim().length !== input.trim().length) return new Date(input);

  const patternResults = [
    /y{2,4}/.exec(pattern),
    /M{1,2}/.exec(pattern),
    /d{1,2}/.exec(pattern),
  ].filter((x) => x);

  if (!(patternResults.length === 3)) return new Date(input);

  const parsedResults = patternResults.map((regexpResult, index) => {
    if (regexpResult === null) return;

    const value = input.substring(
      regexpResult.index,
      regexpResult.index + regexpResult[0].length
    );

    if (index === 0) return value.padStart(4, '2000');
    return value;
  });

  const date = new Date(parsedResults.join(' '));

  return isDateValid(date) ? date : new Date(input);
};

export default parseDate;
