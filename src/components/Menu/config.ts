import { MenuEntry } from '@blzd-dev/uikit-v2'

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
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9a946c3Cb16c08334b69aE249690C236Ebd5583E',
        external: true,
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x9a946c3Cb16c08334b69aE249690C236Ebd5583E',
        external: true,
      },
    ],
  },
  {
    label: 'Farm+',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Caves',
    icon: 'CaveIcon',
    href: '/caves',
  },
  {
    label: 'Blizzard',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Legacy Site',
    icon: 'LegacyIcon',
    href: 'https://legacy.blizzard.money',
    external: true,
  },
]

export const addictionals: MenuEntry[] = [
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/blzd-dev',
    external: true,
  },
  {
    label: 'Medium',
    icon: 'MediumIcon',
    href: 'https://blizzardmoney.medium.com',
    external: true,
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    external: true,
    href: 'https://github.com/blzd-dev/blzd-frontend/blob/master/public/files/gemzAudit.pdf',
  },
]

export default config
