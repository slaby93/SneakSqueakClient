import React from 'react'
import styled from 'styled-components'
import logo from './../../../../resources/icons/shoes.svg'
import SVGIcon from './../../../../components/general/SVGIcon'
import Button from './../../../../components/general/Button'
import GoogleGIcon from './../../../../resources/icons/Google__G__Logo.svg'
import FacebookIcon from './../../../../resources/icons/facebook-F-logo.svg'
import {NavLink} from 'react-router-dom'

export const Welcome = ({className}) => {
  return (
    <div className={className}>
      <WelcomeBox>
        <span>SneakSqueak</span>
        <SVGIcon src={logo} />
      </WelcomeBox>
      <DetailedAutorizationBox>
        <Button color='black' grow>
          <span>Sign in with &nbsp;</span>
          <SVGIcon size={20} src={GoogleGIcon} />
        </Button>
        <Button color='white' noBorder bgColor='#6b9aff' grow>
          <span>Sign in with &nbsp;</span>
          <SVGIcon height={24} width={20} color='white' src={FacebookIcon} />
        </Button>
        <FancyOr><span>OR</span></FancyOr>
        <Button grow>Create account with Email</Button>
        <div>
          <span>Aready a member?&nbsp;</span><Button text><NavLink to='/'><span>Log In</span></NavLink></Button>
        </div>
      </DetailedAutorizationBox>
    </div>
  )
}

const StyledComponent = styled(Welcome)`
  display: grid;
  width: -webkit-fill-available;
  max-width: 300px;
  margin-top: 10%;
  grid-template-rows: 25% auto;
  
  @media screen and (orientation:landscape) {
    margin-top: 5%;
  }

  @media (min-width: 400px) and (min-height: 600px) {
    border: 1px solid #e8e8e8;
    padding: 30px;
    box-shadow: 0px 0px 10px 1px gainsboro;
  }
`
const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  svg {
    --size: 60px;
    width: var(--size);
    height: var(--size);

    @media (min-height: 510px){
      --size: 100px;
    }
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

const FancyOr = styled.div`
  font-size: 15px;
  color: #545454;
  font-weight: 400;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  --marginSize: 5px;
  --color: #d2d2d2;
  &:before, &:after {
    content: '';
    border-bottom: 1px solid var(--color);
    width: 100%;
    height: 1px;
    display: block;
  }
  &:before {
    margin-right: var(--marginSize);
  }
  &:after {
    margin-left: var(--marginSize);
  }
  `

export default StyledComponent
