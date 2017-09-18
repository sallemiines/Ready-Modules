'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
var numb = 0

describe('Ready Shop Creation ', function () {
       
    common.initMocha.call(this);
    console.log("*******************Let's have fun!!!****************");
    
    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);



    it('Open the selfcare signup page to set email', function (done) {
        global.fctname = this.test.title;
        this.client
            .url('https://' + URL +'-tower.prestashop.net/signin')
            .waitForExist(this.selector.signin_loginemail_field, 60000)
            .waitForExist(this.selector.signin_password_field, 60000)
            .setValue(this.selector.signin_loginemail_field, 'thetester@ps.com')
            .setValue(this.selector.signin_password_field, 'azerty1234')
            .click(this.selector.signin_connection_btn)
            .pause(5000)
            .call(done);
    });


    it('Disconnect from the dashboard', function (done) {
        global.fctname = this.test.title;
        console.log("new shop pushed with love :-*");
        this.client
            .click(this.selector.dashboard_profilname_link)
            .pause(500)
            .click(this.selector.dashboard_disconnect_link)
            .call(done);
    });

//}
        

});