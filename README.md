<div align="center">

# Aion

[![release version](https://img.shields.io/npm/v/@hurtigruten/aion)](https://www.npmjs.com/package/@hurtigruten/aion) [![weekly download count](https://img.shields.io/npm/dm/@hurtigruten/aion)](https://npmcharts.com/compare/@hurtigruten/aion?interval=30&minimal=true) ![primary language procentage](https://img.shields.io/github/languages/top/hurtigruten/aion) ![last commit badge](https://img.shields.io/github/last-commit/hurtigruten/aion)

</div>

Aion is a lightweight, zero-dependency JavaScript date formatting library. If you don't do complex date manipulation in your project, you should try out Aion.

- 👓 Parses more date formats than the regular `Date` constructor would do in JS.
- 🪀 Formats the passed date according to passed locale.
- ✅ Let's you easily check for date's validity.
- 💡 Let's you figure out what current user's date format is.

## Quick start

- Install the package

```sh
npm i @hurtigruten/aion
```

- Import needed utils in your project

```js
import { formatDate } from '@hurtigruten/aion';
```

- Use it to display a date

```js
const formattedDate = formatDate('20201130', { year: '2-digit' });

formattedDate // "30/11/20"
```


## Methods

### getDateFormat

```ts
getDateFormat: string
```

describes current user's date format (as string)

### isDateValid

```ts
isDateValid: (input: Date) => boolean
```

check if provided Date object is a valid date.

### parseDate

```ts
parseDate: (
    input: string,
    pattern?: string
) => Date
```

parses provided string into a Date object, provide it with a date-format pattern that matches the `input`, else it will use the one from `getDateFormat`

### formatDate

```ts
formatDate: (
    date: Date | string, 
    options?: Intl.DateTimeFormatOptions,
    locale?: string | string[]
) => string
```

formats provided `date` to user friendly locale-based string, prefer using `options` to manipulate the output. Default is 2-digit day, 2-digit month, and numeric year, i.e. `31/02/2020`. `parseDate` is used internally if provided `date` is of string type.
[Read more about options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)

### formatTime

```ts
formatTime: (
date: Date | string,
    options?: Intl.DateTimeFormatOptions,
    locale?: string | string[]
) => string
```

formats provided `date` to user friendly locale-based string that represents only the time, prefer using `options` to manipulate the output. Default is 2-digit hour, 2-digit minutes, and 12hour false, i.e. `23:54`. `parseDate` is used internally if provided `date` is of string type.
[Read more about options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)

## Licence

[MIT](https://opensource.org/licenses/MIT)