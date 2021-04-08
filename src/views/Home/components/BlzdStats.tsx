import React from 'react'
import { Card, CardBody, Heading, Text } from '@blzd-dev/uikit-v2'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { usePriceBlzdBusd } from '../../../state/hooks'

const BlzdStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  // const farms = useFarms()
  const blzdPrice = usePriceBlzdBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const blzdSupply = getBalanceNumber(circSupply)
  const marketCap = blzdPrice.times(circSupply)

  // let blzdPerBlock = 0
  // if (farms && farms[0] && farms[0].blzdPerBlock) {
  //   blzdPerBlock = new BigNumber(farms[0].blzdPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  // }

  return (
    <StyledBlzdStats>
      <CardBody>
        <Heading size="xl" mb="24px" style={{ fontSize: 24 }}>
          {TranslateString(534, 'BLZD Stats')}
        </Heading>
        <Divider />
        <Row>
          <Text fontSize="18px">{TranslateString(536, 'Total Token Supply')}</Text>
          <ColorPrimaryText>
            {blzdSupply && <CardValue fontSize="36px" value={blzdSupply} decimals={0} />}
          </ColorPrimaryText>
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(999, 'Market Cap')}</Text>
          <ColorPrimaryText>
            <CardValue fontSize="36px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
          </ColorPrimaryText>
        </Row>
        <Row>
          <Text fontSize="18px">{TranslateString(538, 'Total Frozen')}</Text>
          <ColorPrimaryText>
            <CardValue fontSize="36px" value={getBalanceNumber(burnedBalance)} decimals={0} />
          </ColorPrimaryText>
        </Row>
        {/* <Row>
          <Text fontSize="14px">{TranslateString(540, 'New BLZD/block')}</Text>
          <Text bold fontSize="14px">
            {blzdPerBlock}
          </Text>
        </Row> */}
      </CardBody>
    </StyledBlzdStats>
  )
}

const StyledBlzdStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 16px;
  }
`

const ColorPrimaryText = styled.div`
  > div {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.textSubtle};
  height: 1px;
  width: 100%;
  margin: 24px 0 24px 0;
`

export default BlzdStats
