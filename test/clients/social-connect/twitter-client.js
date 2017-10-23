const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');
const { external } = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class TwitterClient extends SocialConnect{

    constructor() {
        super();
        this.client = getClient();
        this._websiteUrl = "";
        this._callbackUrl = "";
        this._key = "";
        this._secret = "";
    }

    get websiteUrl(){
        return this._websiteUrl;
    }

    get callbackUrl(){
        return this._callbackUrl;
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

    set callbackUrl(value){
        this._callbackUrl = value;
    }

    set key(value){
        this._key = value;
    }

    set secret(value){
        this._secret = value;
    }

    clickOnDevelopersLink(name) {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Twitter.website_field_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Twitter.website_field_input, 'value'))
            .then((website) => this.websiteUrl = website)

            .waitForExist(selector.BO.ModulePageSocialConnect.Twitter.callback_field_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Twitter.callback_field_input, 'value'))
            .then((callback) => this.callbackUrl = callback)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    clickOnSignInButton() {
        return this.client
            .waitForExist(external.FO.Twitter.signein_button, 90000)
            .click(external.FO.Twitter.signein_button)
            .pause(5000);
    }

    fillTwitterSignInForm(login="prestotests+twitter@gmail.com", password="presto_tests") {
        return this.client
            .waitForExist(external.FO.Twitter.signein_login_input, 90000)
            .setValue(external.FO.Twitter.signein_login_input, login)
            .setValue(external.FO.Twitter.signein_password_input, password)
            .waitForExist(external.FO.Twitter.signein_connect_input, 90000)
            .click(external.FO.Twitter.signein_connect_input)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Twitter.app_link, 90000)
            .click(external.FO.Twitter.app_link)
            .pause(5000);
    }

    clickOnSettingsTab() {
        return this.client
            .waitForExist(external.FO.Twitter.settings_tab, 90000)
            .click(external.FO.Twitter.settings_tab)
            .pause(5000);
    }

    setWebsiteUrl() {
        return this.client
            .waitForExist(external.FO.Twitter.website_url_input, 90000)
            .setValue(external.FO.Twitter.website_url_input, this.websiteUrl)
            .pause(5000);
    }

    setCallbackUrl() {
        return this.client
            .waitForExist(external.FO.Twitter.callback_url_input, 90000)
            .setValue(external.FO.Twitter.callback_url_input, this.callbackUrl)
            .pause(5000);
    }

    clickOnUpdateSettingsButton() {
        return this.client
            .waitForExist(external.FO.Twitter.update_settings_button, 90000)
            .click(external.FO.Twitter.update_settings_button)
            .pause(5000);
    }

    clickOnKeysAccessTokens() {
        return this.client
            .waitForExist(external.FO.Twitter.key_and_access_tokens_tab, 90000)
            .click(external.FO.Twitter.key_and_access_tokens_tab)

            .waitForExist(external.FO.Twitter.customer_api_key, 90000)
            .then(() => this.client.getText(external.FO.Twitter.customer_api_key))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Twitter.customer_api_secret, 90000)
            .then(() => this.client.getText(external.FO.Twitter.customer_api_secret))
            .then((secret) => this.secret = secret)

            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Twitter.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Twitter.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Twitter.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Twitter.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Twitter.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Twitter.save_button)
            .pause(5000);
    }

    clickOnTwitterButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingTwitterAccount(login='prestotests+twitter@gmail.com', password='presto_tests') {
        return this.client
            .waitForVisible(selector.FO.SocialConnect.Twitter.username_input, 90000)
            .setValue(selector.FO.SocialConnect.Twitter.username_input, login)
            .setValue(selector.FO.SocialConnect.Twitter.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Twitter.allow_button, 90000)
            .click(selector.FO.SocialConnect.Twitter.allow_button)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }

    linkedAccount(login) {
        return this.client
            .waitForVisible(selector.FO.SocialConnect.Twitter.linked_modale, 90000)
            .setValue(selector.FO.SocialConnect.Twitter.email_input, login)
            .waitForExist(selector.FO.SocialConnect.Twitter.send_button, 90000)
            .click(selector.FO.SocialConnect.Twitter.send_button)
            .pause(3000)

            .then(() => this.client.getText(selector.FO.SocialConnect.Twitter.check_sent_email_p))
            .then((value) => {expect(value).to.eql("Password has been sent to your mailbox: "+login)})
            .url('https://' + URL)
            .pause(5000);
    }

}

module.exports = TwitterClient;

