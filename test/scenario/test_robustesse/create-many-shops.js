const TowerClient = require('../../tower-client');

const SHOP_COUNT = 40;

describe(`Create ${SHOP_COUNT} shops`, () => {
    for (let i = 1; i < (SHOP_COUNT + 1); i++) {
        it(`should create shop #${i}`, () => {
            const towerClient = new TowerClient();
            return towerClient.fillSignUpPage1()
            .then(() => towerClient.fillSignUpPage2())
            .then(() => towerClient.fillSignUpPage3())
            .then(() => towerClient.fillSignUpPage4())
            .then(() => towerClient.waitForBackOfficeButton())
            .then(() => towerClient.logout())
            .then(() => towerClient.close());
        });
    }
});
