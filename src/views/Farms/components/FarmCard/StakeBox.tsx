import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, Button, Flex } from '@blzd-dev/uikit-v2'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import Input from 'components/Input'

interface StakeBoxProps {
  tokenBalance: BigNumber
  tokenName: string
  onConfirm: (amount: string) => void
}

const Wrapper = styled(Flex)`
  border: ${({ theme }) => theme.colors.borderColor} solid 1px;
  border-radius: 4px;
  padding: 15px 17px;
  margin: 10px;
`

const StakeBox: React.FC<StakeBoxProps> = ({ tokenBalance, tokenName, onConfirm }) => {
  const TranslateString = useI18n()
  const rawTokenBalance = getBalanceNumber(tokenBalance)
  const displayBalance = rawTokenBalance.toLocaleString()

  const [pendingTx, setPendingTx] = useState(false)

  const [val, setVal] = useState('')

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const onMaxLPClick = useCallback(() => {
    setVal(rawTokenBalance.toString())
  }, [setVal, rawTokenBalance])

  const clearVal = useCallback(() => {
    setVal('')
  }, [setVal])

  return (
    <Wrapper>
      <Flex flexDirection="column">
        <Text fontSize="18px" mb="5px" bold style={{ display: 'flex', justifyItems: 'flex-start' }}>
          Stake
        </Text>
        <Text
          fontSize="14px"
          mb="14px"
          onClick={onMaxLPClick}
          color="#57585c"
          style={{ display: 'flex', justifyItems: 'flex-start', cursor: 'pointer' }}
        >
          {tokenName} Available: {' '}
          <Text fontSize="14px" color="#2F70FF" fontWeight="bold" style={{ paddingLeft: 5 }}>
            {displayBalance}
          </Text>
        </Text>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="space-between">
            <Input onChange={handleChange} placeholder={displayBalance} value={val} />
          </Flex>
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
            {pendingTx ? TranslateString(10007, 'Pending') : TranslateString(10004, 'DEPOSIT')}
          </Button>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default StakeBox
