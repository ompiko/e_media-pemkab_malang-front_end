import React from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';
import Shell from '../components/Shell';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

class Penomoran extends React.Component {
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
        <div className="row">
          <div className="col-md-12">
            <div className="pull-right">
              <div className="input-group mb-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ketik Nama"
                  aria-label="Ketik Nama"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary waves-effect waves-light" type="button">
                    <i className="fa fa-book" /> &nbsp;Tampilkan
                  </button>

                  <button className="btn btn-primary waves-effect waves-light" type="button">
                    <i className="fa fa-book" />&nbsp;Semua
                  </button>
                </div>
              </div>
            </div>
            <h1>Penomoran Otomatis</h1>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="pull-right">
                  <Button
                    type="button"
                    className="btn btn-blue btn-gradient waves-effect waves-light"
                    onClick={this.showModal}
                  >
                    <span className="gradient">
                      <i className="fa fa-plus" />&nbsp;Tambah Nomor
                    </span>
                  </Button>
                  <Modal
                    title="Tambah Nomor"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form">
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <label htmlFor="tanggal">Unit Kerja</label>
                                <div className="input-group mb-3">
                                  <select className="custom-select" id="inputGroupSelect02">
                                    <div className="input-group-append" />
                                    <option selected="">Pilih Unit Kerja</option>
                                    <option value="1">Demo</option>
                                    <option value="2">Demo</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="tanggal">Nomor Surat</label>
                                  <input type="text" className="form-control" placeholder="Masukkan Nomor Awal" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="tanggal">Variable 1</label>
                                  <input type="text" className="form-control" placeholder="Masukkan Variable 1" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="tanggal">Variable 2</label>
                                  <input type="text" className="form-control" placeholder="Masukkan Variable 2" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="tanggal">Variable 3</label>
                                  <input type="text" className="form-control" placeholder="Masukkan Variable 3" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="tanggal">Variable 4</label>
                                  <input type="text" className="form-control" placeholder="Masukkan Variable 4" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="tanggal">Variable 5</label>
                                  <input type="text" className="form-control" placeholder="Masukkan Variable 5" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="tanggal">Bulan</label>
                                  <input type="text" className="form-control" placeholder="Masukkan Bulan" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="tanggal">Tahun</label>
                                  <input type="text" className="form-control" placeholder="Masukkan Tahun" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <label htmlFor="tanggal">Jenis Nomor</label>
                                <div className="input-group mb-3">
                                  <select className="custom-select" id="inputGroupSelect02">
                                    <div className="input-group-append" />
                                    <option selected="">Pilih Jenis Nomor</option>
                                    <option value="1">Demo</option>
                                    <option value="2">Demo</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th style={{ verticalAlign: 'middle' }}>No.</th>
                      <th style={{ verticalAlign: 'middle' }}>Nomor Surat</th>
                      <th style={{ verticalAlign: 'middle' }}>v1.v2.v3.v4.v5</th>
                      <th style={{ verticalAlign: 'middle' }}>Tahun</th>
                      <th style={{ verticalAlign: 'middle' }}>Jenis</th>
                      <th style={{ verticalAlign: 'middle' }}>Unit Kerja</th>
                      <th style={{ verticalAlign: 'middle' }}>Instansi</th>
                      <th style={{ verticalAlign: 'middle' }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </table>
                <Link to="#" className="btn btn-blue btn-gradient waves-effect waves-light">
                  <span className="gradient">
                    <i className="fa fa-database" /> Export Data
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
export default connect(_state, _actions)(Penomoran);
