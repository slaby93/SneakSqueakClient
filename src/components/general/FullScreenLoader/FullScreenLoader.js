import React from 'react'
import styled from 'styled-components'

export const FullScreenLoader = ({ className }) => {
  return (<div className={className}>
    <div className='ball' />
    <div className='ball' />
    <div className='ball' />
    <div className='ball' />
    <div className='ball' />
    <div className='ball' />
    <div className='ball' />
  </div>)
}

const StyledComponent = styled(FullScreenLoader)`
      position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 20%;
    background-color: white;
    z-index: 1;
    top: 0px;
    left: 0px;
`

export default StyledComponent
