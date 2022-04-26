import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN = '@token';
export const FULLNAME = '@fullname';
export const AGE = '@age';

export const islogin = async () => {
  const token = await getAsyncData(TOKEN);

  if (token) {
    return true;
  } else {
    return false;
  }
};

export const setAsyncData = async (
  key: string,
  value: string | number | undefined
) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('Error saving data' + e);
  }
};

export const getAsyncData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('Error reading data' + e);
    return null;
  }
};
