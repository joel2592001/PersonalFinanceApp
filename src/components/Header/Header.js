import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeProvider'; // Adjust path as necessary

const Header = ({ title, onBackPress, showBackButton }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Text style={[styles.buttonText, { color: theme.color }]}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={[styles.title, { color: theme.color }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    elevation: 2, // Optional for shadow effect on Android
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Header;
