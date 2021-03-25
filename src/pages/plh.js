import React from 'react';
import { DatePicker, Radio, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Shell from '../components/Shell';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

class PLH extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row" style={styles.fadeIn}>
          <div className="col-md-12">
            <h1>Pelaksana Harian</h1>
            <Breadcrumb style={{ marginTop: '-25px' }}>
              <Breadcrumb.Item><Link to={`${process.env.PUBLIC_URL}/dashboard`}>Dashboard</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Pelaksana Harian</Breadcrumb.Item>
            </Breadcrumb>
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect02">
                        <option selected="">Pilih Penjab Pelaksana</option>
                        <option value="1">User</option>
                        <option value="2">User</option>
                      </select>
                      <div className="input-group-append">
                        <label className="input-group-text" htmlFor="inputGroupSelect02">
                          Jenis Naskah Dinas
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tanggal">Mulai</label>
                    <DatePicker className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="tanggal">Berakhir</label>
                    <DatePicker className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nomor">Aktif</label>
                    <div>
                      <RadioGroup onChange={onChange} defaultValue="a">
                        <RadioButton value="a">Ya</RadioButton>
                        <RadioButton value="b">Tidak</RadioButton>
                      </RadioGroup>
                    </div>
                  </div>
                  <button className="btn btn-green btn-gradient waves-effect waves-light" type="button">
                    <span className="gradient">
                      <i className="fa fa-floppy-o" />&nbsp; Simpan
                    </span>
                  </button>
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

export default connect(_state, _actions)(PLH);
