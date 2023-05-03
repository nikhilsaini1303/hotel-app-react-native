import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const img1 = [
    { value : "https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { value : "https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg"},
    { value : "https://images.pexels.com/photos/2607113/pexels-photo-2607113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { value : "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}, 
    {value : "https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/170156/pexels-photo-170156.jpeg?auto=compress&cs=tinysrgb&w=800"},
    {value : "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=800"},
    {value : "https://images.pexels.com/photos/2294463/pexels-photo-2294463.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"},
    {value : "https://images.pexels.com/photos/452726/pexels-photo-452726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
]

const img2 = [
    {value : "https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/2952663/pexels-photo-2952663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/5379219/pexels-photo-5379219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/1103808/pexels-photo-1103808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
]

const img3 = [
    {value : "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
]

const img4 = [
    {value : "https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/6474532/pexels-photo-6474532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {value : "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
]

const arr = [0,1,2,3,4,5,6,7,8,9];

const MoreInfoScreen = ({route}) => {
    
    const [hotelImg, setHotelImg] = useState(null);
    const [hotelBed, setHotelBed] = useState(null);
    const [hotelA, setHotelA] = useState(null);
    const [hotelB, setHotelB] = useState(null);


    function random_item(items) {
        return items[Math.floor(Math.random()*items.length)];      
    }

    useEffect(() => {
        let select = random_item(arr);
        let aImage = img1[select];
        let bImage = img2[select];
        let cImage = img3[select];
        let dImage = img4[select];
        setHotelImg(aImage);
        setHotelBed(bImage);
        setHotelA(cImage);
        setHotelB(dImage);
    }, [hotelImg, hotelBed, hotelA, hotelB]);

    return (
            
        <ScrollView style={styles.root}>
            <View style={styles.header}> 
                <Text style={styles.headerText}>About Hotel</Text>
            </View>
            
            <View style={styles.container}>
                <Text style={[styles.textFetch, styles.textAling]}>
                    Country : <Text style={styles.txt}>
                        {route.params.paramKey1.country.name ? route.params.paramKey1.country.name : "Not Available"} 
                    </Text>
                </Text>
                <View style={styles.imgCon}>
                    {
                        hotelImg ? (
                            <Image source={{uri: hotelImg.value}} style={styles.image}/>
                        ) : null
                    }
                </View>
                <Text style={styles.textFetch}>
                    Display Name : <Text style={styles.txt}>{route.params.paramKey2.displayName}</Text>
                </Text>
                <Text style={styles.textFetch}>
                    Full Name : <Text style={styles.txt}>{route.params.paramKey2.fullName}</Text>
                </Text>
                <Text style={styles.textFetch}>
                    Short Name : <Text style={styles.txt}>{route.params.paramKey2.shortName}</Text>
                </Text>
                <View style={styles.imgCon}>
                    {
                        hotelImg ? (
                            <Image source={{uri: hotelBed.value}} style={styles.image}/>
                        ) : null
                    }
                </View>
                <Text style={styles.textFetch}>
                    Primary Name : <Text style={styles.txt}>{route.params.paramKey2.primaryDisplayName}</Text>
                </Text>
                <Text style={styles.textFetch}>
                    Secondary Name : <Text style={styles.txt}>{route.params.paramKey2.secondaryDisplayName}</Text>
                </Text>
                <Text style={styles.textFetch}>
                    Last Search Name : <Text style={styles.txt}>{route.params.paramKey2.lastSearchName}</Text>
                </Text>
                <View style={styles.imgCon}>
                    {
                        hotelImg ? (
                            <Image source={{uri: hotelA.value}} style={styles.image}/>
                        ) : null
                    }
                </View>
                <Text style={styles.textFetch}>
                    Hotel Address : 
                </Text>
                    {
                        route.params.paramKey3 ? ( 
                            <View style={styles.address}>
                                <Text style={styles.textFetch}>
                                    Street : <Text style={styles.txt}>{route.params.paramKey3.street ? route.params.paramKey3.street :  "Not Available"}</Text>
                                </Text>
                                <Text style={styles.textFetch}>
                                    City : <Text style={styles.txt}>{route.params.paramKey3.city ? route.params.paramKey3.city : "Not Available"}</Text>
                                </Text>
                                <Text style={styles.textFetch}>
                                    Province : <Text style={styles.txt}>{route.params.paramKey3.province ? route.params.paramKey3.province : 'Not Available'}</Text>
                                </Text>
                            </View> 
                        ) : ( 
                            <View style={styles.address}>
                                <Text style={styles.textFetch}>
                                    <Text style={styles.txt}>No Address Available</Text>
                                </Text>
                            </View>
                        )
                    } 
                <View style={styles.imgCon}>
                    {
                        hotelImg ? (
                            <Image source={{uri: hotelB.value}} style={styles.image}/>
                        ) : null
                    }
                </View>        
            </View> 
        </ScrollView>      
        
    );
};

export default MoreInfoScreen;

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#f5e5e4',
    },
    header: {
        flex: 1,
        backgroundColor: '#000',
        height: 80,
        alignItems: 'center',
    },
    imgCon: {
        alignItems: 'center',
    },
    image : {
        height: 350,
        width: 380,
        resizeMode: 'stretch'
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Raleway-ExtraBlack',
        fontWeight: 'bold',
        fontSize: 45,
        textTransform: 'uppercase',
        marginVertical: 8
    },
    container: {
        flex: 1,
        margin: 5,
    },
    textFetch: {
        fontFamily: 'Raleway-ExtraBlack',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'capitalize',
        borderRadius: 20,
        color: '#000',
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
    address: {
        marginHorizontal: 30, 
        backgroundColor: "#b5aeaf",
        marginVertical: 5,
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 1
    }
});










