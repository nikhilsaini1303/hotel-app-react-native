import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import errorIcon from '../../../assets/Images/WarningIcon.png';

const InvalidScreen = () => {
    return (
        <View style={styles.root}>
            <Image source={errorIcon} style={styles.image} />
            <Text style={styles.text}>Invalid Loaction</Text>
            <Text style={[styles.text, styles.txt]}>Loaction Does Not Exists</Text>
        </View>
    );
};

export default InvalidScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#000',
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 1,
    },
    image : {
        margin: 10,
        height: 100,
        width: 110
    },
    text: {
        fontFamily: 'Raleway-ExtraBlack',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'capitalize',
        borderRadius: 20,
        color: 'red',
        margin: 5,
        lineHeight:30
    },
    txt: {
        fontSize: 16,
        fontWeight: '500'
    },
});