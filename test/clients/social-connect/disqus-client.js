const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');
const { external } = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class DisqusClient extends SocialConnect{

    constructor() {
        super();
        this.client = getClient();
        this._websiteUrl = "";
        this._callbackUrl = "";
        this._termsOfServiceUrl = "";
        this._key = "";
        this._secret = "";
    }

    get websiteUrl(){return this._websiteUrl;}

    get callbackUrl(){return this._callbackUrl;}

    get termsOfServiceUrl(){return this._termsOfServiceUrl;}

    get key(){return this._key;}

    get secret(){return this._secret;}

    set websiteUrl(value){this._websiteUrl = value;}

    set callbackUrl(value){this._callbackUrl = value;}

    set termsOfServiceUrl(value){this._termsOfServiceUrl = value;}

    set key(value){this._key = value;}

    set secret(value){this._secret = value;}

    clickOnDevelopersLink(name) {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Disqus.website_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Disqus.website_url_input, 'value'))
            .then((website_url) => this.websiteUrl = website_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Disqus.callback_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Disqus.callback_url_input, 'value'))
            .then((callback_url) => this.callbackUrl = callback_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Disqus.terms_of_service_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Disqus.terms_of_service_url_input, 'value'))
            .then((terms_of_service_url) => this.termsOfServiceUrl = terms_of_service_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    fillDisqusSignInForm(login="prestotests+disqus@gmail.com", password="presto_tests") {
        return this.client
            .waitForExist(external.FO.Disqus.username_input, 90000)
            .setValue(external.FO.Disqus.username_input, login)
            .setValue(external.FO.Disqus.password_input, password)
            .waitForExist(external.FO.Disqus.login_button, 90000)
            .click(external.FO.Disqus.login_button)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Disqus.app_link, 90000)
            .click(external.FO.Disqus.app_link)
            .pause(5000);
    }

    clickOnSettingsSubTab() {
        return this.client
            .waitForExist(external.FO.Disqus.api_key_pre, 90000)
            .then(() => this.client.getText(external.FO.Disqus.api_key_pre))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Disqus.api_secret_pre)
            .then(() => this.client.getText(external.FO.Disqus.api_secret_pre))
            .then((secret) => this.secret = secret)

            .waitForExist(external.FO.Disqus.settings_subtab, 90000)
            .click(external.FO.Disqus.settings_subtab)
            .pause(5000);
    }

    setWebsiteUrl() {
        return this.client
            .waitForExist(external.FO.Disqus.website_input, 90000)
            .setValue(external.FO.Disqus.website_input, this.websiteUrl)
            .pause(5000);
    }

    setCallbackUrl() {
        return this.client
            .waitForExist(external.FO.Disqus.callback_input, 90000)
            .setValue(external.FO.Disqus.callback_input, this.callbackUrl)
            .pause(5000);
    }

    setTermsOfServiceUrl() {
        return this.client
            .waitForExist(external.FO.Disqus.terms_of_service_input, 90000)
            .setValue(external.FO.Disqus.terms_of_service_input, this.termsOfServiceUrl)
            .pause(5000);
    }

    clickOnSaveChangesButton() {
        return this.client
            .waitForExist(external.FO.Disqus.save_changes_button, 90000)
            .click(external.FO.Disqus.save_changes_button)
            .pause(5000)
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Disqus.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Disqus.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Disqus.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Disqus.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Disqus.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Disqus.save_button)
            .pause(5000);
    }

    clickOnDisqusButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingDisqusAccount(login='prestotests+disqus@gmail.com', password='presto_tests') {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Disqus.username_input, 90000)
            .waitForExist(selector.FO.SocialConnect.Disqus.password_input, 90000)
            .setValue(selector.FO.SocialConnect.Disqus.username_input, login)
            .setValue(selector.FO.SocialConnect.Disqus.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Disqus.allow_button, 90000)
            .click(selector.FO.SocialConnect.Disqus.allow_button)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }
}

module.exports = DisqusClient;

