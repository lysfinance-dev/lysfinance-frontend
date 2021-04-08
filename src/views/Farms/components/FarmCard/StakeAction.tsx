import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import StakeBox from './StakeBox'
import UnstakeBox from './UnstakeBox'
import HarvestBox from './HarvestBox'

interface FarmCardActionsProps {
  stakedBalance?: BigNumber
  tokenBalance?: BigNumber
  earnings?: BigNumber
  tokenName?: string
  pid?: number
  depositFeeBP?: number
  earnTokenName: string
}

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xl} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const StakeAction: React.FC<FarmCardActionsProps> = ({
  stakedBalance,
  tokenBalance,
  earnings,
  tokenName,
  pid,
  earnTokenName,
}) => {
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)

  return (
    <BoxWrapper>
      <StakeBox tokenBalance={tokenBalance} tokenName={tokenName} onConfirm={onStake} />

      <UnstakeBox stakedBalance={stakedBalance} tokenName={tokenName} onConfirm={onUnstake} />

      <HarvestBox earnings={earnings} pid={pid} earnTokenName={earnTokenName} />
    </BoxWrapper>
  )
}

export default StakeAction
