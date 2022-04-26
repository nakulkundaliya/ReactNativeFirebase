import React, { useEffect, createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import ApplicationNavigator from './src/Navigators/StackNavigation';
import { configureGoogle } from './src/Services/gooleServices';
import {
  requestUserPermission,
  notificationListner,
  notificationChannel,
} from './src/Services/notificationServices';
import PushNotification from 'react-native-push-notification';

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const DEFAULT_STATE = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

export const AuthContext = createContext<AuthContextType>(DEFAULT_STATE);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    PushNotification.localNotificationSchedule({
      message: 'Test Notification every day 2 pm',
      date: new Date(new Date().getTime() + 3000),
      repeatType: 'time',
      repeatTime: 3600000,
      channelId: '123',
    });
    notificationChannel();
  }, []);

  useEffect(() => {
    requestUserPermission();
    notificationListner();
  }, []);
  configureGoogle();
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Provider store={store}>
        <ApplicationNavigator />
      </Provider>
    </AuthContext.Provider>
  );
};

export default App;
