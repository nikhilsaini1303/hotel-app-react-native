import {Alert} from 'react-native';

const CustomAlert = (text) => {

    Alert.alert("Success", text, [
        {text: "Ok", onPress : () => console.log("success")}
    ])
    
  }

export default CustomAlert;