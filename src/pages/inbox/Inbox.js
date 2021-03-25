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

class inbox extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row">
          <div className="col-sm-12 col-md-4 mb-4 offset-md-2">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-inbox batch-icon-xxl" />
                <div className="display-4 mt-4">Surat Masuk</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/inbox/suratmasuk" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Surat Masuk</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-inbox-alt batch-icon-xxl" />
                <div className="display-4 mt-4">Disposisi Masuk</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/inbox/disposisimasuk" className="btn btn-warning btn-gradient waves-effect waves-light">
                  <span className="gradient">Disposisi Masuk</span>
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

export default connect(_state, _actions)(inbox);
