// src/theme/typography.js
import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  subheader: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  body: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  caption: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  // Add more typography styles as needed
});
