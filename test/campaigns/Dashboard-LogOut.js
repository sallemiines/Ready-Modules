const TowerClient = require('../tower-client');

describe('Dashboard/LogOut', () => {
    const towerClient = new TowerClient();
    it('sign in', () => towerClient.fillSignInForm());
    it('click on profile name', () => towerClient.clickOnProfileName());
    it('click on disconnect', () => towerClient.clickOnDisconnect());
    it('close browser', () => towerClient.close());
});
