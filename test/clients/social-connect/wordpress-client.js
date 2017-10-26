const {selector} = require('../../globals.webdriverio.js');
const {external} = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class WordpressClient extends SocialConnect {

    constructor() {
        super();
        this._websiteUrl = "";
        this._redirectUrl = "";
        this._javascriptOriginsUrl = "";
        this._key = "";
        this._secret = "";
    }

    get websiteUrl() {
        return this._websiteUrl;
    }

    get redirectUrl() {
        return this._redirectUrl;
    }

    get javascriptOriginsUrl() {
        return this._javascriptOriginsUrl;
    }

    get key() {
        return this._key;
    }

    get secret() {
        return this._secret;
    }

    set websiteUrl(value) {
        this._websiteUrl = value;
    }

    set redirectUrl(value) {
        this._redirectUrl = value;
    }

    set javascriptOriginsUrl(value) {
        this._javascriptOriginsUrl = value;
    }

    set key(value) {
        this._key = value;
    }

    set secret(value) {
        this._secret = value;
    }

    clickOnDevelopersLink(name) {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Wordpress.website_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Wordpress.website_url_input, 'value'))
            .then((website_url) => this.websiteUrl = website_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Wordpress.redirect_uri_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Wordpress.redirect_uri_input, 'value'))
            .then((redirect_url) => this.redirectUrl = redirect_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Wordpress.javascript_origins_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Wordpress.javascript_origins_input, 'value'))
            .then((javascript_origins) => this.javascriptOriginsUrl = javascript_origins)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    fillWordpressSignInForm(login = "prestotests+wordpress@gmail.com", password = "presto_tests") {
        return this.client
            .waitForExist(external.FO.Wordpress.username_input, 90000)
            .setValue(external.FO.Wordpress.username_input, login)
            .setValue(external.FO.Wordpress.password_input, password)
            .waitForExist(external.FO.Wordpress.login_button, 90000)
            .click(external.FO.Wordpress.login_button)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Wordpress.app_link, 90000)
            .click(external.FO.Wordpress.app_link)
            .pause(5000);
    }

    clickOnManageSettingsSubTab() {
        return this.client
            .waitForExist(external.FO.Wordpress.customer_key_td, 90000)
            .then(() => this.client.getText(external.FO.Wordpress.customer_key_td))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Wordpress.customer_secret_td)
            .then(() => this.client.getText(external.FO.Wordpress.customer_secret_td))
            .then((secret) => this.secret = secret.substring(0, secret.lastIndexOf("Reset Key")))

            .waitForExist(external.FO.Wordpress.manage_settings_subtab, 90000)
            .click(external.FO.Wordpress.manage_settings_subtab)
            .pause(5000);
    }

    setWebsiteUrl() {
        return this.client
            .waitForExist(external.FO.Wordpress.website_url_input, 90000)
            .setValue(external.FO.Wordpress.website_url_input, this.websiteUrl)
            .pause(5000);
    }

    setRedirectUrl() {
        return this.client
            .waitForExist(external.FO.Wordpress.redirect_uri_input, 90000)
            .setValue(external.FO.Wordpress.redirect_uri_input, this.redirectUrl)
            .pause(5000);
    }

    setJavascriptOriginsUrl() {
        return this.client
            .waitForExist(external.FO.Wordpress.javascript_origins_input, 90000)
            .setValue(external.FO.Wordpress.javascript_origins_input, this.javascriptOriginsUrl)
            .pause(5000);
    }

    clickOnUpdateButton() {
        return this.client
            .waitForExist(external.FO.Wordpress.update_button, 90000)
            .click(external.FO.Wordpress.update_button)
            .pause(5000)
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Wordpress.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Wordpress.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Wordpress.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Wordpress.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Wordpress.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Wordpress.save_button)
            .pause(5000);
    }

    clickOnWordpressButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingWordpressAccount(login = 'prestotests+wordpress@gmail.com', password = 'presto_tests') {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Wordpress.username_input, 90000)
            .waitForExist(selector.FO.SocialConnect.Wordpress.password_input, 90000)
            .setValue(selector.FO.SocialConnect.Wordpress.username_input, login)
            .setValue(selector.FO.SocialConnect.Wordpress.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Wordpress.login_button, 90000)
            .click(selector.FO.SocialConnect.Wordpress.login_button)

            .pause(3000)
            .waitForExist(selector.FO.Wordpress.allow_button, 90000)
            .click(selector.FO.Wordpress.allow_button)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }
}

module.exports = WordpressClient;

