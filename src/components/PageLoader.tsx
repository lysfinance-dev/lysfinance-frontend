import React from 'react'
import styled from 'styled-components'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoIcon = styled.div`
  transition: transform 0.3s ease;
  margin-bottom: 24px;
  animation: pulse 0.85s ease-in-out infinite;
  @keyframes pulse {
    0% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 1.15, 1.15);
      transform: scale3d(1.15, 1.15, 1.15);
    }
    to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <LogoIcon>
        <img
          style={{ height: 128 }}
          src="https://raw.githubusercontent.com/lysfinance-dev/lysfinance-assets/main/lys/icon/lys_logoRound_md.png"
          alt="logo"
        />
      </LogoIcon>
    </Wrapper>
  )
}

export default PageLoader
