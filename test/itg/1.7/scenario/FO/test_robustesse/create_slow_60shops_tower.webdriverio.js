'use strict';
var should = require('should');
var common = require('../../../common.webdriverio');
var globals = require('../../../globals.webdriverio.js');
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


    for (var i = 60 ; i >= 0; i--) {
    it('Open the selfcare signup page to set email', function (done) {
        global.fctname = this.test.title;
        var date1 = new Date().getTime();
        //var newname = numb + 1
        this.client
            .url('https://' + URL +'-tower.prestashop.net/signup')
            .waitForExist(this.selector.signup_email_field, 60000)
            .waitForExist(this.selector.signup_password_field, 60000)
            .setValue(this.selector.signup_email_field, date1 + new_customer_email)
            .pause(5000)
            .setValue(this.selector.signup_password_field, 'azerty1234')
            .pause(5000)
            .click(this.selector.signup_nextemail_btn)
            .call(done);
    });


    it('Open the selfcare signup page to set name', function (done) {
        global.fctname = this.test.title;
        this.client
            .waitForExist(this.selector.signup_name_field, 60000)
            .waitForExist(this.selector.signup_surname_field, 60000)
            .setValue(this.selector.signup_name_field, 'maurice')
            .pause(5000)
            .setValue(this.selector.signup_surname_field, 'martin')
            .pause(5000)
            .click(this.selector.signup_nextname_btn)
            .call(done);
    });

    it('Open the selfcare signup page to set shop name', function (done) {
        global.fctname = this.test.title;
        var date2 = new Date().getTime();
        this.client
            
            .waitForExist(this.selector.signup_shopname_field, 60000)
            .waitForExist(this.selector.signup_subdomain_field, 60000)
            .setValue(this.selector.signup_shopname_field, 'robustesseshop' + date2)
            .pause(5000)
            .waitForExist(this.selector.signup_nextshop_btn, 90000)
            .click(this.selector.signup_nextshop_btn)
            .call(done);
    });

    it('Open the selfcare signup page to set country', function (done) {
        global.fctname = this.test.title;
        this.client
            .waitForExist(this.selector.signup_country_list, 30000)
            .selectByIndex(this.selector.signup_country_list, 3)           
            .selectByIndex(this.selector.signup_language_list, 2)
            .pause(5000)
            .click(this.selector.signup_cgv_checkbox)
            .pause(5000)
            .click(this.selector.signup_nextcountry_btn)
            .pause(10000)
            .call(done);
    });

    it('Disconnect from the dashboard', function (done) {
        global.fctname = this.test.title;
        numb ++;
        console.log("new shop pushed slowly with love :-* (60sec) =>" + numb);
        this.client
            .pause(60000)
            .click(this.selector.dashboard_profilname_link)
            .click(this.selector.dashboard_disconnect_link)
            .call(done);
    });

}
        

});