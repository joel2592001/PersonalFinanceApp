import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

const DetailsScreen = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={theme.typography.header}>Details Screen</Text>
      <Text style={theme.typography.body}>This is a themed details screen.</Text>

      <Button title="Go Back" color={theme.colors.primary} onPress={() => navigation.goBack()} />
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

export default DetailsScreen;
