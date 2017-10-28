import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Form from "@gyprock/form";
import { Field } from "redux-form";
import Provider from "@gyprock/provider";
import TextField from "@gyprock/text-field";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

const FORM_NAME = "TEST_FORM"; // This is what defines each form in the redux store
const DEFAULT_VALUES = {
  firstName: "Joe",
  lastName: "Bloggs",
  address: "55 Albert Street, Brisbane, QLD 4000"
};

// Called on submit of the form
const handleSubmit = formValues => {
  console.log(formValues);
};

storiesOf("Form", module)
  .addDecorator(story => (
    <Provider
      story={story()}
      reducers={combineReducers({ form: formReducer })}
    />
  ))
  .add("default", () => (
    <Form
      onSubmit={handleSubmit}
      name={FORM_NAME}
      initialValues={DEFAULT_VALUES}
    >
      <Field
        name={"firstName"}
        type={"text"}
        component={TextField}
        placeholder={"First name *"}
        label={"First name *"}
      />
      <Field
        name={"lastName"}
        type={"text"}
        component={TextField}
        placeholder={"Last name *"}
        label={"Last name *"}
      />
      <Field
        name={"address"}
        type={"text"}
        component={TextField}
        placeholder={"Address *"}
        label={"Address *"}
      />
      <button type="submit">Send</button>
    </Form>
  ));
