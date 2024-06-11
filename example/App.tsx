import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { CurrencyInput } from 'rn-currency-input';

export default function App() {
  const [value, setValue] = useState(0);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.exampleContainer}>
          <CurrencyInput
            pureValue={value}
            setValue={setValue}
            style={styles.nativeInput}
          />
          <Text>Pure Value: {value}</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 16,
  },
  exampleContainer: {
    alignItems: 'flex-start',
    marginVertical: 32,
  },
  nativeInput: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    width: '50%',
  },
  paperInput: {
    width: '50%',
    textAlign: 'right',
  },
});
