import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/ManinStack';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { SafeAreaView, StyleSheet, StatusBar, Dimensions,View, Text } from "react-native"
import useFonts from './src/hooks/useFont';
import ErrorBoundary from './src/errorBoundary/ErrorBoundary';
import NetworkInfo from './src/components/NetworkInfo/NetworkInfo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <MainStack />
            <NetworkInfo />
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    width: windowWidth,
    height: windowHeight,
  },
});

export default App;
