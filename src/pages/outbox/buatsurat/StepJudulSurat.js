import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DatePicker, Steps, Icon, Upload } from 'antd';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import Shell from '../../../components/Shell';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const StepTambah = () => (
  <div className="row" style={styles.fadeIn}>
    <div className="col-md-12">
      <div className="form-group">
        <div className="input-group mb-3">
          <select className="custom-select" id="inputGroupSelect02">
            <option selected="">Pilih Atas Nama</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="input-group-append">
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Atas Nama
            </label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="tanggal">Tanggal Surat</label>
        <DatePicker className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="nomor">Nomor Surat</label>
        <input type="text" className="form-control" placeholder="Masukkan Nomor Surat" />
      </div>
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
    </div>
  </div>
);

export default StepTambah;
