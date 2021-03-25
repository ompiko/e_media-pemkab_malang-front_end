import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DatePicker, Steps, Icon } from 'antd';
import Shell from '../../../components/Shell';

const StepTambah = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Masukkan Perihal Surat" />
      </div>

      <div className="input-group mb-3">
        <select className="custom-select" id="inputGroupSelect02">
          <option selected="">Pilih Untuk Instansi Pengirim</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="inputGroupSelect02">
            Pilihan
          </label>
        </div>
      </div>

      <div className="form-group">
        <input type="text" className="form-control" placeholder="Masukkan Nomor Agenda" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Masukkan Nama Pengirim" />
      </div>

      <div className="form-group">
        <input type="text" className="form-control" placeholder="Masukkan Jabatan Pengirim" />
      </div>

      <div className="form-group">
        <input type="text" className="form-control" placeholder="Masukkan Instansi Pengirim" />
      </div>

      <div className="form-group">
        <input type="text" className="form-control" placeholder="Masukkan Alamat Pengirim" />
      </div>
    </div>
  </div>
);

export default StepTambah;
