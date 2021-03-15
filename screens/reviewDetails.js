import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

export default function ReviewDetails({ route, navigation }) {
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <Text>{ rating }</Text>
            </Card>
        </View>
    )
}
