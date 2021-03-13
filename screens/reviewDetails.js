import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails screen</Text>
            <Button title='back to home screen' onPress={pressHandler} />
        </View>
    )
}
