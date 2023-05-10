
export const SIGN_UP = 'SIGN_UP';

// Action interface
export interface SignUpAction {
  type: typeof SIGN_UP;
  payload: FormData;
}
interface ComponentState {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    image: string;
    mobile: string;
  }
  

// Action creator
export const signUp = (formData: FormData): SignUpAction => {
  return {
    type: SIGN_UP,
    payload: formData,
  };
};
