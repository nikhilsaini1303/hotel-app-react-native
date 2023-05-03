import { Toast } from 'react-native-toast-message/lib/src/Toast';
const showToast = (type, text1, text2) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      autoHide: true,
      visibilityTime: 3000,
      position: 'top'
    })
}

  export default showToast;