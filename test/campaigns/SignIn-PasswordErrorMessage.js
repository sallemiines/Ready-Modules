const { selector } = require('../globals.webdriverio');
const TowerClient = require('../tower-client');

describe('SignIn - PasswordErrorMessage', () => {
    const towerClient = new TowerClient();
    it('sign in', () => towerClient.fillSignInForm('theteste@rps.com', 'azerty4321'));
    it('error message is displayed', () => towerClient.waitForText(selector.signin_errormsg_loginincorrect_txt, 60000));
    it('close browser', () => towerClient.close());
});
