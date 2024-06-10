# rn-currency-input

This is a simple currency input for React Native. It allows for user input of
a currency value without flickering and only being built with the React
Native `TextInput` component.

## Installation

```sh
npm install react-native-rn-currency-input
```

## Usage

The props interface extends the `TextInput` interface so all standard props
and styling and are available.

You can provide props for the masking function and whether to clear the input
on focus.

By default the component will mask to North American currency and clear input.

```js
import { useState } from 'react';
import { CurrencyInput } from 'react-native-rn-currency-input';

function MoneyInput() {
  const [value, setValue] = useState(0);
  return <CurrencyInput value={value} setValue={setValue} />;
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the
repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
