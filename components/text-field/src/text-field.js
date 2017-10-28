import React, { Component } from "react";
import styled from "styled-components";
// import { COLORS } from "src/theme";
// import { StyledError } from "components/Form/validation";

const COLORS = {
  ERROR: "red",
  GREY_LIGHT: "#D5D6D6",
  GREY_LIGHTER: "#C7C8C9",
  GREY_LIGHTEST: "#F1F1F1"
};

export const StyledError = styled.span`
  color: ${COLORS.ERROR};
  display: block;
  padding-top: 10px;
  font-size: 13px;
`;

const StyledTextField = styled.input`
  width: 100%;
  min-width: 275px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  padding: 0 0 0 15px;
  border: 1px solid ${COLORS.GREY_LIGHT};

  &:hover {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: ${COLORS.GREY_LIGHTER};
  }
  &::-moz-placeholder {
    color: ${COLORS.GREY_LIGHTER};
  }
  &:-ms-input-placeholder {
    color: ${COLORS.GREY_LIGHTER};
  }
  &:-moz-placeholder {
    color: ${COLORS.GREY_LIGHTER};
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 50px;
`;

const Prefix = styled.div`
  background-color: ${COLORS.GREY_LIGHTEST};
  border: 1px solid ${COLORS.GREY_LIGHT};
  border-right: 0;
  font-size: 18px;
  line-height: 50px;
  padding: 0 16px;
  user-select: none;
`;

const Suffix = styled.div`
  background-color: ${COLORS.GREY_LIGHTEST};
  border: 1px solid ${COLORS.GREY_LIGHT};
  border-left: 0;
  font-size: 18px;
  line-height: 50px;
  padding: 0 16px;
  user-select: none;
`;

const StyledHelperText = styled.span`
  font-size: 11px;
  user-select: none;
`;

const Label = styled.label`
  margin: 16px 0;
  font-weight: 600;
  user-select: none;
`;

const Container = styled.div`
  width: 100%;
  margin-right: 16px;
`;

class TextField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      input,
      label,
      helperText,
      meta: { touched, error, warning },
      prefix,
      suffix,
      ...rest
    } = this.props;
    return (
      <Container>
        <Label>{label}</Label>
        <Wrapper>
          {prefix && <Prefix>{prefix}</Prefix>}
          <StyledTextField {...rest} {...input} />
          {suffix && <Suffix>{suffix}</Suffix>}
        </Wrapper>
        <StyledHelperText>{helperText}</StyledHelperText>
        {touched &&
          ((error && <StyledError>{error}</StyledError>) ||
            (warning && <span>{warning}</span>))}
      </Container>
    );
  }
}

export default TextField;
