const PresthostClient = require('../clients/presthost-client');
const waitFor = require('./wait-builder').waitFor;

const presthostClient = new PresthostClient('https://integration-presthost.prestashop.net', 'shraheothVissyutNepgerrObryegif2.WryedghacThoFrikiltUnboBlidAlOc');

const shopIsReady = res => {
    const data = res.data;
    console.log(`Shop ${res.id} is creating ... db:${data.db.status}, gke:${data.gke.status}, nfs:${data.nfs.status}, version:${res.prestashop_version}`);
    return data.db.status === 0 && data.gke.status === 0 && data.nfs.status === 0;
};

const shopIsUpdated = res => {
    console.log(`Shop ${res.id} is updating ... version:${res.prestashop_version}`);
    return res.data.upgrade_status === 1;
};

describe('Shop-Upgrade', () => {

    it('should upgrade shop to the latest version', () => {
        const fromRelease = '1.7.2.1__20170921';
        const toRelease = '1.7.2.1__20171009';
        const id = `shopupgrade${new Date().getTime()}`;
        return presthostClient.createShop({ id, preset: 'normal', release: fromRelease })
        .then(() =>
            waitFor(() => presthostClient.getShop(id))
            .until(shopIsReady)
            .assert(() => {
                console.log('Shop is ready!');
                return presthostClient.upgradeShop(id, toRelease)
                .then(() =>
                    waitFor(() => presthostClient.getShop(id))
                    .times(10 * 60)
                    .until(shopIsUpdated)
                    .assert(() => console.log('Shop is updated!')));
            }));
    });

});
