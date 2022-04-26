import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 50,
    marginBottom: 50,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
  },
  icon: {
    height: 24,
    width: 24,
    right: 10,
    marginHorizontal: 10,
  },
});

export default style;
