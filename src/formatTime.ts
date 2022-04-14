const defaultOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

const formatTime = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {},
  locale: string | string[] = []
) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    ...defaultOptions,
    ...options,
  });

  if (typeof date === 'string') {
    return formatter.format(new Date(date));
  }

  return formatter.format(date);
};

export default formatTime;
