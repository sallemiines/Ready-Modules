const TowerClient = require('../tower-client');

describe('Dashboard/MyStore - Back Office', () => {
    const towerClient = new TowerClient();
    it('sign in', () => towerClient.fillSignInForm());
    it('click on back office button', () => towerClient.clickOnBackOfficeButton());
    it('close browser', () => towerClient.close());
});
