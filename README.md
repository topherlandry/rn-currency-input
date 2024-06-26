# rn-currency-input

This is a simple currency input for React Native. It allows for user input of
a currency value without flickering and only being built with the React
Native `TextInput` component.

At the moment this can't be used as a render component in React Native Paper
due to the lack of forward ref support on `TextInputFlat` and
`TextInputOutlined`. If there's an issue raised, can create a Paper specific
component for the time being.

## Installation

```sh
npm install rn-currency-input
```

## Usage

The props interface extends the `TextInput` interface so all standard props
and styling are available.

You can provide props for the masking function and whether to clear the input
on focus.

By default the component will mask to North American currency and clear input.

```js
import { useState } from 'react';
import { CurrencyInput } from 'rn-currency-input';

function MoneyInput() {
  const [value, setValue] = useState(0);
  return <CurrencyInput value={value} setValue={setValue} />;
}
```

A working example is provided in `/example`.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the
repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
