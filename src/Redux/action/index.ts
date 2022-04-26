import { Dispatch } from 'redux';
import * as Type from '../types';
import firestore from '@react-native-firebase/firestore';
import * as RootNavigation from '../../Navigators/RootNavigation';
import { showToast } from '../../Utils/showError';
import { Colors } from '../../Utils/colors';

interface LoginActionPayload {
  name: string;
  age: number | null | undefined;
}

export const AddUserDetails = (payload: LoginActionPayload) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: Type.ADD_USER_DETAILS_BEGIN });

    firestore()
      .collection('user')
      .add({ fullname: payload.name, age: payload.age })
      .then((res) => {
        showToast('User added successfully', Colors.green);
        console.log('res', res);
        dispatch({
          type: Type.ADD_USER_DETAILS_SUCCESS,
          payload: { name: payload.name, age: payload.age },
        });
        return RootNavigation.navigate('Dashboard');
      })
      .catch(() => {
        return dispatch({ type: Type.ADD_USER_DETAILS_FAILURE });
      });
  };
};
