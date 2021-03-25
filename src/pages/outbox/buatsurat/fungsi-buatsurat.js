import 'react-quill/dist/quill.snow.css';

import React from 'react';

import { Steps, Icon, Button, message } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Shell from '../../../components/Shell.js';

import StepJudulSurat from './StepJudulSurat.js';
import Stepsurat from './StepSurat';
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
    const contents = [<StepJudulSurat />, <Stepsurat />, <StepLampiranSurat />];

    return (
      <Shell>
        <Steps current={this.state.current}>
          <Step status="finish" title="Langkah 1" icon={<Icon type="loading" />} />
          <Step status="finish" title="Langkah 2" icon={<Icon type="solution" />} />
          <Step status="process" title="Langkah 3" icon={<Icon type="loading" />} />
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

const _actions = dispatch => bindActionCreators({}, dispatch);

export default connect(_actions)(MyComponent);
