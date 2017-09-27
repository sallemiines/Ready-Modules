const { getClient } = require('../common.webdriverio');
const { selector } = require('../globals.webdriverio');

describe('Sign In to Tower', function() {
    it('Fill Sign In form', function(done) {
        global.fctname = this.test.title;
        getClient()
        .url('https://' + URL + '-tower.prestashop.net/signin')
        .waitForExist(selector.signin_loginemail_field, 60000)
        .waitForExist(selector.signin_password_field, 60000)
        .setValue(selector.signin_loginemail_field, 'thetester@ps.com')
        .setValue(selector.signin_password_field, 'azerty1234')
        .click(selector.signin_connection_btn)
        .pause(5000)
        .call(done);
    });

    it('Disconnect from the dashboard', function(done) {
        global.fctname = this.test.title;
        getClient()
        .click(selector.dashboard_profilname_link)
        .pause(500)
        .click(selector.dashboard_disconnect_link)
        .call(done);
    });

});
