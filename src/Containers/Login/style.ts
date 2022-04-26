import { StyleSheet } from 'react-native';
import { Colors } from '../../Utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  backGround: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  input: {
    width: '100%',
    color: Colors.black,
  },
  button: {
    width: 260,
    borderRadius: 10,
  },
  labelText: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    marginRight: 140,
  },
});

export default style;
