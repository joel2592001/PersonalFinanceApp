// src/hooks/useFonts.js
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const useFonts = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            try {
                await Font.loadAsync({
                    'Prompt-Regular': require('../../assets/fonts/Prompt-Regular.ttf'),
                    'Prompt-Bold': require('../../assets/fonts/Prompt-Bold.ttf'),
                    'Prompt-SemiBold': require('../../assets/fonts/Prompt-SemiBold.ttf'),
                });
                setFontsLoaded(true);
            } catch (error) {
                console.error("Failed to load fonts", error);
            }
        };

        loadFonts();
    }, []);

    return fontsLoaded;
};

export default useFonts;
