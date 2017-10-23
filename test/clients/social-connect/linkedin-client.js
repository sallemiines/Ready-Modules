const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');
const { external } = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class LinkedinClient extends SocialConnect{

    constructor() {
        super();
        this.client = getClient();
        this._websiteUrl = "";
        this._key = "";
        this._secret = "";
    }

    get websiteUrl(){
        return this._websiteUrl;
    }

    get key(){
        return this._key;
    }

    get secret(){
        return this._secret;
    }

    set websiteUrl(value){
        this._websiteUrl = value;
    }

    set key(value){
        this._key = value;
    }

    set secret(value){
        this._secret = value;
    }

    clickOnDevelopersLink(name) {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Linkedin.website_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Linkedin.website_url_input, 'value'))
            .then((website) => this.websiteUrl = website)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    clickOnIdentifyButton() {
        return this.client
            .waitForExist(external.FO.Linkedin.identify_button, 90000)
            .click(external.FO.Linkedin.identify_button)
            .pause(5000);
    }

    fillLinkedinSignInForm(login="prestotestslinkedin@gmail.com", password="presto_tests") {
        return this.client
            .waitForExist(external.FO.Linkedin.username_input, 90000)
            .setValue(external.FO.Linkedin.username_input, login)
            .setValue(external.FO.Linkedin.password_input, password)
            .waitForExist(external.FO.Linkedin.signin_button, 90000)
            .click(external.FO.Linkedin.signin_button)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Linkedin.app_link, 90000)
            .click(external.FO.Linkedin.app_link)
            .pause(5000);
    }

    clickOnPreferencesMenu() {
        return this.client
            .waitForExist(external.FO.Linkedin.customer_key_span, 90000)
            .then(() => this.client.getText(external.FO.Linkedin.customer_key_span))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Linkedin.customer_secret_span, 90000)
            .then(() => this.client.getText(external.FO.Linkedin.customer_secret_span))
            .then((secret) => this.secret = secret)

            .waitForExist(external.FO.Linkedin.preferences_button, 90000)
            .click(external.FO.Linkedin.preferences_button)
            .pause(5000);
    }

    setWebsiteUrl() {
        return this.client
            .waitForExist(external.FO.Linkedin.website_url_input, 90000)
            .click(external.FO.Linkedin.website_url_input)
            .setValue(external.FO.Linkedin.website_url_input, this.websiteUrl)
            .pause(5000);
    }

    clickOnUpdateButton() {
        return this.client
            .moveToObject(external.FO.Linkedin.update_button)
            .click(external.FO.Linkedin.update_button)

            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Linkedin.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Linkedin.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Linkedin.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Linkedin.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Linkedin.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Linkedin.save_button)
            .pause(5000);
    }

    clickOnLinkedinButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingLinkedinAccount(login='prestotestslinkedin@gmail.com', password='presto_tests') {
        return this.client
            .waitForVisible(selector.FO.SocialConnect.Linkedin.username_input, 90000)
            .setValue(selector.FO.SocialConnect.Linkedin.username_input, login)
            .setValue(selector.FO.SocialConnect.Linkedin.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Linkedin.allow_button, 90000)
            .click(selector.FO.SocialConnect.Linkedin.allow_button)
            .pause(2000)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))

            .pause(5000);
    }
}

module.exports = LinkedinClient;

