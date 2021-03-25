import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Modal, Button, Upload, Breadcrumb } from 'antd';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Shell from '../components/Shell';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};
class berkas extends React.Component {
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
            <h1>Berkas</h1>
            <Breadcrumb style={{ marginTop: '-25px' }}>
              <Breadcrumb.Item><Link to={`${process.env.PUBLIC_URL}/dashboard`}>Dashboard</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Berkas</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>

        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-12">
            <div className="card" style={styles.fadeIn}>
              <div className="card-body">
                <div className="pull-right">
                  <Button
                    type="button"
                    className="btn btn-primary btn-gradient waves-effect waves-light"
                    onClick={this.showModal}
                  >
                    <span className="gradient"><i className="fa fa-file" /> Berkas</span>
                  </Button>
                  <Modal title="Upload Berkas" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                  <div className="form-group">
                    <label htmlFor="nomor">Berkas Pemindaian</label>
                      <Upload name="logo" action="/upload.do" listType="picture">
                        <button
                          type="button"
                          className="btn btn-green btn-gradient waves-effect waves-light"
                          style={{ marginRight: 5 }}
                        >
                          <span className="gradient">
                            <i className="fa fa-upload" />&nbsp; Berkas
                          </span>
                        </button>
                      </Upload>
                  </div>
                  </Modal>
                  
                    &nbsp;
                  <Button type="button" className="btn btn-red btn-gradient waves-effect waves-light">
                    <span className="gradient">
                      <i className="fa fa-folder" /> Direktori
                    </span>
                  </Button>
                </div>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th style={{ verticalAlign: 'middle' }}>
                        Nama
                      </th>
                      <th style={{ verticalAlign: 'middle' }}>
                        Jenis
                      </th>
                      <th style={{ verticalAlign: 'middle' }}>
                        Perubahan
                      </th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    <tr>
                      <div className="col-md-12">
                        <div className="alert alert-info">Tidak ada data.</div>
                      </div>
                    </tr>
                  </tbody> */}
                </table>
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

export default connect(_state, _actions)(berkas);
