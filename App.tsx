import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
//components
import { SearchField } from './src/components/atoms/searchField';
import { TextField } from './src/components/atoms/textField';
import { Btn } from './src/components/atoms/btn';

const App = () => {
    const [value, setValue] = useState<string>('');

    const [loaded] = useFonts({
        WorkSans: require('./src/assets/fonts/WorkSans.ttf')
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SearchField text={value} setValue={setValue} />
            <TextField text={value} setValue={setValue} />
            <Btn text="Get Started" style={{ alignItems: 'center' }} icon="faPaperPlane" />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f994',
        justifyContent: 'space-evenly',
        padding: 25
    }
});
