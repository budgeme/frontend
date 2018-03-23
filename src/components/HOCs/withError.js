import React from 'react';
import { Alert } from 'antd';

const withError = (Component, props) => {
  return class extends React.Component {
    state = { error: null }

    onClose = () => {
      this.setState({ error: null });
    }

    render() {
      return this.state.error ?
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description Error Description Error Description"
          type="error"
          closable
          onClose={this.onClose}
        />
        :
        <Component {...this.props} />
    }
  }
};

export default withError;
