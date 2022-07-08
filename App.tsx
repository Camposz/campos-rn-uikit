import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
//components
import { Btn, MenuItem, SearchField, TextField } from './src/components/atoms';
import { RFPercentage } from 'react-native-responsive-fontsize';

//SSE
import RNEventSource from 'react-native-event-source';

const App = () => {
    const [value, setValue] = useState<string>('');

    const url = 'http://192.168.1.153:9090/';
    const eventSource = new RNEventSource(url);

    useEffect(() => {
        eventSource.addEventListener('message', (ev) => {
            console.log(ev.data);
        });
        eventSource.addEventListener('error', (ev) => {
            console.log(ev);
        });
    }, []);

    const [loaded] = useFonts({
        WorkSans: require('./src/assets/fonts/WorkSans.ttf')
    });

    if (!loaded) {
        return null;
    }

    let arr: Array<number> = [1, 2];

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SearchField text={value} setValue={setValue} />
            <TextField text={value} setValue={setValue} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Btn text="Cancelar" style={{ maxWidth: RFPercentage(25) }} icon="faClose" type="subtittle" textWeigth="bold" background="red" />
                <Btn text="Enviar" style={{ maxWidth: RFPercentage(25) }} icon="faPaperPlane" type="subtittle" textWeigth="bold" background="purple" />
                <Btn text="Enviar" />
            </View>
            <View>
                {arr.map((item, index) => (
                    <MenuItem key={index} text="Menu item" icon="faAngleRight" listLayout={{ index: index, listSize: arr.length }} />
                ))}
            </View>
            <MenuItem text="Menu item" icon="faAngleRight" />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        padding: 25
    }
});
