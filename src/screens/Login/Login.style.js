import { StyleSheet } from 'react-native';

const useStyles = ({ theme }) => {

  console.log("theme::",theme.typography.h2);

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    title: {
      color: theme.colors.textPrimary,
      ...theme.typography.h1,
    },
    title1: {
      ...theme.typography.h2,
      color: theme.colors.textPrimary
    },
    title2: {
      ...theme.typography.h3,
      color: theme.colors.textPrimary
    },
    title3: {
      ...theme.typography.body1,
      color: theme.colors.textPrimary
    },
    title4: {
      ...theme.typography.body2,
      color: theme.colors.textPrimary
    },
    title5: {
      ...theme.typography.caption,
      color: theme.colors.textPrimary
    },

  });
};

export default useStyles;
