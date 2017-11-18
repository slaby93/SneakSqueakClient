import React from 'react'
import styled from 'styled-components'

export class ShadowWrapper extends React.Component {
  componentDidMount () {
    this.fixSize()
  }

  componentDidUpdate () {
    this.fixSize()
  }

  fixSize () {
    setTimeout(() => {
      const width = this.innerDiv.offsetWidth
      const height = this.innerDiv.offsetHeight
      this.outerDiv.style.minWidth = `${width}px`
      this.outerDiv.style.minHeight = `${height}px`
    }, 50)
  }

  render () {
    const {children, className} = this.props
    return (
      <div ref={outerDiv => this.outerDiv = outerDiv} className={className}>
        <div ref={innerDiv => this.innerDiv = innerDiv}>
          {children}
        </div>
      </div>
    )
  }
}

const Styled = styled(ShadowWrapper)`
  width: auto;
  height: auto;
  overflow: hidden;
  transition: all .5s ease-out;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;

   & >  div {
    width: fit-content;
  }
  @media (min-width: 370px) and (min-height: 600px) {
    border: 1px solid #e8e8e8;
    padding: 30px;
    box-shadow: 0px 0px 10px 1px gainsboro;
  }
`
ShadowWrapper.displayName = 'ShadowWrapper'

export default Styled
