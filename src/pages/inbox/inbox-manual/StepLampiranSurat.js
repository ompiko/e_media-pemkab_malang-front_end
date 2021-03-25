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
    const StepTambah = () => (
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
            <label htmlFor="nomor">Perihal</label>
            <ReactQuill value={this.state.text} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
