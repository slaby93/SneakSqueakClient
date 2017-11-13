import styled from 'styled-components'

const ShadowWrapper = styled.div`
  @media (min-width: 370px) and (min-height: 600px) {
    border: 1px solid #e8e8e8;
    padding: 30px;
    box-shadow: 0px 0px 10px 1px gainsboro;
  }
`
ShadowWrapper.displayName = 'ShadowWrapper'

export default ShadowWrapper
