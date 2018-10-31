let env = {
	REACT_APP_BLOCKCHAIN_IP: 'http://blockchain_uat.ixo.world',
	REACT_APP_BLOCK_SYNC_URL: 'https://exploreruat.ixo.world'
}

const dev_env = {
	// local dev environment
	REACT_APP_BLOCKCHAIN_IP: 'http://192.168.1.253:5000',
	REACT_APP_BLOCK_SYNC_URL: 'http://192.168.1.253:8080'
}

if (__DEV__) {
	env = dev_env;
}

export { env };
