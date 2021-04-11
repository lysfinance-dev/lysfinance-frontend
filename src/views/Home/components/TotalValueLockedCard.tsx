import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text } from '@lysfinance-dev/uikit'
import useI18n from 'hooks/useI18n'
// import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <WrapperRes>
          <div>
            <Heading size="lg" mb="24px">
              {TranslateString(999, 'Total Value Locked (TVL)')}
            </Heading>
            <Text color="textSubtle">{TranslateString(999, 'Across all Farms and Pools')}</Text>
          </div>
          <ColorPrimaryText>
            <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} fontSize="56px" />
          </ColorPrimaryText>
        </WrapperRes>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

const StyledTotalValueLockedCard = styled(Card)`
  padding: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 16px;
  }
`

const WrapperRes = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const ColorPrimaryText = styled.div`
  > div {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default TotalValueLockedCard
