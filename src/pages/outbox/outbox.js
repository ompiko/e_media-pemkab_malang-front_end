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

class outbox extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row">
          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-outbox batch-icon-xxl" />
                <div className="display-4 mt-4">Surat Keluar</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/outbox/suratKeluar" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Surat Keluar</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-clipboard batch-icon-xxl" />
                <div className="display-4 mt-4">Konsep</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/outbox/konsep" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Konsep</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-bin batch-icon-xxl" />
                <div className="display-4 mt-4">Batal</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/outbox/batal" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Batal</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-4 offset-md-2">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-mail-outgoing batch-icon-xxl" />
                <div className="display-4 mt-4">Buat Surat</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/outbox/buatsurat" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Buat Sekarang</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-outgoing batch-icon-xxl" />
                <div className="display-4 mt-4">Disposisi Keluar</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/outbox/disposisikeluar" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Disposisi Keluar</span>
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

export default connect(_state, _actions)(outbox);
