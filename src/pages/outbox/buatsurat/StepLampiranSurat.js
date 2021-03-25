import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DatePicker, Steps, Icon } from 'antd';
import Shell from '../../../components/Shell';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    const StepLampiranSurat = () => (
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="nomor">Perihal</label>
            <ReactQuill value={this.state.text} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <div className="input-group mb-3">
              <select className="custom-select" id="inputGroupSelect02">
                <option selected="">Pilih Jenis Naskah Dinas</option>
                <option value="1">Peraturan</option>
                <option value="2">Pedoman</option>
                <option value="3">Petunjuk Pelaksanaan</option>
                <option value="4">Instruksi</option>
              </select>
              <div className="input-group-append">
                <label className="input-group-text" htmlFor="inputGroupSelect02">
                  Jenis Naskah Dinas
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="nomor">Isi Ringkas</label>
            <textarea className="form-control" placeholder="Tulis Pesan Anda Disini" />
          </div>

          <div className="form-group">
            <label htmlFor="nomor">Perihal</label>
            <ReactQuill value={this.state.text} onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="nomor">Daftar Pemeriksa</label>
          </div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
