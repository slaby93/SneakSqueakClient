import React from 'react'
import styled from 'styled-components'
import { Form, Text, Radio, RadioGroup, Select, Checkbox } from 'react-form'
import TextInputPair from './../../../../components/layout/Form/TextInputPair'
import Header from './.../../../../../../components/layout/Form/Header'
import Button, { LinkButton } from './../.../../../../../components/general/Button'
import canSubmit from './../../../../utils/form/canSubmit'

export class SignUp extends React.PureComponent {

  errorValidator = (values) => {
    const { nick, email, password, confirm } = values
    const isPasswordRepeatedCorrectly = confirm === password 
    let confirmError = !isPasswordRepeatedCorrectly && 'Password do not match'

    if(!confirm) {
      confirmError = 'Required'
    }
    return {
      nick: !nick && 'Required',
      email: !email && 'Required',
      password: !password && 'Required',
      confirm: confirmError
    }
  }


  render() {
    const { className } = this.props
    return (
      <div className={className}>
        <Header>Sign Up</Header>
        <Form
          validateError={this.errorValidator}
        >
          {
            formApi => {
              this.formApi = formApi
              const nickError = formApi.touched.nick && formApi.errors.nick
              const emailError = formApi.touched.email && formApi.errors.email
              const passwordError = formApi.touched.password && formApi.errors.password
              const confirmError = formApi.touched.confirm && formApi.errors.confirm

              return (
                <form onSubmit={formApi.submitForm}>
                  <TextInputPair
                    error={nickError}
                    id='nick'
                    label='Nick' />
                  <TextInputPair
                    error={emailError}
                    id='email'
                    label='Email' />
                  <TextInputPair
                    type='password'
                    error={passwordError}
                    id='password'
                    label='Password' />
                  <TextInputPair
                    type='password'
                    error={confirmError}
                    id='confirm'
                    label='Confirm Password' />
                  <ButtonsWrapper>
                    <Button disabled={!canSubmit(formApi.errors)} bgColor='#d2e686' grow>Sign Up</Button>
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

const StyledComponent = styled(SignUp) `
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
