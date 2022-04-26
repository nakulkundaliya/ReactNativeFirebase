import * as Type from '../types';

const intialState = {
  name: '',
  age: '',
};

const LoginReducer = (state = intialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case Type.ADD_USER_DETAILS_SUCCESS:
      return {
        ...state,
        name: payload.name,
        age: payload.age,
      };
    case Type.ADD_USER_DETAILS_FAILURE:
      return {
        ...state,
        name: '',
        age: '',
      };

    default:
      return { ...state };
  }
};

export default LoginReducer;
