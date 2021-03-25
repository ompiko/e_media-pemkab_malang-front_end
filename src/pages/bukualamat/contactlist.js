import React from 'react';
import { Modal, Upload, Button } from 'antd';
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

class contactlist extends React.Component {
  componentWillMount() {}
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <Shell>
        <div className="row" style={styles.fadeIn}>
          <div className="col-md-12">
            <h1>Daftar Kontak</h1>
          </div>
        </div>
        
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row" style={styles.fadeIn}>
                  <Button
                    type="button"
                    className="btn btn-primary btn-gradient waves-effect waves-light"
                    onClick={this.showModal}
                  >
                    <span className="gradient">
                      <i className="fa fa-user-plus" aria-hidden="true" /> &nbsp;Buat Kontak Baru
                    </span>
                  </Button>
                  <Modal title="Agenda Baru" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form">
                          <div className="form-group">
                            <label htmlFor="title">Masukkan nama pengguna SIMAYA yang hendak ditambahkan:</label>
                            <input type="text" className="form-control" placeholder="Masukkan Nama Pengguna SIMAYA" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="title">Tambahkan Pesan</label>
                            <textarea name="text" id="" cols="30" rows="10" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>

                  <div className="col-md-12">
                    <div className="alert alert-info">Tidak ada data.</div>
                  </div>

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

export default connect(_state, _actions)(contactlist);
