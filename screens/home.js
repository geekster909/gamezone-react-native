import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
        // navigation.push('ReviewDetails');
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
            <Button title='go to review dets' onPress={pressHandler} />
        </View>
    )
}
