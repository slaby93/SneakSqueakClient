import React from 'react'
import styled from 'styled-components'
import { Form } from 'react-form'
import Button, {LinkButton} from './../../../../components/general/Button'
import TextInputPair from './../../../../components/layout/Form/TextInputPair'
import Header from './../../../../components/layout/Form/Header'

export class Login extends React.PureComponent {
  render () {
    const {className} = this.props
    return (
      <div className={className}>
        <Header>Log In</Header>
        <Form>
          {
          formApi => {
            this.formApi = formApi
            return (
              <form onSubmit={formApi.submitForm}>
                <TextInputPair label='Login' />
                <TextInputPair label='Password' />
                <ButtonsWrapper>
                  <Button bgColor='#d2e686' grow>Login</Button>
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
