import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TreeSelect } from 'antd';

const StepSurat = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="form-group">
        <label htmlFor="nomor">Penerima</label>

        <button
          type="button"
          className="btn btn-green btn-gradient waves-effect waves-light"
          style={{ marginRight: 5 }}
        >
          <span className="gradient">
            <i className="fa fa-plus" />&nbsp; Ambil Dari Pangkalan Data
          </span>
        </button>
        <button
          type="button"
          className="btn btn-green btn-gradient waves-effect waves-light"
          style={{ marginRight: 5 }}
        >
          <span className="gradient">
            <i className="fa fa-plus" />&nbsp; Tambahkan Data Secara Manual
          </span>
        </button>
      </div>

      <div className="form-group">
        <label>Tembusan</label>

        <button
          type="button"
          className="btn btn-green btn-gradient waves-effect waves-light"
          style={{ marginRight: 5 }}
        >
          <span className="gradient">
            <i className="fa fa-plus" />&nbsp; Tembusan
          </span>
        </button>
      </div>

      {/* <div className="form-group">
        <TreeSelect
          showSearch
          style={{ width: 300 }}
          value={this.state.value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
          allowClear
          multiple
          treeDefaultExpandAll
          onChange={this.onChange}
        >
          <TreeNode value="parent 1" title="parent 1" key="0-1">
            <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
              <TreeNode value="leaf1" title="my leaf" key="random" />
              <TreeNode value="leaf2" title="your leaf" key="random1" />
            </TreeNode>
            <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
              <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
      </div> */}

      <div className="form-group">
        <label>Perihal Surat</label>
        <input type="text" className="form-control" placeholder="Masukkan Perihal Surat" />
      </div>

      <div className="form-group">
        <label>Kaitkan Surat</label>

        <button
          type="button"
          className="btn btn-green btn-gradient waves-effect waves-light"
          style={{ marginRight: 5 }}
        >
          <span className="gradient">
            <i className="fa fa-search" />&nbsp; Cari Surat Untuk Dikaitkan
          </span>
        </button>
      </div>

      <div className="form-group">
        <div className="input-group mb-3">
          <select className="custom-select" id="inputGroupSelect02">
            <option selected="">Pilih Kecepatan Penyampaian</option>
            <option value="1">Biasa</option>
            <option value="2">Segera</option>
            <option value="3">Amat Segera</option>
          </select>
          <div className="input-group-append">
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Kecepatan Sampai
            </label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="input-group mb-3">
          <select className="custom-select" id="inputGroupSelect02">
            <option selected="">Pilih Tingkat Keamanan</option>
            <option value="1">Biasa</option>
            <option value="2">Rahasia</option>
            <option value="3">Sangat Rahasia</option>
          </select>
          <div className="input-group-append">
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Keamanan
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StepSurat;
