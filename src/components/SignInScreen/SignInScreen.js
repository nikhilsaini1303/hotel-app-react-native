import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import logo from '../../../assets/Images/Logo.png';
import CustomInput from '../../Helper/CustomInput/CustomInput';
import CustomButton from '../../Helper/CustomButton/CustomButton';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import showToast from '../../Helper/CustomToast/CustomToast';
import CustomAlert from '../../Helper/CustomAlert/CustomAlert';
import auth from '@react-native-firebase/auth';

const SignInScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebaseAuth = auth();

  const { height } = useWindowDimensions();

  const isValidate = () => {
    
    if(email === '') {
      showToast('error', 'Error', 'Please Enter Email');
      return false;
    }
    else if(password.length === 0) {
      showToast('error', 'Error', 'Please Enter Password');
      return false;
    }
    else{
      return true;
    }

  }
  
  const signInFromFirebase = async() => {
    firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      setEmail('');
      setPassword('');
      CustomAlert("Logged In Successfully");
      navigation.navigate('Details');
    })
    .catch(err => {
      if(err.code === 'auth/invalid-email') {
        showToast('error', 'Error', 'The email address is badly formatted.')
      }
      if(err.code === 'auth/user-not-found') {
        showToast('error', 'Error', "Email doesn't Exists. The user may have been deleted");
      }
      if(err.code === 'auth/wrong-password') {
        showToast('error', 'Error', 'The password is invalid or the user does not have a password.');
      }
      // console.log(err);
    })
  }



  const onSignInPressed = () => {
    if(!isValidate()) return;
    signInFromFirebase();
  }

  const onCreatePressed = () => {
    navigation.navigate('SignUp');
  }

  return (
  
    <View style={styles.root}>
  
        <Image 
          source={logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode='contain'
        />

        <CustomInput 
            placeholder='Email'
            value={email}
            setValue={setEmail}
        />
        
        <CustomInput 
            placeholder='Password'
            value={password}
            setValue={setPassword}
            secureTextEntry
        />

        <CustomButton 
            text='Sign In'
            onPress={onSignInPressed}
        />

        <CustomButton 
          text="Don't have an account? Create one" 
          onPress={onCreatePressed}
          type='TERTIARY'
        /> 
        <Toast />
    </View>
    
  );
};

export default SignInScreen;

const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200
  },
});