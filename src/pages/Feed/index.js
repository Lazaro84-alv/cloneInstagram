import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello, Feed!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});
 