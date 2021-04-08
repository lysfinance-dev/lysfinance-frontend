import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Button } from '@blzd-dev/uikit-v2'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import BlzdHarvestBalance from './BlzdHarvestBalance'
import BlzdWalletBalance from './BlzdWalletBalance'

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  const addWatchBlzdToken = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const provider = window.ethereum
    if (provider) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: '0x9a946c3Cb16c08334b69aE249690C236Ebd5583E', // TODO: change address to xBLZD
              symbol: 'xBLZD',
              decimals: '18',
              image:
                'https://raw.githubusercontent.com/blzd-dev/blzd-frontend/master/public/images/tokens/BLZD.png',
            },
          },
        })

        if (wasAdded) {
          console.log('Token was added')
        }
      } catch (error) {
        // TODO: find a way to handle when the user rejects transaction or it fails
      }
    }
  }, [])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        {/* <Heading size="xl" mb="24px">
          {TranslateString(542, 'Farms & Staking')}
        </Heading> */}
        <RowBetween>
          <Wrapper>
            <CardImage
              src="https://raw.githubusercontent.com/blzd-dev/blzd-frontend/master/public/images/blzd/2.png"
              alt="blzd logo"
              width={42}
              height={42}
            />
            <BlzdWalletBalance />
          </Wrapper>
          <Button onClick={addWatchBlzdToken} scale="sm">
            +{' '}
            <img
              style={{ marginLeft: 8 }}
              width={16}
              src="https://raw.githubusercontent.com/blzd-dev/blzd-frontend/master/public/images/wallet/metamask.png"
              alt="metamask logo"
            />
          </Button>
        </RowBetween>
        <Block>
          <Label>xBLZD in Wallet</Label>
        </Block>
        <Divider />
        <RowBetween>
          <Wrapper>
            <CardImage
              src="https://raw.githubusercontent.com/blzd-dev/blzd-frontend/master/public/images/blzd/2.png"
              alt="blzd logo"
              width={42}
              height={42}
            />
            <BlzdHarvestBalance />
          </Wrapper>
        </RowBetween>
        <RowBetween style={{ marginTop: -14 }}>
          <Label>xBLZD to Harvest</Label>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              variant="secondary"
              onClick={harvestAllFarms}
            >
              {pendingTx
                ? TranslateString(548, 'Collecting BLZD')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </RowBetween>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

const StyledFarmStakingCard = styled(Card)`
  padding: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 16px;
  }
`

const Block = styled.div`
  margin-bottom: 16px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CardImage = styled.img`
  margin-right: 14px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
  font-size: 18px;
`
const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.textSubtle};
  height: 1px;
  width: 100%;
  margin: 24px 0 12px 0;
`

export default FarmedStakingCard
