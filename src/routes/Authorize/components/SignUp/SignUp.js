import React from 'react';
import styled from 'styled-components';
import { Form } from 'components/form/RawElements';
import Text from 'components/form/Text';
import canSubmit from 'utils/form/canSubmit';
import Header from 'components/elements/Header';
import Button, { LinkButton } from 'components/elements/Button';
import Loader from 'components/special/Loader';
import * as fieldsValidator from 'utils/form/fieldsValidator';

export class SignUp extends React.PureComponent {
  errorValidator = (values) => {
    const {
      nick, email, password, confirm,
    } = values;
    const isPasswordRepeatedCorrectly = confirm === password;
    let confirmError = !isPasswordRepeatedCorrectly && 'Password do not match';
    let emailError = !fieldsValidator.email(email) && 'Invalid Email';
    if (!confirm) {
      confirmError = 'Required';
    }
    if (!email) {
      emailError = 'Required';
    }

    return {
      nick: !nick && 'Required',
      email: emailError,
      password: !password && 'Required',
      confirm: confirmError,
    };
  }


  render() {
    const { className, isSigningUp, onSubmit } = this.props;

    return (
      <div className={className}>
        {isSigningUp && <Loader container />}
        <Header>Sign Up</Header>
        <Form
          onSubmit={onSubmit}
          validateError={this.errorValidator}
        >
          {
            (formApi) => {
              this.formApi = formApi;
              const nickError = formApi.touched.nick && formApi.errors.nick;
              const emailError = formApi.touched.email && formApi.errors.email;
              const passwordError = formApi.touched.password && formApi.errors.password;
              const confirmError = formApi.touched.confirm && formApi.errors.confirm;

              return (
                <form onSubmit={formApi.submitForm}>
                  <Text
                    error={nickError}
                    id="nick"
                    label="Nick"
                  />
                  <Text
                    error={emailError}
                    id="email"
                    label="Email"
                  />
                  <Text
                    type="password"
                    error={passwordError}
                    id="password"
                    label="Password"
                  />
                  <Text
                    type="password"
                    error={confirmError}
                    id="confirm"
                    label="Confirm Password"
                  />
                  <ButtonsWrapper>
                    <Button disabled={!canSubmit(formApi.errors)} bgColor="#d2e686" grow>Sign Up</Button>
                    <LinkButton grow to="/authorize">
                      <span>Back</span>
                    </LinkButton>
                  </ButtonsWrapper>
                </form>
              );
            }
          }
        </Form>
      </div>
    );
  }
}

const StyledComponent = styled(SignUp)`
  display: flex;
  flex-direction: column;
  min-width: 270px;
  
  h1 {
    align-self: center;
    margin-bottom: 20px;
  }

  form {
    max-height: calc(100vh - 120px);
    overflow: auto;

    @media(min-height: 600px){
      overflow: unset;
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > button:first-child {
    margin-bottom: 10px;
  }
`;

export default StyledComponent;
