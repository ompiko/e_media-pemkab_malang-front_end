import { message, notification } from 'antd';

import { table, detail, deleteSingle, store, update } from '../providers/agama';

export const SET_FORM = '@form/agama/SET';
export const SET_FORM_EDIT = '@edit/agama/SET_FORM_EDIT';

export const FORM_SUCCESS = '@form/agama/SUCCESS';
export const FORM_LOADING = '@form/agama/LOAD';
export const FORM_ERROR = '@form/agama/ERROR';

export const FORM_RESET = '@form/agama/RESET';

export const TABLE_GET = '@table/agama/GET';
export const TABLE_LOAD = '@table/agama/LOAD';

export const DELETE = '@provider/agama/DELETE';

export const DELETE_SUCCESS = '@provider/agama/DELETE_SUCCESS';
export const DELETE_ERROR = '@provider/agama/DELETE_ERROR';

export const DETAIL = '@provider/agama/DETAIL';

const initialState = {
  table: {
    data: [],
    total: 0,
    loading: false,
    filter: {},
  },
  form: {
    nama: '',
  },
  delete: {
    loading: false,
    success: false,
    error: false,
  },
  detail: {},
  edit: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TABLE_GET:
      return {
        ...state,
        table: {
          ...state.table,
          data: action.payload.data,
          total: action.payload.total,
          loading: false,
        },
      };
    case TABLE_LOAD:
      return {
        ...state,
        table: {
          ...state.table,
          loading: true,
        },
      };
    case DELETE:
      return {
        ...state,
        form: {
          ...state.form,
          delete: {
            ...state.delete,
            loading: true,
          },
        },
      };
    case SET_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_FORM_EDIT:
      return {
        ...state,
        edit: {
          ...state.edit,
          [action.payload.name]: action.payload.value,
        },
      };
    case FORM_LOADING:
      return {
        ...state,
        form: {
          ...state.form,
          loading: true,
          error: null,
        },
      };
    case FORM_SUCCESS:
      return {
        ...state,
        form: {
          ...initialState.form,
          success: true,
          error: null,
        },
      };
    case FORM_RESET:
      return {
        ...state,
        form: initialState.form,
      };
    case FORM_ERROR:
      return {
        ...state,
        form: {
          ...state.form,
          error: action.payload,
        },
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        delete: {
          ...state.delete,
          loading: false,
          success: true,
          error: false,
        },
      };
    case DELETE_ERROR:
      return {
        ...state,
        delete: {
          ...state.delete,
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    case DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}

export const tableAgama = (page = 1, limit = 10, sort = 'asc', search = '') => dispatch => {
  table(page, limit, sort, search)
    .then(result => {
      dispatch({
        type: TABLE_GET,

        payload: {
          data: result.data,
          total: result.total,
        },
      });
    })
    .catch(error => {
      message.error('Terjadi Kesalahan');
      console.error(error);
    });
};

export const detailAgama = id => dispatch => {
  detail(id).then(result => {
    dispatch({ type: DETAIL, payload: result.data });
  });
};

export const deleteAgama = (id, props) => dispatch => {
  dispatch({ type: DELETE });
  const load = message.loading('Mohon Tungggu...', 0);
  deleteSingle(id)
    .then(result => {
      message.destroy();

      if (result && !result.error) {
        message.success('Berhasil Menghapus Data');
        dispatch({ type: DELETE_SUCCESS });
        props.tableAgama();
        return;
      }
      message.error('Terjadi Kesalahan');
      dispatch({ type: DELETE_ERROR, payload: result.error });
    })
    .catch(error => {
      message.error('Terjadi Kesalahan');
      console.error(error);
    });
};

export const updateAgama = (id, form, reloadForm, closeMe) => dispatch => {
  const load = message.loading('Mengirim Data...', 0);
  update(id, form)
    .then(result => {
      load();
      if (result && !result.error) {
        dispatch({ type: FORM_SUCCESS });
        reloadForm();
        message.success('Berhasil Memperbarui Data');
        closeMe();
        return;
      }
      dispatch({ type: FORM_ERROR, payload: result.error });
      message.error('Terjadi Kesalahan!');
    })
    .catch(err => {
      load();
      message.error('Terjadi Kesalahan');
      if (err && err.data && err.data.error) {
        dispatch({ type: FORM_ERROR, payload: err.data.error });
        notification.error({
          message: 'Kesalahan!',
          description: err.data.error,
        });
      }
    });
};

export const setForm = (name, value) => dispatch => {
  dispatch({
    type: SET_FORM,
    payload: { name, value },
  });
};

export const setFormEdit = (name, value) => dispatch => {
  dispatch({ type: SET_FORM_EDIT, payload: { name, value } });
};

export const saveAgama = form => dispatch => {
  dispatch({ type: FORM_LOADING });
  const { nama } = form;

  if (!nama || nama.length <= 0) {
    return dispatch({ type: FORM_ERROR, payload: 'Nama Belum diisi' });
  }
  store(form).then(result => {
    if (result.success) {
      message.success('Berhasil Menyimpan Agama');
      dispatch({ type: FORM_SUCCESS });
      setTimeout(() => {
        dispatch({ type: FORM_RESET });
      }, 500);
    } else {
      dispatch({ type: FORM_ERROR, payload: result.error ? result.error : 'Terjadi Kesalahan Saat Menyimpan Data' });
    }
  });
};
