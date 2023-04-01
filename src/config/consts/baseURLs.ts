import { DEFAULT_CHAIN_ID, pathFindersContract } from 'config/web3'
import { TMarketplaceType } from 'pages/Mint/types'
import { ExplorerDataType, getExplorerLink, getOpenSeaCollectionLink } from 'utils'

export const SOCIAL_URLS = {
  discord: 'https://discord.gg/etheriotgames',
  github: 'https://github.com/Etheriot-Games',
  youtube: 'https://www.youtube.com/channel/UCaO0nqCXuF9tabcDKPIK5Cw',
  twitter: 'https://twitter.com/EtheriotGames',
  etherscan: getExplorerLink(DEFAULT_CHAIN_ID, `${pathFindersContract.addressMap[DEFAULT_CHAIN_ID]}#code`, ExplorerDataType.ADDRESS),
  opensea: getOpenSeaCollectionLink(DEFAULT_CHAIN_ID, 'newwavegaming-1'),
}

export const COLLECTION_URLS: { [marketplace in TMarketplaceType]: string } = {
  opensea: getOpenSeaCollectionLink(DEFAULT_CHAIN_ID, 'newwavegaming-1'),
  rarible: `https://rarible.com/collection/${pathFindersContract.addressMap[DEFAULT_CHAIN_ID]}/items`,
  looksrare: '',
  blur: '',
  'magic eden': '',
}

export const ROUTE_LINKS = {
  home: 'https://www.etheriot.xyz/',
  docs: 'https://docs.etheriot.xyz/',
  play: 'https://www.coregames.com/games/6037df/galaxarian-odyssey',
}

export const DOCS_LINKS = {
  pathfinder: 'https://docs.etheriot.xyz/tokens-and-nfts/pathfinder-genesis-nfts',
  galaxaian_odyssey: 'https://docs.etheriot.xyz/games/galaxarian-odyssey/battle-pass',
  battlepass: 'https://www.etheriot.xyz/battle-pass',
  hcash: 'https://docs.etheriot.xyz/tokens-and-nfts/usdhcash',
  privacy: 'https://www.etheriot.xyz/privacypolicy',
  termsOfUse: 'https://docs.etheriot.xyz/getting-started/litepaper',
}
