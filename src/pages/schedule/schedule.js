import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Shell from '../../components/Shell';

const styles = {
  fadeIn: {
    animation: 'x 0.5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

class schedule extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row">
          <div className="col-sm-12 col-md-4 mb-4 offset-md-2">
            <div className="card card-md bg-secondary bg-gradient text-center" style={styles.fadeIn}>
              <div className="card-body">
                <i className="batch-icon batch-icon-in batch-icon-xxl" />
                <div className="display-4 mt-4">Agenda Masuk</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/schedule/schedule-in" className="btn btn-primary btn-gradient waves-effect waves-light">
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
                <i className="batch-icon batch-icon-out batch-icon-xxl" />
                <div className="display-4 mt-4">Agenda Keluar</div>
                <p>of 4,000 Target Downloads</p>
                <p>Congratulations! You surpassed your target goal.</p>
                <Link to="/schedule/schedule-out" className="btn btn-primary btn-gradient waves-effect waves-light">
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

export default connect(_state, _actions)(schedule);
