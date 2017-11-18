import React from 'react'
import styled from 'styled-components'
import { Form, Text, Radio, RadioGroup, Select, Checkbox } from 'react-form'
import TextInputPair from './../../../../components/layout/Form/TextInputPair'
import Header from './.../../../../../../components/layout/Form/Header'
import Button, {LinkButton} from './../.../../../../../components/general/Button'

export class SignUp extends React.PureComponent {
  render () {
    const { className } = this.props
    return (
      <div className={className}>
        <Header>Sign Up</Header>
        <Form>
          {
            formApi => {
              this.formApi = formApi
              return (
                <form onSubmit={formApi.submitForm}>
                  <TextInputPair label='Nick' />
                  <TextInputPair label='Email' />
                  <TextInputPair label='Password' />
                  <TextInputPair label='Confirm Password' />
                  <ButtonsWrapper>
                    <Button disabled bgColor='#d2e686' grow>Sign Up</Button>
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

const StyledComponent = styled(SignUp)`
  display: flex;
  flex-direction: column;
  min-width: 270px;
  
  h1 {
    align-self: center;
    margin-bottom: 20px;
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
