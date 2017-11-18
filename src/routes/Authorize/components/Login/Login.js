import React from 'react'
import styled from 'styled-components'
import { Form } from 'react-form'
import Button, {LinkButton} from './../../../../components/general/Button'
import TextInputPair from './../../../../components/layout/Form/TextInputPair'
import Header from './../../../../components/layout/Form/Header'
import canSubmit from './../../../../utils/form/canSubmit'

export class Login extends React.PureComponent {
  errorValidator = (values) => {
    const { Login ,Password } = values
    return {
      Login: !Login && 'Required',
      Password: !Password && 'Required'
    }
  }

  render () {
    const {className} = this.props
    return (
      <div className={className}>
        <Header>Log In</Header>
        <Form
          validateError={this.errorValidator}
        >
          {
          formApi => {
            this.formApi = formApi
            const loginError = formApi.touched.Login && formApi.errors.Login
            const passwordError = formApi.touched.Password && formApi.errors.Password

            return (
              <form onSubmit={formApi.submitForm}>
                <TextInputPair 
                  error={loginError}
                  label='Login'
                 />
                <TextInputPair
                  error={passwordError}
                  label='Password' />
                <ButtonsWrapper>
                  <Button disabled={!canSubmit(formApi.errors)} type="submit" bgColor='#d2e686' grow>Login</Button>
                  <LinkButton grow to='/authorize'>
                    <span>Back</span>
                  </LinkButton>
                </ButtonsWrapper>
              </form>
            )
          }
        }
        </Form>
      </div>
    )
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
`
const ButtonsWrapper = styled.div`
display: flex;
flex-direction: column;

& > button:first-child {
  margin-bottom: 10px;
}
`
export default StyledComponent
