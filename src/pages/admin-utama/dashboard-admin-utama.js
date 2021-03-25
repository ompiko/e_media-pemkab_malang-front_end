import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Shell from '../../components/Shell';

class Home extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xl-3 mb-4">
            <div className="card card-sm bg-secondary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-mail-incoming batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">69</div>
                  <div className="tile-description">Surat Masuk</div>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-outline-secondary waves-effect waves-light"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-original-title=""
                    title=""
                  >
                    <i className="batch-icon batch-icon-outgoing" />&nbsp;Cek Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3 mb-4">
            <div className="card card-sm bg-primary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-list batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">21</div>
                  <div className="tile-description">Kontak</div>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-outline-secondary waves-effect waves-light"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-original-title=""
                    title=""
                  >
                    <i className="batch-icon batch-icon-outgoing" />&nbsp;Cek Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3 mb-4">
            <div className="card card-sm bg-secondary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-left">
                  <i className="batch-icon batch-icon-reply batch-icon-xxl" />
                </div>
                <div className="tile-right">
                  <div className="tile-number">71</div>
                  <div className="tile-description">Disposisi Masuk</div>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-outline-secondary waves-effect waves-light"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-original-title=""
                    title=""
                  >
                    <i className="batch-icon batch-icon-outgoing" />&nbsp;Cek Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3 mb-4">
            <div className="card card-sm bg-primary bg-gradient text-center">
              <div className="card-body p-4">
                <div className="tile-center">
                  <div className="tile-number">11:59</div>
                  <div className="tile-description">Wednesday, April 25, 2018</div>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-outline-secondary waves-effect waves-light"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-original-title=""
                    title="Penghitung Waktu Mundur"
                  >
                    <i className="batch-icon batch-icon-clock" />
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-secondary waves-effect waves-light"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-original-title=""
                    title="pengingat"
                  >
                    <i className="batch-icon batch-icon-bell" />
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-secondary waves-effect waves-light"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="top"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                    data-original-title=""
                    title="Kalender"
                  >
                    <i className="batch-icon batch-icon-calendar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <h5>Naskah Dinas</h5>
                <h6>Terbaru</h6>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th style={{ verticalAlign: 'middle' }}>Perihal</th>
                      <th style={{ verticalAlign: 'middle' }}>Kecepatan</th>
                      <th style={{ verticalAlign: 'middle' }}>Tanggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Lama</td>
                      <td>February 31, 2099</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Lama</td>
                      <td>February 31, 2099</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Lama</td>
                      <td>February 31, 2099</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5>Jadwal</h5>
                <h6>Jadwal Kegiatan</h6>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th style={{ verticalAlign: 'middle' }}>Keterangan</th>
                      <th style={{ verticalAlign: 'middle' }}>Tgl</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Lamaran</th>
                      <td>February 31, 2099</td>
                    </tr>
                    <tr>
                      <th scope="row">Akad</th>
                      <td>February 31, 2099</td>
                    </tr>
                    <tr>
                      <th scope="row">Resepsi</th>
                      <td>February 31, 2099</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: 20 }}>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Sales Overview
                  <div className="header-btn-block">
                    <span className="data-range dropdown">
                      <a
                        href="#"
                        className="btn btn-primary dropdown-toggle waves-effect waves-light"
                        id="navbar-dropdown-sales-overview-header-button"
                        data-toggle="dropdown"
                        data-flip="false"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="batch-icon batch-icon-calendar" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbar-dropdown-sales-overview-header-button"
                      >
                        <a className="dropdown-item" href="today">
                          Today
                        </a>
                        <a className="dropdown-item" href="week">
                          This Week
                        </a>
                        <a className="dropdown-item" href="month">
                          This Month
                        </a>
                        <a className="dropdown-item active" href="year">
                          This Year
                        </a>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div
                    className="card-chart"
                    data-chart-color-1="#07a7e3"
                    data-chart-color-2="#32dac3"
                    data-chart-legend-1="Sales ($)"
                    data-chart-legend-2="Orders"
                    data-chart-height="281"
                  >
                    <canvas
                      id="sales-overview"
                      width="642"
                      height="281"
                      style={{ width: '642.688px', height: '281px', display: 'block' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 col-xl-4 mb-5">
              <div className="card card-md">
                <div className="card-header">
                  Traffic Sources
                  <div className="header-btn-block">
                    <span className="data-range dropdown">
                      <a
                        href="#"
                        className="btn btn-primary dropdown-toggle waves-effect waves-light"
                        id="navbar-dropdown-traffic-sources-header-button"
                        data-toggle="dropdown"
                        data-flip="false"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="batch-icon batch-icon-calendar" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbar-dropdown-traffic-sources-header-button"
                      >
                        <a className="dropdown-item" href="today">
                          Today
                        </a>
                        <a className="dropdown-item" href="week">
                          This Week
                        </a>
                        <a className="dropdown-item" href="month">
                          This Month
                        </a>
                        <a className="dropdown-item active" href="year">
                          This Year
                        </a>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="card-body text-center">
                  <p className="text-left">Your top 5 traffic sources</p>
                  <div
                    className="card-chart"
                    data-chart-color-1="#07a7e3"
                    data-chart-color-2="#32dac3"
                    data-chart-color-3="#4f5b60"
                    data-chart-color-4="#FCCF31"
                    data-chart-color-5="#f43a59"
                    style={{ width: '224.8px', height: '224.8px' }}
                  >
                    <canvas
                      id="traffic-source"
                      width="225"
                      height="225"
                      style={{ display: 'block', width: '225px', height: '225px' }}
                    />
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

export default connect(_state, _actions)(Home);
