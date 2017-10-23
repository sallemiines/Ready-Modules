const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');
const { external } = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class GithubClient extends SocialConnect{

    constructor() {
        super();
        this.client = getClient();
        this._homePageUrl = "";
        this._callbackUrl = "";
        this._key = "";
        this._secret = "";
    }

    get homePageUrl(){
        return this._homePageUrl;
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

    set homePageUrl(value){
        this._homePageUrl = value;
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
            .waitForExist(selector.BO.ModulePageSocialConnect.Github.home_page_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Github.home_page_url_input, 'value'))
            .then((home_page) => this.homePageUrl = home_page)

            .waitForExist(selector.BO.ModulePageSocialConnect.Github.callback_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Github.callback_url_input, 'value'))
            .then((callback) => this.callbackUrl = callback)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))

            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    fillGithubSignInForm(login="prestotests+github@gmail.com", password="presto_tests1") {
        return this.client
            .waitForExist(external.FO.Github.username_input, 90000)
            .setValue(external.FO.Github.username_input, login)
            .setValue(external.FO.Github.password_input, password)
            .waitForExist(external.FO.Github.allow_button, 90000)
            .click(external.FO.Github.allow_button)
            .pause(5000);
    }

    clickOnCancelButton() {
        return this.client
            .waitForExist(external.FO.Github.cancel_button, 90000)
            .click(external.FO.Github.cancel_button)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Github.app_link, 90000)
            .click(external.FO.Github.app_link)
            .pause(5000);
    }

    setHomePageUrl() {
        return this.client
            .waitForExist(external.FO.Github.customer_key_dd, 90000)
            .then(() => this.client.getText(external.FO.Github.customer_key_dd))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Github.customer_secret_dd, 90000)
            .then(() => this.client.getText(external.FO.Github.customer_secret_dd))
            .then((secret) => this.secret = secret)

            .moveToObject(external.FO.Github.update_button, 90000)
            .waitForExist(external.FO.Github.application_url_input, 90000)
            .setValue(external.FO.Github.application_url_input, this.homePageUrl)
            .pause(5000);
    }

    setCallbackUrl() {
        return this.client
            .waitForExist(external.FO.Github.application_callback_url_input, 90000)
            .setValue(external.FO.Github.application_callback_url_input, this.callbackUrl)
            .pause(5000);
    }

    clickOnUpdateButton() {
        return this.client
            .waitForExist(external.FO.Github.update_button, 90000)
            .click(external.FO.Github.update_button)

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Github.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Github.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Github.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Github.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Github.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Github.save_button)
            .pause(5000);
    }

    clickOnGithubButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingGithubAccount(login='prestotests+github@gmail.com', password='presto_tests1') {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Github.username_input, 90000)
            .setValue(selector.FO.SocialConnect.Github.username_input, login)
            .setValue(selector.FO.SocialConnect.Github.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Github.allow_button, 90000)
            .click(selector.FO.SocialConnect.Github.allow_button)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }
}

module.exports = GithubClient;

