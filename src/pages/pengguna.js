import React from 'react';
import { Modal, Button, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { Link } from 'react-router-dom';

import Shell from '../components/Shell';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const confirm = Modal.confirm;
function onPanelChange(value, mode) {
  console.log(value, mode);
}

function showDeleteConfirm() {
  confirm({
    title: 'Apakah anda yakin ingin menghapus user ini?',
    content: 'Some descriptions',
    okText: 'Iya',
    okType: 'danger',
    cancelText: 'Tidak',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

class pengguna extends React.Component {
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
        <div className="row" style={ styles.fadeIn }>
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
            <h1>Daftar Pengguna siMAYA</h1>
            <Breadcrumb style={{ marginTop: '-25px' }}>
              <Breadcrumb.Item><Link to={`${process.env.PUBLIC_URL}/dashboard`}>Dashboard</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Pengguna</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          <div className="col-md-12" style={ styles.fadeIn }>
            <div className="card">
              <div className="card-body">
                <div className="pull-right">
                  <Button
                    type="button"
                    className="btn btn-blue btn-gradient waves-effect waves-light"
                    onClick={this.showModal}
                  >
                    <span className="gradient">
                      <i className="fa fa-plus" />&nbsp;Tambah Pengguna
                    </span>
                  </Button>
                  <Modal
                    title="Tambah Pengguna"
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
                                <div className="form-group">
                                  <label htmlFor="username">Username</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ketik Username Baru Anda Disini"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="password">Password</label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Ketik Password Baru Anda Disini"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="password">Konfirmasi Password</label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Ketik Ulang Password Baru Anda"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="nama">Nama Lengkap</label>
                                  <input type="text" className="form-control" placeholder="Ketik Nama Anda Disini" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <label htmlFor="golongan">Golongan/Pangkat</label>
                                <div className="input-group mb-3">
                                  <select className="custom-select" id="inputGroupSelect02">
                                    <div className="input-group-append" />
                                    <option selected="">Pilih Gol/Pangkat</option>
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
                                  <label htmlFor="kode">NRP/NIP/Kode</label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Ketik NRP/NIP/Kode Disini"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <label htmlFor="jabatan">Jabatan</label>
                                <div className="input-group mb-3">
                                  <select className="custom-select" id="inputGroupSelect02">
                                    <div className="input-group-append" />
                                    <option selected="">Demo</option>
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
                                <label htmlFor="level">Level Pengguna</label>
                                <div className="input-group mb-3">
                                  <select className="custom-select" id="inputGroupSelect02">
                                    <div className="input-group-append" />
                                    <option selected="">Pilih Level</option>
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
                                <label htmlFor="tipe">Tipe Pengguna</label>
                                <div className="input-group mb-3">
                                  <select className="custom-select" id="inputGroupSelect02">
                                    <div className="input-group-append" />
                                    <option selected="">Pilih Tipe Pengguna</option>
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
                                <label htmlFor="arsip">Akses Arsip</label>
                                <div className="input-group mb-3">
                                  <select className="custom-select" id="inputGroupSelect02">
                                    <div className="input-group-append" />
                                    <option selected="">Pilih Hak Akses Arsip</option>
                                    <option value="1">Y</option>
                                    <option value="2">N</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <label htmlFor="admin-kepegawaian">Akses Admin Kepegawaian</label>
                                <div className="input-group mb-3">
                                  <select className="custom-select" id="inputGroupSelect02">
                                    <div className="input-group-append" />
                                    <option selected="">Pilih Hak Akses Admin Kepegawaian</option>
                                    <option value="1">Y</option>
                                    <option value="2">N</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <label htmlFor="admin-desa">Akses Admin Desa</label>
                                <div className="input-group mb-3">
                                  <select className="custom-select" id="inputGroupSelect02">
                                    <div className="input-group-append" />
                                    <option selected="">Pilih Hak Akses Desa</option>
                                    <option value="1">Y</option>
                                    <option value="2">N</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <label htmlFor="pemeriksa">Sebagai Pemeriksa Surat</label>
                                <div className="input-group mb-3">
                                  <select className="custom-select" id="inputGroupSelect02">
                                    <div className="input-group-append" />
                                    <option selected="">Pilih Hak Sebagai Pemeriksa Surat</option>
                                    <option value="1">Y</option>
                                    <option value="2">N</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="profil">Profil</label>
                                  <input type="text" className="form-control" placeholder="" />
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
                      <th style={{ verticalAlign: 'middle' }}>
                        Nama Lengkap <br />
                        Pangkat
                      </th>
                      <th style={{ verticalAlign: 'middle' }}>Username</th>
                      <th style={{ verticalAlign: 'middle' }}>Jabatan</th>
                      <th style={{ verticalAlign: 'middle' }}>Unit Kerja</th>
                      <th style={{ verticalAlign: 'middle' }}>Login Terakhir</th>
                      <th style={{ verticalAlign: 'middle' }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        User <br /> Bupati/Pimpinan
                      </td>
                      <td>bupatikabdemo</td>
                      <td>Bupati Kab. Demo</td>
                      <td>Kab. Demo</td>
                      <td>1 Tahun yang lalu</td>
                      <td>
                        <Button
                          type="button"
                          className="btn btn-primary btn-gradient waves-effect waves-light"
                          size="small"
                        >
                          <span className="gradient">Edit</span>
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          onClick={showDeleteConfirm}
                          className="btn btn-red btn-gradient waves-effect waves-light"
                          size="small"
                        >
                          <span className="gradient">Hapus</span>
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          className="btn btn-secondary btn-gradient waves-effect waves-light"
                          size="small"
                        >
                          <span className="gradient">Reset</span>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        User <br /> Bupati/Pimpinan
                      </td>
                      <td>bupatikabdemo</td>
                      <td>Bupati Kab. Demo</td>
                      <td>Kab. Demo</td>
                      <td>1 Tahun yang lalu</td>
                      <td>
                        <Button
                          type="button"
                          className="btn btn-primary btn-gradient waves-effect waves-light"
                          size="small"
                        >
                          <span className="gradient">Edit</span>
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          onClick={showDeleteConfirm}
                          className="btn btn-red btn-gradient waves-effect waves-light"
                          size="small"
                        >
                          <span className="gradient">Hapus</span>
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          className="btn btn-secondary btn-gradient waves-effect waves-light"
                          size="small"
                        >
                          <span className="gradient">Reset</span>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
export default connect(_state, _actions)(pengguna);
