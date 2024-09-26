import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Animated } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const NetworkInfo = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [opacity] = useState(new Animated.Value(0)); // Start fully transparent

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      
      if (!state.isConnected) {
        // Alert.alert("Network Error", "No Internet connection available.");
        // Fade in when disconnected
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300, // Duration for fade in
          useNativeDriver: true,
        }).start();
      } else {
        // Fade out when connected
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500, // Duration for fade out
          useNativeDriver: true,
        }).start();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [opacity]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={[styles.text, { color: isConnected ? 'green' : 'red' }]}>
        {isConnected ? "You are connected to the internet" : "You are offline"}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // To overlay on the app's content
    top: 0, // Adjust this to position it at the top
    width: '100%',
    padding: 10,
    backgroundColor: 'white', // Background color for visibility
    zIndex: 1000, // Ensure it appears on top
  },
  text: {
    fontSize: 18,
  },
});

export default NetworkInfo;
