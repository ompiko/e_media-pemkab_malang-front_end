import React from 'react';
import { Form, Select, InputNumber, Switch, Radio, Slider, Button, Upload, Icon, Rate } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Shell from '../components/Shell';

class Timeline extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div>
          <div className="row">
            <div className="col-md-12">
              <h1>Belum Ada Berita</h1>
              <span>Anda bisa mulai dengan mengungkapkan apa yang Anda pikirkan.</span>
              <textarea className="form-control" placeholder="Tulis Pesan Anda Disini" />
              <div className="pull-right">
                <Upload name="logo" action="/upload.do" listType="picture">
                  <button
                    type="button"
                    className="btn btn-green btn-gradient waves-effect waves-light"
                    style={{ marginRight: 5 }}
                  >
                    <span className="gradient">
                      <i className="fa fa-camera" />
                    </span>
                  </button>
                </Upload>

                <button type="button" className="btn btn-primary btn-gradient waves-effect waves-light">
                  <span className="gradient">Kirim</span>
                </button>
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

export default connect(_state, _actions)(Timeline);
