import { networks } from '@psf/bitcoincashjs-lib';

export const environment = {
	production: true,
	testnet: false,
	explorer: 'https://explorer.api.bitcoin.com/bch/v1/',
	network: networks.bitcoin
};
