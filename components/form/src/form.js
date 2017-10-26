import React, { Component } from "react";
import {
  reduxForm,
  submit as reduxFormSubmit,
  change as reduxFormChange,
  SubmissionError
} from "redux-form";
import { autobind } from "core-decorators";
import styled from "styled-components";

const Error = styled.div`
  color: red;
  text-align: center;
  font-weight: bold;
  margin-bottom: 32px;
`;

@autobind
class Form extends Component {
  constructor(props) {
    super(props);

    const {
      name,
      store,
      onSubmit,
      initialValues,
      onSubmitFail,
      FormError
    } = this.props;

    const renderForm = formProps => {
      const { children, error, submitFailed, handleSubmit } = formProps;
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          {children}
          {(error || submitFailed) && (
            <Error>
              {error || "Some field haven't been filled out correctly"}
            </Error>
          )}
        </form>
      );
    };

    this.ReduxForm = reduxForm({
      form: name,
      initialValues,
      onSubmitFail,
      onSubmit: onSubmit
    })(renderForm);
  }

  render() {
    const ReduxForm = this.ReduxForm;
    const { children } = this.props;
    return <ReduxForm>{children}</ReduxForm>;
  }
}

export default Form;
