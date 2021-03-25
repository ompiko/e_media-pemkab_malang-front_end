import React from 'react';
import moment from 'moment';
import { Calendar, Modal, Button, DatePicker, TimePicker, Upload, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { Link } from 'react-router-dom';

import Shell from '../components/Shell';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

const format = 'HH:mm';
const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

class calendar extends React.Component {
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
            <h1>Kalender</h1>
            <Breadcrumb style={{ marginTop: '-25px' }}>
              <Breadcrumb.Item><Link to={`${process.env.PUBLIC_URL}/dashboard`}>Dashboard</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Kalender</Breadcrumb.Item>
            </Breadcrumb>
            <div className="pull-right">
              <Button
                type="button"
                className="btn btn-primary btn-gradient waves-effect waves-light"
                onClick={this.showModal}
              >
                <span className="gradient">Buat Agenda Baru</span>
              </Button>
              <Modal title="Agenda Baru" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form">
                      <div className="form-group">
                        <label htmlFor="tanggal">Judul Agenda</label>
                        <input type="text" className="form-control" placeholder="Masukkan Judul Agenda" />
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="tanggal">Mulai</label>
                            <DatePicker className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="tanggal">Pilih Jam</label>
                            <TimePicker
                              defaultValue={moment('12:00', format)}
                              format={format}
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="tanggal">Berakhir</label>
                            <DatePicker className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="tanggal">Pilih Jam</label>
                            <TimePicker
                              defaultValue={moment('12:00', format)}
                              format={format}
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="tanggal">Status</label>
                            <div className="input-group mb-3">
                              <select className="custom-select" id="inputGroupSelect02">
                                <div className="input-group-append" />
                                <option selected="">Pilih Status</option>
                                <option value="1">Diluar Kantor</option>
                                <option value="2">Sibuk</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="tanggal">Publikasi</label>
                            <div className="input-group mb-3">
                              <select className="custom-select" id="inputGroupSelect02">
                                <div className="input-group-append" />
                                <option selected="">Pilih Publikasi</option>
                                <option value="1">Pribadi</option>
                                <option value="2">Publik</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="tanggal">Pengulang</label>
                            <div className="input-group mb-3">
                              <select className="custom-select" id="inputGroupSelect02">
                                <div className="input-group-append" />
                                <option selected="">Pilih Pengulangan</option>
                                <option value="1">1 Kali Saja</option>
                                <option value="2">Harian</option>
                                <option value="3">Mingguan</option>
                                <option value="4">Bulanan</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="tanggal">Pengingat</label>
                            <div className="input-group mb-3">
                              <select className="custom-select" id="inputGroupSelect02">
                                <div className="input-group-append" />
                                <option selected="">Pilih Pengingat</option>
                                <option value="1">Tidak Perlu</option>
                                <option value="2">5 Menit</option>
                                <option value="3">15 Menit</option>
                                <option value="4">30 Menit</option>
                                <option value="5">1 Jam</option>
                                <option value="6">1 Hari Sebelumnya</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea name="post" id="keterangan" cols="30" rows="10" placeholder="Masukkan Keterangan" />
                      </div>
                      <div className="form-group">
                        <Upload name="logo" action="/upload.do" listType="picture">
                          <button type="button" className="btn btn-green btn-gradient waves-effect waves-light">
                            <span className="gradient">
                              Lampirkan &nbsp;
                              <i className="fa fa-file-o" />
                            </span>
                          </button>
                        </Upload>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>

        <div className="row" style={styles.fadeIn}>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="calendar-container">
                  <div className="row">
                    <Calendar onPanelChange={onPanelChange} />
                  </div>
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

export default connect(_state, _actions)(calendar);
