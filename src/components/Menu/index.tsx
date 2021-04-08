import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceBlzdBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@blzd-dev/uikit-v2'
import config, { addictionals } from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const blzdPriceUsd = usePriceBlzdBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={blzdPriceUsd.toNumber()}
      links={config}
      addictionals={addictionals}
      priceLink="https://pancakeswap.info/token/0x9a946c3Cb16c08334b69aE249690C236Ebd5583E"
      {...props}
    />
  )
}

export default Menu
