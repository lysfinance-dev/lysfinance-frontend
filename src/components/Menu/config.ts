import { MenuEntry } from '@lysfinance-dev/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0',
        external: true,
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.pancakeswap.finance/#/add/BNB/0x0',
        external: true,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Lys Garden',
    icon: 'PoolIcon',
    href: '/pools',
    spin: true,
  },
  {
    label: 'NFT Market',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: '/roadmap',
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/lysfinance-dev',
    external: true,
  },
  {
    label: 'Medium',
    icon: 'MediumIcon',
    href: 'https://lysfinance.medium.com',
    external: true,
  },
]

export default config
