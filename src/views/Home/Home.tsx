import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@lysfinance-dev/uikit'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import BlzdStats from './components/LysStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'

const Home: React.FC = () => {
  return (
    <Page>
      <StakedWrapper>
        <Hero>
          <Heading as="h1" size="xl" mb="24px" color="#fff">
            Welcome to the noblest DeFi experience.
          </Heading>
          <DetailsBecomeAYeti>
            Consider this place as the next DeFi. And this place exist, because you searched for it.
            The symbol of the Lys is used in reference to the nobility of the high yield offered.
            We want to provide fair returns in line with the values of decentralization. 
            Where the human act is once again put at the center of this ecosystem and once again brought to light
            <br/>
            <p><em>&quot;La France fut faite à coups d&apos;épée. La fleur de lys, symbole d&apos;unité nationale, n&apos;est que l&apos;image d&apos;un javelot à trois lances.&quot;</em></p>
          </DetailsBecomeAYeti>
          <JoinUsButton href="https://t.me/LysFinance" target="_blank" rel="noreferrer">
            JOIN THE GROUP
          </JoinUsButton>
        </Hero>
        <HeroImage src="https://raw.githubusercontent.com/lysfinance-dev/lysfinance-assets/main/lys/lys_background.jpg" />
      </StakedWrapper>

      <div>
        <Cards>
          <FarmStakingCard />
          <BlzdStats />
        </Cards>
      </div>
      <TotalValueLockedCard />
    </Page>
  )
}

const StakedWrapper = styled.div`
  position: relative;
`

const Hero = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  margin-top: 32px;
  padding: 32px;
  background: #f6b93b;
  background: linear-gradient(180deg, #f6b93b 0%, #b88928 100%);
  border-radius: 8px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 50px;
  }
`

const HeroImage = styled.img`
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  mix-blend-mode: screen;
`

const JoinUsButton = styled.a`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.text};
  width: 176px;
  height: 46px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`

const DetailsBecomeAYeti = styled(Text)`
  width: 100%;
  fontsize: 16px;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 80%;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;
  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

export default Home
