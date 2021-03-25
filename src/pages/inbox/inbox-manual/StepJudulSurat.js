import React from 'react';
import ReactQuill from 'react-quill';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DatePicker, Steps, Icon } from 'antd';

import 'react-quill/dist/quill.snow.css';
import Shell from '../../../components/Shell';
const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const StepTambah = () => (
  <div className="row"style={styles.fadeIn}>
    <div className="col-md-12">
      <div className="form-group">
        <label htmlFor="tanggal">Tanggal Diterima</label>
        <DatePicker className="form-control" />

        <div className="form-group">
          <label htmlFor="tanggal">Tanggal Diteruskan</label>
          <DatePicker className="form-control" />
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
          <label htmlFor="nomor">Nomor Agenda</label>
          <input type="text" className="form-control" placeholder="Masukkan Nomor Agenda" />
        </div>
      </div>
    </div>
  </div>
);

export default StepTambah;
