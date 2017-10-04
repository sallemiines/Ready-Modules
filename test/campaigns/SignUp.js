const TowerClient = require('../tower-client');

describe('SignUp', () => {
    const towerClient = new TowerClient();
    it('should fill sign up page 1 successfully', () => towerClient.fillSignUpPage1());
    it('should fill sign up page 2 successfully', () => towerClient.fillSignUpPage2());
    it('should fill sign up page 3 successfully', () => towerClient.fillSignUpPage3());
    it('should fill sign up page 4 successfully', () => towerClient.fillSignUpPage4());
    it('should wait for shop creation', () => towerClient.waitForBackOfficeButton());
    it('close browser', () => towerClient.close());
});
