import React from 'react'
import styled from 'styled-components'

export class GlobalWrapper extends React.PureComponent {
  render () {
    const {className, children} = this.props
    return <div className={className} >{children}</div>
  }
}

const Styled = styled(GlobalWrapper)`
  display: flex;
  flex-grow: 1;
  height: 100%;
  background: linear-gradient(to bottom,#ffe259,#ffa751);
`

export default Styled
