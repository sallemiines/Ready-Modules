const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');
const { external } = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class MicrosoftClient extends SocialConnect{

    constructor() {
        super();
        this.client = getClient();
        this._redirectUrl = "";
        this._key = "";
        this._secret = "";
    }

    get redirectUrl(){
        return this._redirectUrl;
    }

    get key(){
        return this._key;
    }

    get secret(){
        return this._secret;
    }

    set redirectUrl(value){
        this._redirectUrl = value;
    }

    set key(value){
        this._key = value;
    }

    set secret(value){
        this._secret = value;
    }

    waitForConfigurePage(name) {
        let other_name = "";
        if(name === 'hotmail'){
            other_name = 'microsoft';
        }
        return this.client.waitForText(selector.BO.ModulePageSocialConnect.Common.title_page_name.replace("%NAME", name), 15000)
            .then(() => this.client.getText(selector.BO.ModulePageSocialConnect.Common.title_page_name.replace("%NAME", name)))
            .then((title) => {expect(title).to.have.string(other_name.toUpperCase())})
            .pause(5000);
    }

    clickOnDevelopersLink(name) {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Microsoft.redirect_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Microsoft.redirect_url_input, 'value'))
            .then((redirect_url) => this.redirectUrl = redirect_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    fillMicrosoftSignInForm(login="prestotests@outlook.com", password="presto_tests") {
        return this.client
            .waitForExist(external.FO.Microsoft.username_input, 90000)
            .setValue(external.FO.Microsoft.username_input, login)
            .waitForExist(external.FO.Microsoft.next_button, 90000)
            .click(external.FO.Microsoft.next_button)
            .pause(5000)

            .waitForExist(external.FO.Microsoft.password_input, 90000)
            .setValue(external.FO.Microsoft.password_input, password)
            .waitForExist(external.FO.Microsoft.next_button, 90000)
            .click(external.FO.Microsoft.next_button)
            .pause(5000);
    }

    clickOnCancelButton() {
        return this.client
            .waitForVisible(external.FO.Microsoft.cancel_button, 90000)
            .click(external.FO.Microsoft.cancel_button)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Microsoft.app_link, 90000)
            .click(external.FO.Microsoft.app_link)
            .pause(5000);
    }

    setRedirectUrl() {
        return this.client
            .waitForExist(external.FO.Microsoft.customer_key_div, 90000)
            .then(() => this.client.getText(external.FO.Microsoft.customer_key_div))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Microsoft.customer_secret_td, 90000)
            .then(() => this.client.getText(external.FO.Microsoft.customer_secret_td))
            .then((secret) => this.secret = secret[1])

            .moveToObject(external.FO.Microsoft.add_profile_button, 90000)
            .setValue(external.FO.Microsoft.redirect_url_input, this.redirectUrl)
            .pause(5000);
    }

    clickOnSaveButton() {
        return this.client
            .moveToObject(external.FO.Microsoft.save_button)
            .click(external.FO.Microsoft.save_button)

            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Microsoft.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Microsoft.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Microsoft.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Microsoft.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Microsoft.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Microsoft.save_button)
            .pause(5000);
    }

    clickOnMicrosoftButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingMicrosoftAccount(login='prestotests@outlook.com', password='presto_tests') {
        return this.client
            .waitForVisible(selector.FO.SocialConnect.Microsoft.username_input, 90000)
            .setValue(selector.FO.SocialConnect.Microsoft.username_input, login)
            .waitForExist(selector.FO.SocialConnect.Microsoft.next_button, 90000)
            .click(selector.FO.SocialConnect.Microsoft.next_button)
            .pause(2000)

            .waitForVisible(selector.FO.SocialConnect.Microsoft.password_input, 90000)
            .setValue(selector.FO.SocialConnect.Microsoft.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Microsoft.next_button, 90000)
            .click(selector.FO.SocialConnect.Microsoft.next_button)
            .pause(2000)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }
}

module.exports = MicrosoftClient;

