
import { SIGN_UP , SignUpAction } from '../actions/signupAction';


interface SignUpState {
  formData: FormData;
}

const initialState: SignUpState = {
  formData: {} as any,
};

export const signUpReducer = (state = initialState, action: SignUpAction): SignUpState => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        formData: action.payload,
      };
    default:
      return state;
  }
};

export default signUpReducer;
