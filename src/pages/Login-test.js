import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import { tryLogin, errorMessage, setForm } from '../modules/login';
import logo from '../../src/assets/simaya.png';
import kota from '../../src/assets/kab-pati2.png';
import logoPemkab from '../../src/assets/pemkabMalang.svg';
import logo_e_media from '../../src/assets/e-media.png';

class loginTest extends React.Component {
  static propTypes = {
    state: PropTypes.object,
    errorMessage: PropTypes.func,
    tryLogin: PropTypes.func,
    setForm: PropTypes.func,
    push: PropTypes.func,
  };

  static defaultProps = {
    state: {},
    errorMessage: false,
    tryLogin: false,
    setForm: false,
    push: false,
  };
  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this);
    // this.state = {
    //   loading: false,
    // };
  }

  componentWillMount() {
    if (this.props.state.login.login) {
      this.props.push(`${process.env.PUBLIC_URL}`);
    }
  }

  validateForm(e) {
    e.preventDefault();
    const { username, password } = this.props.state.login.form;
    if (username.length <= 0) {
      this.props.errorMessage('Username wajib diisi!');
    } else if (password.length <= 0) {
      this.props.errorMessage('Password wajib diisi!');
    } else {
      this.props.tryLogin(this.props);
    }
  }

  render() {
    const { state } = this.props;
    // console.log(this.props.state);
    const { loading } = state.login;
    const icon = <i className="fa fa-circle-o-notch fa-spin" />;

    const handleInputChange = event => {
      const { target } = event;
      const { value, name } = target;

      this.props.setForm(name, value);
    };
    return (
     <div className="background-login ">
      <div className="right-column_sisu">
        <div className="row mx-0" style={{ minHeight: '100%', height: '100vh' }}>
          <div
            className="col-md-7 order-md-1 signin-right-column "
            style={{ paddingTop: '15%' }}
          >
            <div>
              <div className="display-4">
                <img src={logo_e_media} alt="" width="340px" height="100px" />
              </div>
              <p className="lead mb-5" style={{ paddingTop: '2%', color: 'white' }}>
                Aplikasi E-Media Pers adalah aplikasi administrasi perkantoran bebasis awan/cloud. Dengan aplikasi ini proses
                manajemen persuratan yang biasanya dilakukan secara manual dapat dilakukan secara otomatis, sehingga
                memudahkan dalam proses administrasinya, pencarian dan pengarsipan.
              </p>
            </div>
          </div>
          <div
            className="col-md-5 order-md-2 signin-left-column bg-white px-5"
            style={{
              paddingTop: '5%',
            }}
          >
            <form onSubmit={this.validateForm}>
              <div className="display-4 text-center">
                <img src={logoPemkab} alt="" width="110px" height="110px" style={{ marginBottom: '5px' }} />
                <br />
                <h4>
                  Pemerintah
                  <br /> Kabupaten Malang
                </h4>
              </div>
              {state.login.error ? (
                <div className="alert alert-danger">
                  <h4>
                    <i className="icon fa fa-ban" /> Error!
                  </h4>
                  {state.login.error}
                </div>
              ) : (
                ''
              )}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="active">
                  Username
                </label>
                <input
                  type="Text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Masukkan Username anda"
                  name="username"
                  onChange={handleInputChange}
                />

                <label htmlFor="exampleInputPassword1" className="active">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Masukkan Password anda"
                  name="password"
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-gradient btn-block waves-effect waves-light"
                disabled={loading}
                
              >
                <span className="gradient">{loading ? icon : 'LOGIN'}</span>
              </button>
              <hr />
              <p className="text-center">
                Lupa Password? <a href="forgot-password">Klik disini</a>
              </p>
            </form>
            <p className="text-center">
              <footer className="page-copyright" style={{marginTop:'19%'}}>
                <p>APPLICATION BY <b>Informatic Muhammadiyah Malang University</b></p>
                <p>© 2021. All RIGHT RESERVED.</p>
              </footer>
            </p>
          </div>
        </div>
      </div>
    </div>   
    );
  }
}

const _state = state => ({
  state: {
    login: state.login,
  },
});
const _actions = dispatch =>
  bindActionCreators(
    {
      loginSuccess: () => push(`${process.env.PUBLIC_URL}/dashboard`),
      tryLogin,
      errorMessage,
      setForm,
      push,
    },
    dispatch
  );

export default connect(_state, _actions)(loginTest);
