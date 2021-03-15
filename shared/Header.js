import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title }) {
    const navigation = useNavigation();

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            {/* icon for the menu */}
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: '100%',
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 20,
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
});