import React from 'react'
import styled from 'styled-components'

export class GlobalWrapper extends React.Component {
  render () {
    const {className, children} = this.props
    return <div className={className} >{children}</div>
  }
}

const Styled = styled(GlobalWrapper)`
  display: flex;
  flex-grow: 1;
  height: 100%;
  background-color: #0e0e0e;
`

export default Styled
