import parseDate from './parseDate';

const defaultOptions: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

const formatDate = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {},
  locale: string | string[] = []
) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    ...defaultOptions,
    ...options,
  });

  if (typeof date === 'string') {
    return formatter.format(parseDate(date));
  }
  return formatter.format(date);
};

export default formatDate;
