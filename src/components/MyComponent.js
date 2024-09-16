// src/components/MyComponent.js
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={theme.typography.header}>Hello, World!</Text>
      <Text style={theme.typography.body}>This is a sample text.</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={theme.typography.body}>Toggle Theme</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MyComponent;
