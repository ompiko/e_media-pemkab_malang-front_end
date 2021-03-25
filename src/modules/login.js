import axios from 'axios';
import { message, notification } from 'antd';
import { login } from '../providers/user';

export const TRY_LOGIN = '@root/TRY_LOGIN';
export const SUCCESS_LOGIN = '@root/SUCCESS_LOGIN';
export const FAIL_LOGIN = '@root/FAIL_LOGIN';
export const LOGOUT = '@root/LOGOUT';
export const SET_FORM = '@login/SET_FORM';
export const ALREADY_LOGIN = '@login/ALREADY';
export const SET_LEVEL = '@login/SET_LEVEL';

const initialState = {
  login: false,
  loading: false,
  error: null,
  username: null,
  level: null,
  form: {
    username: '',
    password: '',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TRY_LOGIN:
      return {
        ...state,
        login: false,
        loading: true,
        error: null,
        username: action.payload.username,
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        loading: false,
        login: true,
        error: null,
      };
    case FAIL_LOGIN:
      return {
        ...state,
        loading: false,
        login: false,
        error: action.payload,
      };
    case SET_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value,
        },
      };
    case ALREADY_LOGIN:
      return {
        ...state,
        login: true,
        username: action.payload.username,
      };
    case LOGOUT:
      return {
        ...initialState,
        login: false,
      };
    default:
      return state;
  }
}

export const alreadyLogged = () => dispatch => {
  const token = sessionStorage.getItem('bearerToken');
  const split = token.split('.');
  const parse = btoa(split[1]);

  dispatch({ type: ALREADY_LOGIN, payload: {} });
};

export const tryLogin = props => dispatch => {
  const { form } = props.state.login;
  dispatch({
    type: TRY_LOGIN,
    payload: {
      username: form.username,
    },
  });

  login(form.username, form.password)
    .then(result => {
      // setTimeout(() => {
        if(result.success) {
          dispatch({
            type: SUCCESS_LOGIN,
          });

          sessionStorage.setItem('bearerToken', result.data.token);

          axios.defaults.headers = {
            Authorization: `Bearer ${sessionStorage.getItem('bearerToken')}`,
          };

          message.success('Berhasil Masuk');
          props.loginSuccess();
        } else {
          dispatch({ type: FAIL_LOGIN, payload: result.message });          
          message.error('Gagal');
        }
      // }, 1000);
    })
    .catch(error => {
      if (error && error.data && error.data.error) {
        dispatch({ type: FAIL_LOGIN, payload: error.data.message });
        notification.error({
          message: 'Kesalahan!',
          description: error.data.error,
        });
      } else {
        const msg = 'Terjadi Kesalahan Internal pada Server.';
        dispatch({ type: FAIL_LOGIN, payload:  msg});
        notification.error({
          message: 'Kesalahan!',
          description: msg,
        });
      }
    });
};

export const setForm = (name, value) => dispatch => {
  dispatch({
    type: SET_FORM,
    payload: {
      name,
      value,
    },
  });
};

export const errorMessage = msg => dispatch => {
  dispatch({
    type: FAIL_LOGIN,
    payload: msg,
  });
  message.error('Terjadi Kesalahan');
};

export const logout = () => dispatch => {
  sessionStorage.removeItem('bearerToken');
  dispatch({
    type: LOGOUT,
  });
};
