import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { Colors } from '../Utils/colors';
import { showToast } from '../Utils/showError';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../Navigators/RootNavigation';
import { Alert } from 'react-native';

const configureGoogle = () => GoogleSignin.configure({});

const signOut = async () => {
  Alert.alert('Logout', 'Are you sure you want to log out', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => onSignout() },
  ]);
};

const onSignout = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  if (isSignedIn) {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      AsyncStorage.clear();
      RootNavigation.navigate('Home');
      showToast('You are signed out!', Colors.green);
      console.log('You are signed out!');
    } catch (error) {}
  }
};

const loginWithGoogle = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
      resolve(userInfo);
    } catch (error: any) {
      reject(error);
      if (error.code instanceof Error === statusCodes.SIGN_IN_CANCELLED)
        showToast('User cancelled login with google', Colors.red);
      else if (error.code === statusCodes.IN_PROGRESS)
        showToast('Login with google already in progress', Colors.green);
      else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE)
        showToast('Google play services not available or outdated', Colors.red);
      else showToast('Some error occured while login with google', Colors.red);
    }
  });
};

export { loginWithGoogle, configureGoogle, signOut };
