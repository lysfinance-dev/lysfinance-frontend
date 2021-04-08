import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@blzd-dev/uikit-v2'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
// import LotteryCard from './components/LotteryCard'
import BlzdStats from './components/BlzdStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
// import TwitterCard from './components/TwitterCard'

const Home: React.FC = () => {
  return (
    <Page>
      <StakedWrapper>
        <Hero>
          <Heading as="h1" size="xl" mb="24px" color="#fff">
            Become a Yeti !!
          </Heading>
          <DetailsBecomeAYeti>
            Blizzard.money is home to the most fabulous Yeti you’ll evver meet.(Yes, Yeti is the phural for Yeti) Here,
            Yeti earn cold, hard cash token on the best Defi platform this side of the Himalayas. And its only available
            on the Binance Smart Chain.
          </DetailsBecomeAYeti>
          <JoinUsButton href="https://t.me/BlizzardMoney" target="_blank" rel="noreferrer">
            JOIN US
          </JoinUsButton>
        </Hero>
        <HeroImage src="/images/blzd/3c.png" />
      </StakedWrapper>

      <div>
        <Cards>
          <FarmStakingCard />
          <BlzdStats />
        </Cards>
      </div>
      <TotalValueLockedCard />
      {/* <TwitterCard/> */}
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
  background: rgb(32, 122, 224);
  background: linear-gradient(180deg, rgba(32, 122, 224, 1) 0%, rgba(14, 69, 189, 1) 100%);
  border-radius: 8px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 50px;
  }
`

const HeroImage = styled.img`
  width: 37%;
  position: absolute;
  right: 0;
  bottom: -10%;
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
    width: 63%;
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
