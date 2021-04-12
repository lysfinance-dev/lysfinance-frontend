import { useEffect } from 'react'
import { usePriceLysBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const lysPriceUsd = usePriceLysBusd()

  const lysPriceUsdString = lysPriceUsd.eq(0)
    ? ''
    : ` - $${lysPriceUsd.toNumber().toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })}`

  useEffect(() => {
    document.title = `BLIZZARD.MONEY${lysPriceUsdString}`
  }, [lysPriceUsdString])
}
export default useGetDocumentTitlePrice
