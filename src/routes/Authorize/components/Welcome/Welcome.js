import React from 'react'
import styled from 'styled-components'
import logo from './../../../../resources/icons/shoes.svg'
import SVGIcon from './../../../../components/general/SVGIcon'
import Button from './../../../../components/general/Button'
import GoogleGIcon from './../../../../resources/icons/Google__G__Logo.svg'
import FacebookIcon from './../../../../resources/icons/facebook-F-logo.svg'

export const Welcome = ({className}) => {
  return (
    <div className={className}>
      <WelcomeBox>
        <span>SneakSqueak</span>
        <SVGIcon size={120} src={logo} />
      </WelcomeBox>
      <DetailedAutorizationBox>
        <Button limitWidth color='black' grow>
          <span>Log in with &nbsp;</span>
          <SVGIcon size={20} src={GoogleGIcon} />
        </Button>
        <Button color='white' noBorder limitWidth bgColor='#6b9aff' grow>
          <span>Log in with &nbsp;</span>
          <SVGIcon height={24} width={20} color='white' src={FacebookIcon} />
        </Button>
        <FancyOr>Or</FancyOr>
        <Button limitWidth grow>SignUp with Email</Button>
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

  @media screen and (orientation:landscape) {
    margin-top: 5%;
  }
`
const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
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
  font-weight: 400;
  margin-bottom: 8px;`

export default StyledComponent
