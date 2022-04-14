const dateFormat = new Date(2013, 11, 31)
  .toLocaleDateString()
  .replace(/(\d+)/g, (match) => {
    const n = Number(match);
    if (n === 2013) return 'yyyy';
    if (n === 31) return 'dd';
    if (n === 13) return 'yy';
    return 'MM';
  });

export default dateFormat;
