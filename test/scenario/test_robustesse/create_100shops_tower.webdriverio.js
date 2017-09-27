const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');

describe('Create Slow 100 shops', function() {
    for (var i = 100; i >= 0; i--) {
        it('Open the selfcare signup page to set email', function(done) {
            global.fctname = this.test.title;
            var date1 = new Date().getTime();
            getClient()
            .url('https://' + URL + '-tower.prestashop.net/signup')
            .waitForExist(selector.signup_email_field, 60000)
            .waitForExist(selector.signup_password_field, 60000)
            .setValue(selector.signup_email_field, date1 + new_customer_email)
            .setValue(selector.signup_password_field, 'azerty1234')
            .click(selector.signup_nextemail_btn)
            .call(done);
        });

        it('Open the selfcare signup page to set name', function(done) {
            global.fctname = this.test.title;
            this.client
            .waitForExist(selector.signup_name_field, 60000)
            .waitForExist(selector.signup_surname_field, 60000)
            .setValue(selector.signup_name_field, 'maurice')
            .setValue(selector.signup_surname_field, 'martin')
            .click(selector.signup_nextname_btn)
            .call(done);
        });

        it('Open the selfcare signup page to set shop name', function(done) {
            global.fctname = this.test.title;
            var date2 = new Date().getTime();
            this.client

            .waitForExist(selector.signup_shopname_field, 60000)
            .waitForExist(selector.signup_subdomain_field, 60000)
            .setValue(selector.signup_shopname_field, 'robustesseshop' + date2)
            .waitForExist(selector.signup_nextshop_btn, 90000)
            .click(selector.signup_nextshop_btn)
            .call(done);
        });

        it('Open the selfcare signup page to set country', function(done) {
            global.fctname = this.test.title;
            this.client
            .waitForExist(selector.signup_country_list, 30000)
            .selectByIndex(selector.signup_country_list, 3)
            .selectByIndex(selector.signup_language_list, 2)
            .click(selector.signup_cgv_checkbox)
            .click(selector.signup_nextcountry_btn)
            .pause(5000)
            .call(done);
        });

        it('Disconnect from the dashboard', function(done) {
            global.fctname = this.test.title;
            console.log("new shop pushed with love :-*");
            this.client
            .click(selector.dashboard_profilname_link)
            .pause(500)
            .click(selector.dashboard_disconnect_link)
            .call(done);
        });

    }

});