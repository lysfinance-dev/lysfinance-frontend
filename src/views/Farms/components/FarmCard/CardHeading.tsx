import React from 'react'
import styled from 'styled-components'
import { Text, Tag, Flex } from '@blzd-dev/uikit-v2'
import { NoFeeTag } from 'components/Tags'
import useI18n from 'hooks/useI18n'

export interface ExpandableSectionProps {
  isFarming?: boolean
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  tokenSymbol?: string
}

const NoFeeTagWrapper = styled.div`
  font-size: 12px;
  color: #25ff94;
  svg {
    width: 16px;
    height: 16px;
  }
  div {
    border: #25ff94 solid 1px;
    height: 20px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
  font-size: 12px;
  padding: 0px 12px;
  line-height: 0px;
  color: #56bbff;
  border: #56bbff solid 1px;
  background-color: transparent;
  height: 20px;
`

const FarmingTextWrapper = styled.div`
  div {
    height: 22px;
  }
`

const CardHeading: React.FC<ExpandableSectionProps> = ({ isFarming, lpLabel, multiplier, depositFee }) => {
  const TranslateString = useI18n()
  return (
    <Flex flexDirection="column" alignItems="flex-start" justifyContent="center">
      <FarmingTextWrapper>
        <Text color="#DF4B4C" bold fontSize="14px">
          {isFarming === true ? TranslateString(10008, 'Farming') : ''}
        </Text>
      </FarmingTextWrapper>
      <Text fontWeight="bold" style={{ marginBottom: 4 }}>
        {lpLabel}
      </Text>
      <Flex justifyContent="center">
        {depositFee === 0 && (
          <NoFeeTagWrapper>
            <NoFeeTag />
          </NoFeeTagWrapper>
        )}
        {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
        {/* <RiskTag risk={risk} /> */}
        <MultiplierTag>{multiplier}</MultiplierTag>
        {depositFee !== 0 && <div style={{ width: 98 }} />}
      </Flex>
    </Flex>
  )
}

export default CardHeading
