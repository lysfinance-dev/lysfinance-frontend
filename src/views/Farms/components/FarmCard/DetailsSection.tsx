import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Flex, Link, LinkExternal } from '@blzd-dev/uikit-v2'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
  isTokenOnly?: boolean
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  margin: 0px 14px;
  width: 1px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  // color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  isTokenOnly,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const pancakeLink = isTokenOnly
    ? `https://exchange.pancakeswap.finance/#/swap?outputCurrency=${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
    : `https://exchange.pancakeswap.finance/#/add/${liquidityUrlPathParts}`
  const link = lpLabel.includes('vBSWAP') ? 'https://bsc.valuedefi.io/#/vswap' : pancakeLink

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <StyledLinkExternal external href={link}>
          Get {lpLabel}
        </StyledLinkExternal>
      </Flex>
      <Divider />
      <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false}>
          {TranslateString(356, 'View on BscScan')}
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
