import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';

import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
        // navigation.push('ReviewDetails');
    };

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsium', key: '1' },
        { title: 'Gotta Catch them All (again)', rating: 4, body: 'lorem ipsium', key: '2' },
        { title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsium', key: '3' },
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
