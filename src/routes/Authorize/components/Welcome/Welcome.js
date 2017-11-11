import React from 'react'
import styled from 'styled-components'
import logo from './../../../../resources/icons/shoes.svg'
import SVGIcon from './../../../../components/general/SVGIcon'
import Button from './../../../../components/general/Button'

export const Welcome = ({className}) => {
  return (
    <div className={className}>
      <WelcomeBox>
        <span>SneakSqueak</span>
        <SVGIcon src={logo} />
      </WelcomeBox>
      <DetailedAutorizationBox>
        <Button color='white' noBorder bgColor='red' grow>Connect with Google</Button>
        <Button color='white' noBorder bgColor='blue' grow>Connect with Facebook</Button>
        <FancyOr>Or</FancyOr>
        <Button grow>SignUp with Email</Button>
        <span>Aready a member? Sign In</span>
      </DetailedAutorizationBox>
    </div>
  )
}

const StyledComponent = styled(Welcome)`
  display: grid;
  height: 100%;
  width: 80%;
  margin-top: 20%;
  grid-template-rows: 25% auto;
`
const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-weight: 600;

  svg {
    height: 120px;
  }
`

const DetailedAutorizationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  button {
    margin-bottom: 10px;
  }
`

const FancyOr = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;`

export default StyledComponent
