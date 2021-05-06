import { networks } from '@psf/bitcoincashjs-lib';

export const environment = {
	production: false,
	testnet: true,
	explorer: 'https://explorer.api.bitcoin.com/bch/v1/',
	network: networks.testnet
};
