import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

class Login extends React.Component {
  static propTypes = {
    push: PropTypes.func,
  };

  static defaultProps = {
    push: false,
  };

  componentWillMount() {}

  render() {
    return (
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-form-title" style={{ backgroundImage: 'url(images/bg-01.jpg)' }}>
            <span className="login100-form-title-1">Selamat Datang di SIMAYA</span>
          </div>

          <form
            className="login100-form validate-form"
            onSubmit={e => {
              e.preventDefault();
              this.props.push('/timeline');
            }}
          >
            <div className="wrap-input100 validate-input m-b-26" data-validate="Dibutuhkan NIP">
              <span className="label-input100">NIP</span>
              <input className="input100" type="text" name="NIP" placeholder="Masukkan NIP Anda" />
              <span className="focus-input100" />
            </div>

            <div className="wrap-input100 validate-input m-b-18" data-validate="Dibutuhkan Password">
              <span className="label-input100">Password</span>
              <input className="input100" type="password" name="pass" placeholder="Masukkan password" />
              <span className="focus-input100" />
            </div>

            <div className="flex-sb-m w-full p-b-30">
              <div className="contact100-form-checkbox">
                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Ingat Saya
                </label>
              </div>

              <div>
                <a href="#" className="txt1">
                  Lupa Password?
                </a>
              </div>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const _state = state => ({});
const _actions = dispatch =>
  bindActionCreators(
    {
      push,
    },
    dispatch
  );

export default connect(_state, _actions)(Login);
