import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider'; // Import theme hook

const HomeScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={theme.typography.header}>Home Screen</Text>
      <Text style={theme.typography.body}>This is a themed home screen.</Text>
      
      <Button
        title="Go to Details"
        color={theme.colors.primary}
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        title="Toggle Theme"
        color={theme.colors.secondary}
        onPress={toggleTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
