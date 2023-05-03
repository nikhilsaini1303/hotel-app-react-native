import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import logo from '../../../assets/Images/Logo.png';
import CustomInput from '../../Helper/CustomInput/CustomInput';
import CustomButton from '../../Helper/CustomButton/CustomButton';
import showToast from '../../Helper/CustomToast/CustomToast';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import CustomAlert from '../../Helper/CustomAlert/CustomAlert';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({navigation}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fireStore = firestore();
  const firebaseAuth = auth();

  const { height } = useWindowDimensions();

  const isValidate = () => {
    
      if(firstName === '') {
        showToast('error', 'Error', 'Please Enter First Name');
        return false;
      }
      else if(firstName === ' ') {
        showToast('error', 'Error', 'Please Enter Valid First Name');
        return false;
      }
      else if(lastName === '') {
        showToast('error', 'Error', 'Please Enter Last Name');
        return false;
      }
      else if(lastName === ' ') {
        showToast('error', 'Error', 'Please Enter Valid Last Name');
        return false;
      }
      else if(email === '') {
        showToast('error', 'Error', 'Please Enter Email');
        return false;
      }
      else if(email === ' ') {
        showToast('error', 'Error', 'Please Enter Valid Email');
        return false;
      }
      else if(password.length < 6) {
        showToast('error', 'Error', 'Please Enter Password Length Of 6');
        return false;
      }
      else{
        return true;
      }

  } 

  const registerUseronFirebase = async() => {
      firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        setDataOnStore();
      })
      .catch(err => {
        if(err.code === 'auth/email-already-in-use') {
          showToast('error', 'Exists', 'That email address is already in use!');
        }
        
        if(err.code === 'auth/invalid-email') {
          showToast('error', 'Invalid', 'That email address is invalid!');
        }
        
      });
  }

  const setDataOnStore = async() => {
      fireStore.collection('users')
      .add({
        firstName,
        lastName,
        email
      })
      .then(() => {
        CustomAlert("User Account Created & Logged In Successfully");
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
        navigation.navigate('Details');
      })
      .catch(err => {
        console.log(err);
      })
  }



  const onResgisterPressed = () => {
      if(!isValidate()) return;
      registerUseronFirebase();
  }

  return (
    <View style={styles.root}>
      <Image 
        source={logo}
        style={[styles.logo, {height: height * 0.1}]}
        resizeMode='contain'
      />

      <Text style={styles.title}>Create an account</Text>

      <CustomInput 
        placeholder={'First Name'}
        value={firstName}
        setValue={setFirstName}
      />
      <CustomInput 
        placeholder={'Last Name'}
        value={lastName}
        setValue={setLastName}
      />
      <CustomInput 
        placeholder={'Email'}
        value={email}
        setValue={setEmail}
      />
      <CustomInput 
        placeholder={'Password'}
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <CustomButton
          text={'Register'}
          onPress={onResgisterPressed}
      />
      <Toast />
    </View>
  );
};

export default SignUpScreen;

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10
  }

});