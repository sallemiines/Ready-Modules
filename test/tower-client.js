const { createClient } = require('./common.webdriverio');
const { selector } = require('./globals.webdriverio.js');

class TowerClient {

    constructor() {
        this.client = createClient();
    }

    fillSignInForm(login = 'thetester@ps.com', password = 'azerty1234') {
        return this.client
        .url(`https://${URL}-tower.prestashop.net/signin`)
        .waitForExist(selector.signin_loginemail_field, 60000)
        .waitForExist(selector.signin_password_field, 60000)
        .setValue(selector.signin_loginemail_field, login)
        .setValue(selector.signin_password_field, password)
        .click(selector.signin_connection_btn)
        .pause(5000);
    }

    logout() {
        this.client.url(`https://${URL}-tower.prestashop.net/signout`);
    }

    fillSignUpPage1() {
        return this.client
        .url('https://' + URL + '-tower.prestashop.net/signup')
        .waitForExist(selector.signup_email_field, 60000)
        .waitForExist(selector.signup_password_field, 60000)
        .setValue(selector.signup_email_field, new Date().getTime() + new_customer_email)
        .setValue(selector.signup_password_field, 'azerty1234')
        .click(selector.signup_nextemail_btn);
    }

    fillSignUpPage2() {
        return this.client.waitForExist(selector.signup_name_field, 60000)
        .waitForExist(selector.signup_surname_field, 60000)
        .setValue(selector.signup_name_field, 'maurice')
        .setValue(selector.signup_surname_field, 'martin')
        .click(selector.signup_nextname_btn);
    }

    fillSignUpPage3() {
        return this.client.waitForExist(selector.signup_shopname_field, 60000)
        .waitForExist(selector.signup_subdomain_field, 60000)
        .setValue(selector.signup_shopname_field, `robustesseshop${new Date().getTime()}`)
        .waitForExist(selector.signup_nextshop_btn, 90000)
        .click(selector.signup_nextshop_btn);
    }

    fillSignUpPage4() {
        return this.client
        .waitForExist(selector.signup_country_list, 30000)
        .selectByIndex(selector.signup_country_list, 3)
        .selectByIndex(selector.signup_language_list, 2)
        .click(selector.signup_cgv_checkbox)
        .click(selector.signup_nextcountry_btn);
    }

    pause(value) {
        return this.client.pause(value);
    }

    clickOnBackOfficeButton() {
        return this.client
        .waitForExist(selector.dashboard_backoffice_btn, 180000)
        .waitForExist(selector.dashboard_frontoffice_btn, 180000)
        .click(selector.dashboard_backoffice_btn);
    }

    clickOnFrontOfficeButton() {
        this.client.click(selector.dashboard_frontoffice_btn);
    }

    clickOnProfileName() {
        return this.client.click(selector.dashboard_profilname_link).pause(500);
    }

    close() {
        this.client.end();
        return Promise.resolve();
    };

    clickOnDisconnect() {
        return this.client.click(selector.dashboard_disconnect_link);
    }

    waitForBackOfficeButton() {
        return this.client.waitForExist(selector.dashboard_backoffice_btn, 3 * 60000);
    }

    waitForFrontOfficeButton() {
        this.client.waitForExist(selector.dashboard_frontoffice_btn, 3 * 60000);
    }

    waitForText(text, timeout = 3000) {
        return this.client.waitForText(text, timeout);
    }

    takeScreenshot() {
        return this.client.saveScreenshot(`${__dirname}/screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}_${global.fctname}.png`);
    }

}

module.exports = TowerClient;

