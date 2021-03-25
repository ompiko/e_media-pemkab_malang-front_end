import 'react-quill/dist/quill.snow.css';

import React from 'react';
import ReactQuill from 'react-quill';

import { Steps, Icon, Button, message } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Shell from '../../../components/Shell.js';

import StepTambah from './StepJudulSurat.js';
import Stepsurat from './StepSurat';
import StepIsiSurat from './StepIsiSurat';
import StepLampiranSurat from './StepLampiranSurat';

const { Step } = Steps;

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', current: 0 }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  nextStep() {
    this.setState({ current: this.state.current + 1 });
  }

  prevStep() {
    this.setState({ current: this.state.current - 1 });
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    const contents = [<StepTambah />, <Stepsurat />, <StepIsiSurat />, <StepLampiranSurat />];

    return (
      <Shell>
        <Steps current={this.state.current}>
          <Step status="finish" title="Judul Surat" icon={<Icon type="user" />} />
          <Step status="finish" title="Surat" icon={<Icon type="solution" />} />
          <Step status="process" title="Isi Surat" icon={<Icon type="loading" />} />
          <Step status="wait" title="Lampiran Surat" icon={<Icon type="smile-o" />} />
        </Steps>
        <div className="steps-content">{contents[this.state.current]}</div>
        <div className="steps-action">
          {this.state.current < contents.length - 1 && (
            <Button type="primary" onClick={() => this.nextStep()}>
              Next
            </Button>
          )}
          {this.state.current === contents.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {this.state.current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prevStep()}>
              Previous
            </Button>
          )}
        </div>
      </Shell>
    );
  }
}

const _state = state => ({});
const _actions = dispatch => bindActionCreators({}, dispatch);

export default connect(_state, _actions)(MyComponent);
