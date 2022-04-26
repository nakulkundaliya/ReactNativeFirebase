import { StyleSheet } from 'react-native';
import { Colors } from '../../Utils/colors';

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    width: '100%',
    flex: 1,
  },
  sectionstyle: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.blue,
    marginBottom: 20,
  },
});
export default styles;
