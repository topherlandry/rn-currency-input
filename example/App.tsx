import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CurrencyInput } from 'rn-currency-input';

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <CurrencyInput value={value} setValue={setValue} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
