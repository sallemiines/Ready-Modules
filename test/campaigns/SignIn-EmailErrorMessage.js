const { selector } = require('../globals.webdriverio');

scenario('SignIn - EmailErrorMessage', client => {
    test('open brower', () => client.open());
    test('sign in', () => client.fillSignInForm('thetesterps.com'));
    test('error message is displayed', () => client.waitForText(selector.signin_errormsg_wrongemailformat_txt));
});
