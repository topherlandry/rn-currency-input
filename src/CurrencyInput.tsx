import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import type { Dispatch, SetStateAction } from 'react';
import type {
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextInputKeyPressEventData,
  ViewProps,
} from 'react-native';

interface ICurrencyInputProps extends ViewProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  applyMask?: (value: number) => string;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  resetOnFocus?: boolean;
  style?: StyleProp<ViewProps>;
}

function applyNorthAmericanMask(value: number) {
  const paddedValue = value.toString().padStart(3, '0');
  return [paddedValue.slice(0, -2), '.', paddedValue.slice(-2)].join('');
}

function CurrencyInput({
  value,
  setValue,
  applyMask = applyNorthAmericanMask,
  onFocus,
  onKeyPress,
  resetOnFocus = true,
  style,
  ...props
}: ICurrencyInputProps) {
  const [displayValue, setDisplayValue] = useState(applyMask(value));

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (resetOnFocus) {
      setDisplayValue('');
    }
    onFocus?.(e);
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    const keyValue = e.nativeEvent.key;
    const pureValue = displayValue.replace(/\D/g, '');
    const cleanedValue = parseInt(pureValue.concat(keyValue), 10);
    const maskedValue = applyMask(cleanedValue);

    setDisplayValue(maskedValue);
    if (Number.isSafeInteger(cleanedValue)) {
      setValue(cleanedValue);
    }
    onKeyPress?.(e);
  };

  return (
    <TextInput
      value={displayValue}
      onKeyPress={handleKeyPress}
      onFocus={handleFocus}
      maxLength={displayValue.length}
      style={[styles.input, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({ input: { textAlign: 'right' } });

export { CurrencyInput };
