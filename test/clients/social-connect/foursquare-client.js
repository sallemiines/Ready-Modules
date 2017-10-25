const {selector} = require('../../globals.webdriverio.js');
const {external} = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class FoursquareClient extends SocialConnect {

    constructor() {
        super();
        this._welcomePageUrl = "";
        this._privacyPolicyUrl = "";
        this._redirectUrl = "";
        this._key = "";
        this._secret = "";
    }

    get welcomePageUrl() {
        return this._welcomePageUrl;
    }

    get privacyPolicyUrl() {
        return this._privacyPolicyUrl;
    }

    get redirectUrl() {
        return this._redirectUrl;
    }

    get key() {
        return this._key;
    }

    get secret() {
        return this._secret;
    }

    set welcomePageUrl(value) {
        this._welcomePageUrl = value;
    }

    set privacyPolicyUrl(value) {
        this._privacyPolicyUrl = value;
    }

    set redirectUrl(value) {
        this._redirectUrl = value;
    }

    set key(value) {
        this._key = value;
    }

    set secret(value) {
        this._secret = value;
    }

    clickOnDevelopersLink(name) {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Foursquare.welcome_page_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Foursquare.welcome_page_url_input, 'value'))
            .then((welcome_page) => this.welcomePageUrl = welcome_page)

            .waitForExist(selector.BO.ModulePageSocialConnect.Foursquare.privacy_policy_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Foursquare.privacy_policy_url_input, 'value'))
            .then((privacy_policy_url) => this.privacyPolicyUrl = privacy_policy_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Foursquare.redirect_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Foursquare.redirect_url_input, 'value'))
            .then((redirect_url) => this.redirectUrl = redirect_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    fillFoursquareSignInForm(login = "prestotests+foursquare@gmail.com", password = "presto_tests") {
        return this.client
            .waitForVisible(external.FO.Foursquare.username_input, 90000)
            .setValue(external.FO.Foursquare.username_input, login)
            .setValue(external.FO.Foursquare.password_input, password)
            .waitForExist(external.FO.Foursquare.allow_button, 90000)
            .click(external.FO.Foursquare.allow_button)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Foursquare.app_link, 90000)
            .click(external.FO.Foursquare.app_link)
            .pause(5000);
    }

    clickOnUpdateButton() {
        return this.client
            .waitForExist(external.FO.Foursquare.customer_key_pre, 90000)
            .then(() => this.client.getText(external.FO.Foursquare.customer_key_pre))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Foursquare.customer_secret_pre)
            .then(() => this.client.getText(external.FO.Foursquare.customer_secret_pre))
            .then((secret) => this.secret = secret)

            .waitForExist(external.FO.Foursquare.update_button, 90000)
            .click(external.FO.Foursquare.update_button)
            .pause(5000);
    }

    setWelcomePageUrl() {
        return this.client
            .waitForExist(external.FO.Foursquare.application_uri_input, 90000)
            .setValue(external.FO.Foursquare.application_uri_input, this.welcomePageUrl)
            .pause(5000);
    }

    setPrivacyPolicyUrl() {
        return this.client
            .waitForExist(external.FO.Foursquare.privacy_policy_url_input, 90000)
            .setValue(external.FO.Foursquare.privacy_policy_url_input, this.privacyPolicyUrl)
            .pause(5000);
    }

    setRedirectUrl() {
        return this.client
            .waitForExist(external.FO.Foursquare.redirect_url_input, 90000)
            .setValue(external.FO.Foursquare.redirect_url_input, this.redirectUrl)
            .pause(5000);
    }

    clickOnSaveButton() {
        return this.client
            .moveToObject(external.FO.Foursquare.save_button)
            .click(external.FO.Foursquare.save_button)
            .pause(5000)
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Foursquare.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Foursquare.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Foursquare.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Foursquare.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Foursquare.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Foursquare.save_button)
            .pause(5000);
    }

    clickOnFoursquareButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingFoursquareAccount(login = 'prestotests+foursquare@gmail.com', password = 'presto_tests') {
        return this.client
            .waitForVisible(selector.FO.SocialConnect.Foursquare.username_input, 90000)
            .setValue(selector.FO.SocialConnect.Foursquare.username_input, login)
            .setValue(selector.FO.SocialConnect.Foursquare.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Foursquare.allow_button, 90000)
            .click(selector.FO.SocialConnect.Foursquare.allow_button)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }
}

module.exports = FoursquareClient;

