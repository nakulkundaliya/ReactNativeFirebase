import { StyleSheet } from 'react-native';
import { Colors } from '../../Utils/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
  },

  contained: {
    backgroundColor: Colors.blue,
    borderColor: 'transparent',
  },

  outlined: {
    backgroundColor: Colors.white,
    borderColor: Colors.blue,
  },
  containedText: {
    color: Colors.white,
  },

  outlinedText: {
    color: Colors.blue,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  icon: {
    height: 24,
    width: 24,
    marginRight: 20,
  },
});
export default styles;
