const TowerClient = require('../tower-client');

describe('Dashboard/MyStore - Front Office', () => {
    const towerClient = new TowerClient();
    it('sign in', () => towerClient.fillSignInForm());
    it('click on back office button', () => towerClient.clickOnFrontOfficeButton());
    it('close browser', () => towerClient.close());
});
