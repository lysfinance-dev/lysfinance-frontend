import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'xBLZD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x33e75f29D52a8BcfBC54a79ED6eF9482b2c035a2',
    },
    tokenSymbol: 'xBLZD', 
    tokenAddresses: {
      97: '',
      56: '0x9a946c3Cb16c08334b69aE249690C236Ebd5583E',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    strat:'0xcb38F4ef1C1859a26edfe529fD94c6CD1565Dd97',
    pidStrat:0,
    pancakeMasterChef:'0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    isPancake: false
  },
  {
    pid: 2,
    lpSymbol: 'xBLZD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xfc207db720851f52545229e406068b205e02b952',
    },
    tokenSymbol: 'xBLZD', 
    tokenAddresses: {
      97: '',
      56: '0x9a946c3Cb16c08334b69aE249690C236Ebd5583E',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    strat:'0xbBab7fbD9FC2FE9f4C7a6e1d1Bb3bc7Ab3fb77Da',
    pidStrat:0,
    pancakeMasterChef:'0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    isPancake: false
  },
  {
    pid: 3,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    strat: '0x06E244ad71Ce80624132DABf6e84124436ecB196',
    pidStrat: 1,
    pancakeMasterChef: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    isPancake: true,
  },
  {
    pid: 4,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    strat: '0xe89a245a4A605790FB17108CE8A1278F36Ab825c',
    pidStrat: 2,
    pancakeMasterChef: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    isPancake: true,
  },
  {
    pid: 5,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    strat: '0x9DE0dC72f367BF4db06adb1d5AFF262D3eD95AaE',
    pidStrat: 15,
    pancakeMasterChef: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    isPancake: true,
  },
  {
    pid: 6,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    strat: '0xdb7a4f6C8D57f0871e9020fDe4C04bA5f3B5C29C',
    pidStrat: 14,
    pancakeMasterChef: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    isPancake: true,
  },
  {
    pid: 7,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbCD62661A6b1DEd703585d3aF7d7649Ef4dcDB5c',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    strat: '0xCC4E353Cc9202F537210dF29f33d6eA4ac67b302',
    pidStrat: 5,
    pancakeMasterChef: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    isPancake: true,
  },
  {
    pid: 8,
    lpSymbol: 'ALPACA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF3CE6Aac24980E6B657926dfC79502Ae414d3083',
    },
    tokenSymbol: 'ALPACA',
    tokenAddresses: {
      97: '',
      56: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    strat: '0xba415E5D6413431778B3985907B167731829237E',
    pidStrat: 4,
    pancakeMasterChef: '0xA625AB01B08ce023B2a342Dbb12a16f2C8489A8F',
    isPancake: true,
  },
  {
    pid: 9,
    lpSymbol: 'AUTO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4d0228EBEB39f6d2f29bA528e2d15Fc9121Ead56',
    },
    tokenSymbol: 'AUTO',
    tokenAddresses: {
      97: '',
      56: '0xa184088a740c695E156F91f5cC086a06bb78b827',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    strat: '0x68cA938A595604f7fcBD355C0BeD508d702FbC08',
    pidStrat: 6,
    pancakeMasterChef: '0x0895196562C7868C5Be92459FaE7f877ED450452',
    isPancake: true,
  },
  {
    pid: 10,
    lpSymbol: 'EGG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd1B59D11316E87C3a0A069E80F590BA35cD8D8D3',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    strat: '0x19254A7913bB3daabE4D33c66D488663ebDAfC44',
    pidStrat: 1,
    pancakeMasterChef: '0xe70E9185F5ea7Ba3C5d63705784D8563017f2E57',
    isPancake: true,
  },
  // caves
  {
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'xBLZD',
    lpAddresses: {
      97: '',
      56: '0xfc207db720851f52545229e406068b205e02b952', // xBLZD-BNB LP
    },
    tokenSymbol: 'xBLZD',
    tokenAddresses: {
      97: '',
      56: '0x9a946c3Cb16c08334b69aE249690C236Ebd5583E',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    strat: '0x7AF26957266C338B9039caBba743a125e9AEB88D',
    pidStrat: 0,
    pancakeMasterChef: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    isPancake: false,
  },
  
]

export default farms
