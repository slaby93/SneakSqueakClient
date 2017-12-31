import React from 'react';
import styled from 'styled-components';
import canSubmit from './../../../../utils/form/canSubmit';
import { Form } from './../../../../components/form/RawElements';
import Text from './../../../../components/form/Text';
import Button, { LinkButton } from './../../../../components/elements/Button';
import Header from './../../../../components/elements/Header';
import Loader from './../../../../components/special/Loader';

export class Login extends React.PureComponent {
  errorValidator = (values) => {
    const { login, password } = values;

    return {
      login: !login && 'Required',
      password: !password && 'Required',
    };
  }

  render() {
    const { className, onSubmit, isLogging } = this.props;

    return (
      <div className={className}>
        {isLogging && <Loader container />}
        <Header>Log In</Header>
        <Form
          onSubmit={onSubmit}
          validateError={this.errorValidator}
        >
          {
          (formApi) => {
            this.formApi = formApi;
            const loginError = formApi.touched.login && formApi.errors.login;
            const passwordError = formApi.touched.password && formApi.errors.password;

            return (
              <form onSubmit={formApi.submitForm}>
                <Text
                  error={loginError}
                  label="Login"
                  id="login"
                />
                <Text
                  type="password"
                  error={passwordError}
                  id="password"
                  label="Password"
                />
                <ButtonsWrapper>
                  <Button disabled={!canSubmit(formApi.errors)} type="submit" bgColor="#d2e686" grow>
                    <span>Login</span>
                  </Button>
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

const StyledComponent = styled(Login)`
  min-width: 270px;
  display: flex;
  flex-direction: column;
  h1 {
    align-self: center;
    margin-bottom: 60px;
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
