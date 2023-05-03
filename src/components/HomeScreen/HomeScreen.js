import { Image, ImageBackground, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import home from '../../../assets/Images/home.jpeg';
import CustomButton from '../../Helper/CustomButton/CustomButton';
import logo from '../../../assets/Images/Logo.png';
import hotel from '../../../assets/Images/hotel.png';
import auth from '@react-native-firebase/auth';


const HomeScreen = ({navigation}) => {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const { height } = useWindowDimensions();

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }

    const onSignInPressed= () => {
        navigation.navigate('SignIn');
    }

   

    const onAuthStateChanged =  async(user)  => {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    },[]);

    if(initializing) return null;

    if(user) {
        navigation.replace('Details');
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={home} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Welcome To</Text>
                <View style={{flex:1, alignItems: 'center'}}>
                    <Image 
                        source={logo}
                        style={[styles.logo, {height: height * 0.1}]}
                        resizeMode='contain'
                    />
                </View>
                <View style={{alignItems: 'center'}}>
                    <Image 
                        style={[styles.hotellogo, {height: height * 0.4}]}
                        source={hotel} 
                    />
                </View>
                <View style={{padding: 20, marginVertical: 30}}>
                    <CustomButton 
                        onPress={onSignUpPressed}
                        text="Sign Up"
                    />
                    <CustomButton 
                        onPress={onSignInPressed}
                        text='Sign In'
                        bgColor="#E7EAF4"
                        fgColor="#4765A9"
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        resizeMode: 'cover'
    },
    hotellogo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 600
    },
    text: {
        color: '#cc2b31',
        fontFamily: 'Raleway-ExtraBlack',
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'capitalize',
        marginTop: 50
    },
});