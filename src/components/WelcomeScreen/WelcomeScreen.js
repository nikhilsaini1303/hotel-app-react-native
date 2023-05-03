import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import welcome from "../../../assets/Images/welcome-2.gif";

const WelcomeScreen = () => {
    return (
        <View style={styles.root}>
            <Image 
                style={styles.image} 
                source={welcome}
            />
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 350,
        height: 150,
        marginVertical: 150
    }
});