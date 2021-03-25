import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { message } from 'antd';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import logo from '../../src/assets/simaya.png';
import { logout } from '../modules/login';
import { HOST } from '../config';

const Sidebar = props => (
  <nav id="sidebar" className="px-0 bg-dark bg-gradient sidebar" style={{ minHeight: '100%', height: '100vh' }}>
    <ul className="nav nav-pills flex-column">
      <li className="logo-nav-item">
        <Link to="/dashboard">
          <a className="navbar-brand">
            <img src={logo} width="125px" height="35px" />
          </a>
        </Link>  
      </li>
      {/* <li>
        <h6 className="nav-header">General</h6>
      </li> */}

      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          <i className="fa fa-desktop" /> <span>Dashboard</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/inbox" className="nav-link">
          <i className="fa fa-envelope-o" /> <span>Surat Masuk</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/outbox" className="nav-link">
          <i className="fa fa-envelope" /> <span>Surat Keluar</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/plh" className="nav-link">
          <i className="fa fa-users" /> <span>PLH</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/schedule" className="nav-link">
          <i className="fa fa-list-alt" /> <span>Agenda</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/calendar" className="nav-link">
          <i className="fa fa-calendar" /> <span>Kalender</span>
        </Link>
      </li>

      <li className="nav-item">

        <Link to="/contact" className="nav-link">
          <i className="fa fa-users" /> <span>Buku Alamat</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/berkas" className="nav-link">
          <i className="fa fa-folder-o" /> <span>Berkas</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/pengguna" className="nav-link">
          <i className="fa fa-user" /> <span>Pengguna</span>
        </Link>
      </li>

      <li className="nav-item">
        <a
          onClick={() => {
            message.loading('Mohon Tunggu');
            setTimeout(() => {
              message.success('Berhasil Logout');
              props.logout();
              props.push(`${process.env.PUBLIC_URL}/login`);
            }, 1000);
          }}
        >
          <div className="nav-link">
            <i className="fa fa-sign-out" /> <span>Keluar</span>
          </div>
        </a>
      </li>
    </ul>
  </nav>
);

Sidebar.propTypes = {
  logout: PropTypes.func,
  push: PropTypes.func,
};
Sidebar.defaultProps = {
  logout: false,
  push: false,
};
const _state = state => ({});

const _action = dispatch =>
  bindActionCreators(
    {
      logout,
      push,
    },
    dispatch
  );

export default connect(_state, _action)(Sidebar);
