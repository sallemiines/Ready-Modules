const { getClient } = require('../common.webdriverio');
const { selector } = require('../globals.webdriverio');

describe('Sign In : wrong values', function () {

    it('Try to set wrong email format', function (done) {
        global.fctname = this.test.title;
        getClient()
            .url('https://' + URL +'-tower.prestashop.net/signin')
            .waitForExist(selector.signin_loginemail_field, 60000)
            .waitForExist(selector.signin_password_field, 60000)
            .setValue(selector.signin_loginemail_field, 'thetesterps.com')
            .pause(10000)
    //        .waitForExist(selector.signin_errormsg_wrongemailformat_txt, 20000)
            .waitForText(selector.signin_errormsg_wrongemailformat_txt, 3000)
            .pause(15000)
            .call(done);
    });

    it('Try to set wrong credentials', function (done) {
        global.fctname = this.test.title;
        console.log("fin");
        getClient()
            .clearElement(selector.signin_loginemail_field)
            .setValue(selector.signin_loginemail_field, 'thetester@ps.com')
            .setValue(selector.signin_password_field, 'azerty4321')
            .click(selector.signin_connection_btn)
            .waitForText(selector.signin_errormsg_loginincorrect_txt, 60000)
            .clearElement(selector.signin_loginemail_field)
            .clearElement(selector.signin_password_field)
            .pause(20000)
    //    console.log("fin");
            .call(done);
    });


});
