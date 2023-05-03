import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const HotelList = ({ item, onPress }) => {

    return (
        <View style={styles.textContainer}>
            <Text style={[styles.textFetch, styles.textAling]}>
                Country : <Text style={styles.txt}>
                    {item.hierarchyInfo.country.name ? item.hierarchyInfo.country.name : 'Not Available'}
                </Text>
            </Text>
            <Text style={styles.textFetch}>
                Display Name : <Text style={styles.txt}>{item.regionNames.displayName}</Text>
            </Text>
            <Text style={styles.textFetch}>
                Full Name : <Text style={styles.txt}>{item.regionNames.fullName}</Text>
            </Text>
            <Text style={[styles.txt, styles.textFetch, styles.moreInfo]} onPress={() => onPress(item.hierarchyInfo, item.regionNames, item.hotelAddress)}>More Info...</Text>
        </View>
    );
};

export default HotelList;

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        margin: 5,
        backgroundColor: '#000',
        borderRadius: 5,
        borderColor: '#e8e8e8',
        borderWidth: 1,
    },
    textFetch: {
        fontFamily: 'Raleway-ExtraBlack',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'capitalize',
        borderRadius: 20,
        color: 'white',
        margin: 5,
        lineHeight:30
    },
    txt: {
        fontSize: 16,
        fontWeight: '500'
    },
    textAling: {
        textAlign: 'center'
    },
    moreInfo: {
        textAlign: 'right'
    }
});