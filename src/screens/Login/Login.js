import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput,Button } from "react-native";
import useStyles from "./Login.style";
import { useTheme } from "../../theme/ThemeProvider";

const Login = () => {
    const { theme, toggleTheme } = useTheme(); // Access the theme and toggle function

    const styles = useStyles({theme}); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <Text style={styles.title1}>Login Screen</Text>
            <Text style={styles.title2}>Login Screen</Text>
            <Text style={styles.title3}>Login Screen</Text>
            <Text style={styles.title4}>Login Screen</Text>
            <Text style={styles.title5}>Login Screen</Text>
            <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
    )
};

export default Login;