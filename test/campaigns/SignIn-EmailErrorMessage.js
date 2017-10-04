const { selector } = require('../globals.webdriverio');
const TowerClient = require('../tower-client');

describe('SignIn - EmailErrorMessage', () => {
    const towerClient = new TowerClient();
    it('sign in', () => towerClient.fillSignInForm('thetesterps.com'));
    it('error message is displayed', () => towerClient.waitForText(selector.signin_errormsg_wrongemailformat_txt));
    it('close browser', () => towerClient.close());
});
