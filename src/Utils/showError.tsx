import Snackbar from 'react-native-snackbar';
import { Colors } from './colors';

export const showToast = (title = '', color = Colors.red) => {
  Snackbar.show({
    text: title,
    backgroundColor: color,
    duration: 4000,
  });
};
