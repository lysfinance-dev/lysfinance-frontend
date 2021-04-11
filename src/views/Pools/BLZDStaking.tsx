import React, { useMemo } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Heading } from '@lysfinance-dev/uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import { usePools, useBlock } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
// import Coming from './components/Coming'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'

const Farm: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWallet()
  const pools = usePools(account)
  const { blockNumber } = useBlock()

  const [finishedPools, openPools] = useMemo(
    () => partition(pools, (pool) => pool.isFinished || blockNumber > pool.endBlock),
    [blockNumber, pools],
  )

  return (
    <Page>
      <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="16px" style={{ fontSize: 36, color: '#fff' }}>
            {TranslateString(282, 'Blizzard')}
          </Heading>
          <ul>
            <li style={{ fontSize: 18, color: '#fff' }}>
              {TranslateString(580, 'Stake xBLZD to earn new tokens. Rewards are calculated per block.')}
            </li>
          </ul>
        </div>
      </Hero>
      <PoolTabButtons />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {orderBy(openPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
            ))}
            {/* <Coming /> */}
          </>
        </Route>
        <Route path={`${path}/history`}>
          {orderBy(finishedPools, ['sortOrder']).map((pool) => (
            <PoolCard key={pool.sousId} pool={pool} />
          ))}
        </Route>
      </FlexLayout>
    </Page>
  )
}

const Hero = styled.div`
  align-items: baseline;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 600px) {
    max-width: 250px;
  }
  @media (min-width: 900px) {
    max-width: 250px;
  }
  @media (min-width: 1100px) {
    max-width: 250px;
  }
  padding: 0 16px 32px 16px;
 }
  li {
    @media (min-width: 600px) {
      width: 625px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 396px;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

export default Farm
