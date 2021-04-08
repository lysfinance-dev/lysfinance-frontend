import React from 'react'
import { Text } from '@blzd-dev/uikit-v2'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import CardValue from './CardValue'

const BlzdHarvestBalance = () => {
  const TranslateString = useI18n()
  const { account } = useWallet()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)

  if (!account) {
    return (
      <Text color="textSubtle" style={{ lineHeight: 36, fontSize: 42 }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={earningsSum} fontSize="42px" />
}

export default BlzdHarvestBalance