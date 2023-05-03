import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import details from '../../../assets/Images/details.png'
import HotelList from '../HotelList/HotelList';
import LoadingScreen from '../LoadingScreen/LodingScreen';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import showToast from '../../Helper/CustomToast/CustomToast';
import InvalidScreen from '../InvalidScreen/InvalidScreen';
import auth from '@react-native-firebase/auth';
import logoutIcon from '../../../assets/Images/SignOut.png';

const DetailsScreen = ({navigation}) => {
    const [loaction, setLoaction] = useState('');
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const firebaseAuth = auth();

    const {height} = useWindowDimensions();

    const url = `https://hotels4.p.rapidapi.com/locations/v3/search?q=${loaction}&locale=en_US&langid=1033&siteid=300000001`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b7f0c098d1msh8000a209160b699p160cb6jsnbff91d2e5955',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    }

    const onSearchPressed = () => {
        if(loaction === '' || loaction.charAt(0) === ' ') {
            showToast('error', 'Error', 'Please Enter Loaction');
            return;
        }
        setIsLoading(true);
        fetchData();
        setLoaction('');
    }

    const fetchData = async () => {
    
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result.sr);
            setIsLoading(false);
            setIsInvalid(true);
        } catch (error) {
            setIsLoading(false);
            setIsInvalid(true);
        }
    
    }


    useEffect(() => {
        showToast('success', 'Success', 'Logged In Successfully');
    }, []);

    const Logout = async() => {
        firebaseAuth.signOut()
        .then(() => {
            navigation.replace("Home");
        })
        .catch(err => {
            // console.log(err);
        })
    }

    const moreInfo = (list1, list2, list3) => {
        navigation.navigate('MoreInfo', {
            paramKey1: list1,
            paramKey2: list2,
            paramKey3: list3,
        })
    }

    return (
        
            
        <ScrollView style={styles.first}>  
            <View style={styles.root}>
                <Image
                    source={details}
                    style={[styles.logo, {height: height * 0.11}]}
                />
                <TouchableOpacity onPress={Logout}>
                    <Image
                        source={logoutIcon}
                        style={{
                            width: 30,
                            height: 30,
                            marginLeft: 15
                        }}
                    />
                </TouchableOpacity> 
            </View>
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput 
                        placeholder='Enter Loaction'
                        value={loaction}
                        onChangeText={setLoaction} 
                        style={styles.textInput}
                    />
                </View>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={onSearchPressed}
                >
                    <Text 
                        style={styles.text}
                    >
                        Search
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                {
                    isLoading ? <LoadingScreen bool={isLoading} /> : (
                        data.length ? (
                            data.map((item, idx) =>
                                <HotelList 
                                    item={item}
                                    key={idx}
                                    onPress={moreInfo}
                                />
                            )
                        ) : (
                            isInvalid ? <InvalidScreen /> : <WelcomeScreen />
                        )
                    ) 
                }
            </View>
            <Toast />
        </ScrollView>
    
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    first: {
        backgroundColor: '#757575'
    },
    root: {
        alignItems: 'center',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 220,
        marginLeft: 25,
        resizeMode: 'cover'
    },
    container : {
        display: 'flex',
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    input : {
        backgroundColor: 'white',
        width: '70%',

        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

        paddingHorizontal: 10,
        // paddingVertical: 10
        marginVertical: 5,
        
    },
    buttonContainer : {
        width: '30%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#3B71F3',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase'
    },
    textInput: {}       
});