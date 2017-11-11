import React from 'react'
import styled from 'styled-components'

export const App = class extends React.PureComponent {
  render () {
    const { className } = this.props
    return (
      <div className={className}>APP</div>
    )
  }
}

const StyledComponent = styled(App)`
background-color: pink;
`
export default StyledComponent
