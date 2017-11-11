import React from 'react'
import styled from 'styled-components'
import logo from './../../../../resources/icons/shoes.svg'
import SVGIcon from './../../../../components/general/SVGIcon'

export const Welcome = () => {
  return (
    <div>
      <div>
          Welcome to SneakSquak <SVGIcon src={logo} />
      </div>
    </div>
  )
}

const WelcomeHeader = styled.div`

`

const StyledComponent = styled(Welcome)`
`

export default StyledComponent
