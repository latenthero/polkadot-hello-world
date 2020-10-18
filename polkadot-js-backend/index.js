const { ApiPromise, WsProvider } = require('@polkadot/api');

async function run() {
    provider = new WsProvider('wss://rpc.polkadot.io');
    api = await ApiPromise.create({ provider: provider });
    header = await api.rpc.chain.getHeader();
    console.log("Latest block number: " + header.number);
    return;
};

run().then(() => process.exit(0)).catch(console.error);
