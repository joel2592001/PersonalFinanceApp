import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// This component will simulate an error during rendering
const ProblematicComponent = () => {
  const [errorTrigger, setErrorTrigger] = useState(false);

  // If errorTrigger is true, an error will be thrown during rendering
  if (errorTrigger) {
    console.log('Simulating an error during rendering...');
    throw new Error('This is a simulated error during rendering!');
  }

  return (
    <View style={styles.container}>
      <Text>This component will throw an error during rendering.</Text>
      <Button title="Trigger Error" onPress={() => setErrorTrigger(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default ProblematicComponent;
