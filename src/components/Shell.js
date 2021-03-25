import React from 'react';
import PropTypes from 'prop-types';

import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { Scrollbars } from 'react-custom-scrollbars';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Header from './Header';

const styles = {
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const admin = children => (
  <StyleRoot>
    <div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="right-column">
            <Header />
            <main className="main-content p-5" role="main">
              {/* {this.props.children} */}
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  </StyleRoot>
);

class Shell extends React.Component {
  static propTypes = {
    state: PropTypes.object,
    children: PropTypes.any,
    push: PropTypes.func,
  };

  static defaultProps = {
    state: {},
    children: '',
    push: false,
    type: null,
  };

  // static defaultProps = {
  //   children: '',
  // };

  constructor(props) {
    super(props);
    this.state = {
      // loginStatus: false,
    };
  }

  componentDidMount() {
    // const { state } = this.props;
    // if (!state.login.login) this.props.push(`${process.env.PUBLIC_URL}/login`);
  }

  render() {
    const { state } = this.props;
    console.log(state) 

    // if (this.props.type === 'admin') {
    //   $('body').removeClass('login-page');
    //   $('body').addClass('skin-blue sidebar-mini');
    //   if (!state.login.login) {
    //     this.props.push(`${process.env.PUBLIC_URL}/login`);
    //   }
    //   return Admin(this.props.children);
    // }

    // $('body').removeClass('skin-blue sidebar-mini');
    // $('body').addClass('login-page');
    // if (state.login.login && !this.state.isRedirect) {
    //   this.setState({ isRedirect: true });
    //   this.props.push(`${process.env.PUBLIC_URL}/`);
    // }
    // if (!state.login.login) {
    //   this.props.push(`${process.env.PUBLIC_URL}/login`);
    // }

    // if (state.login.login) {
    //   this.props.push(`${process.env.PUBLIC_URL}/`);
    // }

    return admin(this.props.children);
  }
}

const _state = state => ({
  state: {
    login: state.login,
  },
});
const _action = dispatch =>
  bindActionCreators(
    {
      push,
    },
    dispatch
  );

export default connect(_state, _action)(Shell);
