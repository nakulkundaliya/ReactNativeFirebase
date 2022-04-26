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
    paddingVertical: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 5,
    padding: 5,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  formView: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.gray,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 8,
    marginBottom: 100,
  },
  labelText: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2,
  },
  textValue: {
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 10,
    width: '25%',
    letterSpacing: 2,
  },
  button: {
    borderRadius: 15,
    width: '50%',
  },
});

export default style;
