import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, Text } from '@lysfinance-dev/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import useStake from '../../../../hooks/useStake'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > button {
    width: 100%;
    border-width: 0;
  }
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)

  const canCompound = pid === 0

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="flex-end">
      <Heading color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>
        <Text fontSize="20px" color='#2F70FF' fontWeight="bold" style={{ }}>
          {displayBalance}
        </Text>
      </Heading>
      <BalanceAndCompound>
        {canCompound ? (
          <Button
            disabled={rawEarningsBalance === 0 || pendingTx}
            scale="sm"
            variant="secondary"
            marginBottom="8px"
            style={{
              borderRadius: 12, backgroundColor: "#0F152A",
            }}
            onClick={async () => {
              try {
                setPendingTx(true)
                await onStake(rawEarningsBalance.toString())
              } finally {
                setPendingTx(false)
              }
            }}
          >
            {TranslateString(999, 'Compound')}
          </Button>
        ) : null}
        <Button
          disabled={rawEarningsBalance === 0 || pendingTx}
          scale={canCompound ? 'sm' : 'md'}
          style={{
            backgroundColor: "#0F152A",
            borderRadius: !canCompound ? 16 : 12,
            marginTop: !canCompound ? 8 : 0,
            marginBottom: !canCompound ? 8 : 0,
            paddingTop: canCompound ? 5 : 35
            // alignItems:pendingTx ?'center':'flex-end',
          }}
          onClick={async () => {
            try {
              setPendingTx(true)
              await onReward()
            } finally {
              setPendingTx(false)
            }
          }}
        >
          {pendingTx ? TranslateString(10007, 'Pending') : TranslateString(10006, 'WITHDRAW')}
        </Button>
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction
