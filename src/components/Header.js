import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Input, message } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import gambar from '../assets/profile-pic.jpg';
import {logout} from '../modules/login';
import {HOST} from '../config';

const Header = props => (
<nav className="navbar navbar-expand-lg navbar-light bg-white">
  <a className="navbar-brand d-block d-sm-block d-md-block d-lg-none" href="#">
    {/* <img src="assets/img/logo-dark.png" width="145" height="32.3" alt="QuillPro"> */}
  </a>
  <button
    className="hamburger hamburger--slider"
    type="button"
    data-target=".sidebar"
    aria-controls="sidebar"
    aria-expanded="false"
    aria-label="Toggle Sidebar"
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"/>
    </span>
  </button>
  {/* <ul className="navbar-nav ml-auto mobile-only-control d-block d-sm-block d-md-block d-lg-none">
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbar-notification-search-mobile"
        data-toggle="dropdown"
        data-flip="false"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="batch-icon batch-icon-search"/>
      </a>
      <ul className="dropdown-menu dropdown-menu-fullscreen"
        aria-labelledby="navbar-notification-search-mobile">
        <li>
          <form className="form-inline my-2 my-lg-0 no-waves-effect">
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                  aria-label="Search for..."
                  aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                  <button className="btn btn-primary btn-gradient waves-effect waves-light"
                          type="button">
                      <i className="batch-icon batch-icon-search"/>
                  </button>
              </div>
            </div>
          </form>
        </li>
      </ul>
    </li>
  </ul> */}
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav navbar-language-translation mr-auto"/>
    <ul className="navbar-nav navbar-notifications float-right">
        {/* <form class="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}

        {/* <li className="nav-item dropdown" style={{position: 'static'}}>
        <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbar-notification-search" data-toggle="dropdown" data-flip="false" aria-haspopup="true" aria-expanded="false">
          <i className="batch-icon batch-icon-search"></i>
        </a>
          <ul className="dropdown-menu dropdown-menu-fullscreen" aria-labelledby="navbar-notification-search" style={{width: '100%'}}>
            <li>
              <form className="form-inline my-2 my-lg-0 no-waves-effect">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary btn-gradient waves-effect waves-light" type="button"><span className="gradient">Search</span></button>
                  </div>
                </div>
              </form>
            </li>
          </ul>
        </li> */}

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle no-waves-effect" id="navbar-notification-calendar"
              data-toggle="dropdown" data-flip="false" aria-haspopup="true" aria-expanded="false">
              <i className="batch-icon batch-icon-calendar"></i>
              <span className="notification-number">2</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-right dropdown-menu-md"
            aria-labelledby="navbar-notification-calendar">
            <li className="media">
              <a href="task-list.html" className=" waves-effect waves-light">
                <i className="batch-icon batch-icon-calendar batch-icon-xl d-flex mr-3"/>
                <div className="media-body">
                    <h6 className="mt-0 mb-1 notification-heading">Meeting with Project Manager</h6>
                    <div className="notification-text">
                        Cras sit amet nibh libero
                    </div>
                    <span className="notification-time">Right now</span>
                </div>
              </a>
            </li>
            <li className="media">
                <a href="task-list.html" className=" waves-effect waves-light">
                    <i className="batch-icon batch-icon-calendar batch-icon-xl d-flex mr-3"/>
                    <div className="media-body">
                        <h6 className="mt-0 mb-1 notification-heading">Sales Call</h6>
                        <div className="notification-text">
                            Nibh amet cras sit libero
                        </div>
                        <span className="notification-time">One hour from now</span>
                    </div>
                </a>
            </li>
          </ul>
        </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle no-waves-effect"
          id="navbar-notification-misc"
          data-toggle="dropdown"
          data-flip="false"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="batch-icon batch-icon-bell"/>
          <span className="notification-number">4</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-right dropdown-menu-md"
            aria-labelledby="navbar-notification-misc">
          <li className="media">
              <a href="task-list.html">
                  <i className="batch-icon batch-icon-bell batch-icon-xl d-flex mr-3"/>
                  <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">General Notification</h6>
                      <div className="notification-text">Cras sit amet nibh libero</div>
                      <span className="notification-time">Just now</span>
                  </div>
              </a>
          </li>
          <li className="media">
              <a href="task-list.html">
                  <i className="batch-icon batch-icon-cloud-download batch-icon-xl d-flex mr-3"/>
                  <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">Your Download Is Ready</h6>
                      <div className="notification-text">Nibh amet cras sit libero</div>
                      <span className="notification-time">5 minutes ago</span>
                  </div>
              </a>
          </li>
          <li className="media">
              <a href="task-list.html">
                  <i className="batch-icon batch-icon-tag-alt-2 batch-icon-xl d-flex mr-3"/>
                  <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">New Order</h6>
                      <div className="notification-text">Cras sit amet nibh libero</div>
                      <span className="notification-time">Yesterday</span>
                  </div>
              </a>
          </li>
          <li className="media">
              <a href="task-list.html">
                  <i className="batch-icon batch-icon-pull batch-icon-xl d-flex mr-3"/>
                  <div className="media-body">
                      <h6 className="mt-0 mb-1 notification-heading">Pull Request</h6>
                      <div className="notification-text">Cras sit amet nibh libero</div>
                      <span className="notification-time">3 day ago</span>
                  </div>
              </a>
          </li>
        </ul>
      </li>
    </ul>
    <ul className="navbar-nav ml-5 navbar-profile">
      <li className="nav-item dropdown">
        <a
            className="nav-link dropdown-toggle"
            id="navbar-dropdown-navbar-profile"
            data-toggle="dropdown"
            data-flip="false"
            aria-haspopup="true"
            aria-expanded="false"
        >
            <div className="profile-name">
              USER HUMAN
            </div>
            {/* <div className="profile-name">USER</div> */}
            <div className="profile-picture bg-gradient bg-primary has-message float-right">
                {/* <Avatar width="55" height="55">USER</Avatar> */}
                <img src={gambar} width="44" height="44" alt="Gambar"/>
            </div>
        </a>
        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-dropdown-navbar-profile">
          <li>
            <Link to="/profile" className="nav-link">            
              <span>Profile</span>
            </Link>
          </li>
          <li>
              <a className="dropdown-item" href="mail-inbox.html">
                  Messages
                  <span className="badge badge-danger badge-pill float-right">3</span>
              </a>
          </li>
          <li>
              <a className="dropdown-item" href="profiles-member-profile.html">
                  Settings
              </a>
          </li>
          <li>
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
              <span>Keluar</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
);

Header.propTypes = {
    logout: PropTypes.func,
    push: PropTypes.func,
    state: PropTypes.object,
  };
  Header.defaultProps = {
    state: {},
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

export default connect(_state, _action)(Header);
