import { message, notification } from 'antd';

import { table, detail, deleteSingle, store, update } from '../providers/golongan';

export const SET_FORM = '@form/golongan/SET';
export const SET_FORM_EDIT = '@edit/golongan/SET_FORM_EDIT';

export const FORM_SUCCESS = '@form/golongan/SUCCESS';
export const FORM_LOADING = '@form/golongan/LOAD';
export const FORM_ERROR = '@form/golongan/ERROR';

export const FORM_RESET = '@form/golongan/RESET';

export const TABLE_GET = '@table/golongan/GET';
export const TABLE_LOAD = '@table/golongan/LOAD';

export const DELETE = '@provider/golongan/DELETE';

export const DELETE_SUCCESS = '@provider/golongan/DELETE_SUCCESS';
export const DELETE_ERROR = '@provider/golongan/DELETE_ERROR';

export const DETAIL = '@provider/golongan/DETAIL';

const initialState = {
  table: {
    data: [],
    total: 0,
    loading: false,
    filter: {},
  },
  form: {
    nama: '',
    kode: '',
    pangkat: '',
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

export const tableGolongan = (page = 1, limit = 10, sort = 'asc', search = '') => dispatch => {
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

export const detailGolongan = id => dispatch => {
  detail(id).then(result => {
    dispatch({ type: DETAIL, payload: result.data });
  });
};

export const deleteGolongan = (id, props) => dispatch => {
  dispatch({ type: DELETE });
  const load = message.loading('Mohon Tungggu...', 0);
  deleteSingle(id)
    .then(result => {
      message.destroy();

      if (result && !result.error) {
        message.success('Berhasil Menghapus Data');
        dispatch({ type: DELETE_SUCCESS });
        props.tableGolongan();
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

export const updateGolongan = (id, form, reloadForm, closeMe) => dispatch => {
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

export const saveGolongan = form => dispatch => {
  dispatch({ type: FORM_LOADING });
  const { nama, kode, pangkat } = form;

  if (!nama || nama.length <= 0) {
    return dispatch({ type: FORM_ERROR, payload: 'Nama Belum diisi' });
  } else if (!kode || kode.length <= 0) {
    return dispatch({ type: FORM_ERROR, payload: 'Kode Belum diisi' });
  } else if (!pangkat || pangkat.length <= 0) {
    return dispatch({ type: FORM_ERROR, payload: 'Pangkat Belum diisi' });
  }

  store(form).then(result => {
    if (result.success) {
      message.success('Berhasil Menyimpan Golongan');
      dispatch({ type: FORM_SUCCESS });
      setTimeout(() => {
        dispatch({ type: FORM_RESET });
      }, 500);
    } else {
      dispatch({ type: FORM_ERROR, payload: result.error ? result.error : 'Terjadi Kesalahan Saat Menyimpan Data' });
    }
  });
};
