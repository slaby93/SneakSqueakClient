import React from 'react'
import styled, {css} from 'styled-components'
import { ifProp } from 'styled-tools'

export const Loader = ({className}) => {
  return (<div className={className}>
    <div className='spinner-box'>
      <div className='spinner-axis'>
        <div className='spinner'>
          <div className='spinner-inner' />
        </div>
      </div>
    </div>
  </div>)
}

const StyledComponent = styled(Loader)`
.spinner-box{
  width:50px;
  height:50px;
  position:relative;
}
.spinner-box:before{
  content:"";
  display:block;
  width:100%;
  height:100%;
  border-radius:50%;
  border:#ccc solid 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.spinner-axis{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  -webkit-animation: spin 0.8s steps(100, end) infinite;
  animation: spin 0.8s steps(100, end) infinite;
}
.spinner{
  width:50%;
  height:50%;
  overflow:hidden;
}
.spinner-inner{
  width:200%;
  height:200%;
  border-radius:100%;
  border:#ff0000 solid 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}

${ifProp('container', css`
  background-color: #f1f1f169;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`)}



`

export default StyledComponent
