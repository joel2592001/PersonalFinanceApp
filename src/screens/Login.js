import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeProvider";

const Login = () => {
    const { theme,toggleTheme } = useTheme();
    return (
        <View style={{flex: 1,backgroundColor: theme.colors.background}}>
            <Text style={{color: theme.colors.textPrimary}}>Login joel</Text>
            <TouchableOpacity  onPress={toggleTheme}>
                <Text style={{color: theme.colors.textPrimary}}>Toggle Theme</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;