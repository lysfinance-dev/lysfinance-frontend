import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, Button, Flex } from '@blzd-dev/uikit-v2'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import Input from 'components/Input'

interface UnstakeBoxProps {
  stakedBalance: BigNumber
  tokenName: string
  onConfirm: (amount: string) => void
}

const Wrapper = styled(Flex)`
  border: ${({ theme }) => theme.colors.borderColor} solid 1px;
  border-radius: 4px;
  padding: 15px 17px;
  margin: 10px;
`

const UnstakeBox: React.FC<UnstakeBoxProps> = ({ stakedBalance, tokenName, onConfirm }) => {
  const TranslateString = useI18n()
  const rawStakedBalance = getBalanceNumber(stakedBalance)
  const displayBalance = rawStakedBalance.toLocaleString()

  const [pendingTx, setPendingTx] = useState(false)

  const [val, setVal] = useState('')

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const onMaxLPClick = useCallback(() => {
    setVal(displayBalance)
  }, [setVal, displayBalance])

  const clearVal = useCallback(() => {
    setVal('')
  }, [setVal])

  return (
    <Wrapper>
      <Flex flexDirection="column">
        <Text fontSize="18px" mb="5px" bold style={{ display: 'flex', justifyItems: 'flex-start' }}>
          Unstake
        </Text>
        <Text
          fontSize="14px"
          mb="14px"
          onClick={onMaxLPClick}
          color="#37383b"
          style={{ display: 'flex', flexDirection: 'row', cursor: 'pointer' }}
        >
          Total {tokenName} Stake :
          <Text fontSize="15px" color="#2F70FF" fontWeight="bold" style={{ paddingLeft: 5 }}>
            {displayBalance}
          </Text>
        </Text>
        <Flex alignItems="center">
          <Input onChange={handleChange} placeholder={displayBalance} value={val} />
          <Button
            style={{
              backgroundColor: '#0F152A',
            }}
            disabled={pendingTx}
            onClick={async () => {
              try {
                setPendingTx(true)
                await onConfirm(val)
              } finally {
                setPendingTx(false)
                clearVal()
              }
            }}
          >
            {pendingTx ? TranslateString(10007, 'Pending') : TranslateString(10005, 'WITHDRAW')}
          </Button>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default UnstakeBox
