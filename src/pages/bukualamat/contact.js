import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Shell from '../../components/Shell';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

class contact extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row">
          <div className="col-sm-12 col-md-4 mb-4" style={styles.fadeIn}>
            <div className="card card-md bg-secondary bg-gradient text-center">
              <div className="card-body">
                <i className="batch-icon batch-icon-list batch-icon-xxl" />
                <div className="display-4 mt-4">Daftar Kontak</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/contact/contactlist" className="btn btn-primary btn-gradient waves-effect waves-light">
                  <span className="gradient">
                    <i className="fa fa-chevron-circle-right" aria-hidden="true" /> &nbsp;Klik Disini
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-clipboard batch-icon-xxl" />
                <div className="display-4 mt-4">Daftar Tunggu</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/contact/contactwaiting" className="btn btn-primary btn-gradient waves-effect waves-light">
                  <span className="gradient">
                    <i className="fa fa-chevron-circle-right" aria-hidden="true" /> &nbsp;Klik Disini
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-list-alt batch-icon-xxl" />
                <div className="display-4 mt-4">Daftar Periksa</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link
                  to="/contact/contact-to-be-approved"
                  className="btn btn-primary btn-gradient waves-effect waves-light"
                >
                  <span className="gradient">
                    <i className="fa fa-chevron-circle-right" aria-hidden="true" /> &nbsp;Klik Disini
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    );
  }
}

const _state = state => ({});
const _actions = dispatch => bindActionCreators({}, dispatch);

export default connect(_state, _actions)(contact);
