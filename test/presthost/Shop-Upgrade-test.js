const waitFor = require('./wait-builder').waitFor;
const config = require('config');

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
        const fromRelease = config.get('shop_upgrade.initial_version');
        const toRelease = config.get('shop_upgrade.target_version');
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
