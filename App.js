import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/ManinStack';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { SafeAreaView, StyleSheet, StatusBar, Dimensions } from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    with: windowWidth,
    height: windowHeight,
  },
});

export default App;
