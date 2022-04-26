import { StyleSheet } from 'react-native';
import { Colors } from '../../Utils/colors';

const styles = StyleSheet.create({
  headerView: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.gray,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
  },
  headerTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
  },
  leftButton: {
    left: 20,
  },
  leftIcon: {
    height: 25,
    width: 25,
    tintColor: Colors.black,
  },
});
export default styles;
