import React, { Component, Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
      hasError: false,
    };

    UNSAFE_componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(
        (res) => res,
        (error) => {
          this.setState({ error: null, hasError: false });
        }
      );
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error, hasError: true });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null, hasError: false });
    };

    render() {
      return (
        <Fragment>
          <Modal
            show={this.state.hasError}
            cancelled={this.errorConfirmedHandler}>
            {this.state.error && this.state.hasError
              ? this.state.error.message
              : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
