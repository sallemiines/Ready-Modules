const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');
const { external } = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class GoogleClient extends SocialConnect{

    constructor() {
        super();
        this.client = getClient();
        this._javaScriptOrigins = "";
        this._authorizedRedirectUri = "";
        this._key = "";
        this._secret = "";
    }

    get javaScriptOrigins(){
        return this._javaScriptOrigins;
    }

    get authorizedRedirectUri(){
        return this._authorizedRedirectUri;
    }

    get key(){
        return this._key;
    }

    get secret(){
        return this._secret;
    }

    set javaScriptOrigins(value){
        this._javaScriptOrigins = value;
    }

    set authorizedRedirectUri(value){
        this._authorizedRedirectUri = value;
    }

    set key(value){
        this._key = value;
    }

    set secret(value){
        this._secret = value;
    }

    clickOnDevelopersLink(name) {
        var developer_link = selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name);
        developer_link = developer_link.replace('3', '9');
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Google.authorized_javaScript_origins_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Google.authorized_javaScript_origins_input, 'value'))
            .then((javaScript_oigins) => this.javaScriptOrigins = javaScript_oigins)

            .waitForExist(selector.BO.ModulePageSocialConnect.Google.authorized_redirect_uri_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Google.authorized_redirect_uri_input, 'value'))
            .then((authorized_redirect_uri) => this.authorizedRedirectUri = authorized_redirect_uri)

            .waitForExist(developer_link, 90000)
            .click(developer_link)
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    fillGoogleSignInForm(login="prestotests@gmail.com", password="presto_tests") {
        return this.client
            .waitForExist(external.FO.Google.username_input, 90000)
            .setValue(external.FO.Google.username_input, login)
            .waitForExist(external.FO.Google.identifier_next_button, 90000)
            .click(external.FO.Google.identifier_next_button)
            .pause(5000)
            .waitForVisible(external.FO.Google.password_input, 90000)
            .setValue(external.FO.Google.password_input, password)
            .waitForExist(external.FO.Google.password_next_button, 90000)
            .click(external.FO.Google.password_next_button)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Google.app_link, 90000)
            .click(external.FO.Google.app_link)
            .pause(5000);
    }

    clickOnIdentifiantsMenu() {
        return this.client
            .waitForExist(external.FO.Google.settings_button, 90000)
            .click(external.FO.Google.settings_button)

            .waitForExist(external.FO.Google.api_and_services_menu, 90000)
            .moveToObject(external.FO.Google.api_and_services_menu)
            .pause(3000)

            .waitForExist(external.FO.Google.identifiants_submenu, 90000)
            .click(external.FO.Google.identifiants_submenu)
            .pause(3000);
    }

    clickOnCreateIdentifiantButton() {
        return this.client
            .waitForExist(external.FO.Google.create_identifiant_button, 90000)
            .click(external.FO.Google.create_identifiant_button)
            .pause(5000);
    }

    clickOnOauthButton() {
        return this.client
            .waitForExist(external.FO.Google.identifiant_customer_oauth_link, 90000)
            .click(external.FO.Google.identifiant_customer_oauth_link)
            .pause(5000);
    }

    selectTypeApplication() {
        return this.client
            .waitForExist(external.FO.Google.application_web_checkbox, 90000)
            .click(external.FO.Google.application_web_checkbox)
            .pause(5000);
    }

    setJavaScriptOrigins() {
        return this.client
            .waitForVisible(external.FO.Google.authorized_javaScript_input, 90000)
            .pause(5000)
            .click(external.FO.Google.authorized_javaScript_input)
            .keys(this.javaScriptOrigins)
            .click(external.FO.Google.click_outside_p)
            .pause(5000);
    }

    setAuthorizedRedirectUri() {
        return this.client
            .waitForExist(external.FO.Google.authorized_redirect_input, 90000)
            .pause(5000)
            .click(external.FO.Google.authorized_redirect_input)
            .keys(this.authorizedRedirectUri)
            .click(external.FO.Google.click_outside_p)
            .pause(5000);
    }

    clickOnCreateButton() {
        return this.client
            .waitForExist(external.FO.Google.create_button, 90000)
            .click(external.FO.Google.create_button)
            .pause(5000);
    }

    clickOnOkButton() {
        return this.client

            .waitForExist(external.FO.Google.api_key, 90000)
            .then(() => this.client.getText(external.FO.Google.api_key))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Google.api_secret, 90000)
            .then(() => this.client.getText(external.FO.Google.api_secret))
            .then((secret) => this.secret = secret)

            .waitForExist(external.FO.Google.ok_button, 90000)
            .click(external.FO.Google.ok_button)
            .pause(5000)

            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Google.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Google.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Google.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Google.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Google.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Google.save_button)
            .pause(5000);
    }

    clickOnGoogleButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingGoogleAccount(login='prestotests@gmail.com', password='presto_tests') {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Google.username_input, 90000)
            .setValue(selector.FO.SocialConnect.Google.username_input, login)
            .waitForExist(selector.FO.SocialConnect.Google.identifier_next_button, 90000)
            .click(selector.FO.SocialConnect.Google.identifier_next_button)
            .pause(5000)
            .waitForVisible(selector.FO.SocialConnect.Google.password_input, 90000)
            .setValue(selector.FO.SocialConnect.Google.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Google.password_next_button, 90000)
            .click(selector.FO.SocialConnect.Google.password_next_button)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }
}

module.exports = GoogleClient;

