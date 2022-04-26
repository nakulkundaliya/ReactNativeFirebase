import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Home from '../Containers/Home';
import Login from '../Containers/Login';
import Dashboard from '../Containers/Dashboard';
import { navigationRef } from './RootNavigation';
import { getAsyncData, islogin, TOKEN } from '../Utils';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../../App';
import styles from './styles';
import { Colors } from '../Utils/colors';
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Dashboard: undefined;
};
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type DashboardProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  const [checking, setIsChecking] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const loggedIn = async () => {
      const token = await getAsyncData(TOKEN);

      if (token !== null && token !== undefined) {
        setIsLoggedIn(true);
      }

      setIsChecking(false);
    };
    loggedIn();
  }, []);

  if (checking) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.blue} />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'Dashboard' : 'Home'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
