const {selector} = require('../../globals.webdriverio.js');
const {external} = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class DropboxClient extends SocialConnect {

    constructor() {
        super();
        this._redirectUrl = "";
        this._key = "";
        this._secret = "";
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
            .waitForExist(selector.BO.ModulePageSocialConnect.Dropbox.redirect_uri_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Dropbox.redirect_uri_input, 'value'))
            .then((redirect) => this.redirectUrl = redirect)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    fillDropboxSignInForm(login = "prestotests+dropbox@gmail.com", password = "presto_tests") {
        return this.client
            .waitForExist(external.FO.Dropbox.username_input, 90000)
            .setValue(external.FO.Dropbox.username_input, login)
            .setValue(external.FO.Dropbox.password_input, password)
            .waitForExist(external.FO.Dropbox.login_button, 90000)
            .click(external.FO.Dropbox.login_button)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Dropbox.app_link, 90000)
            .click(external.FO.Dropbox.app_link)
            .pause(5000);
    }

    clickOnDeleteOldRedirectIcon() {
        return this.client
            .waitForExist(external.FO.Dropbox.app_key_div, 90000)
            .then(() => this.client.getText(external.FO.Dropbox.app_key_div))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Dropbox.app_secret_div, 90000)
            .then(() => this.client.getAttribute(external.FO.Dropbox.app_secret_div, 'data-app-secret'))
            .then((secret) => this.secret = secret)

            .waitForExist(external.FO.Dropbox.delete_redirect_uri, 90000)
            .click(external.FO.Dropbox.delete_redirect_uri)
            .pause(5000);
    }

    setRedirectUrl() {
        return this.client
            .waitForExist(external.FO.Dropbox.redirect_uri_input, 90000)
            .setValue(external.FO.Dropbox.redirect_uri_input, this.redirectUrl)

            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Dropbox.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Dropbox.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Dropbox.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Dropbox.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Dropbox.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Dropbox.save_button)
            .pause(5000);
    }

    clickOnDropboxButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingDropboxAccount(login = 'prestotests+dropbox@gmail.com', password = 'presto_tests') {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Dropbox.username_input, 90000)
            .setValue(selector.FO.SocialConnect.Dropbox.username_input, login)
            .setValue(selector.FO.SocialConnect.Dropbox.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Dropbox.login_button, 90000)
            .click(selector.FO.SocialConnect.Dropbox.login_button)
            // .pause(3000)
            // .waitForExist(selector.FO.SocialConnect.Dropbox.allow_button, 90000)
            // .click(selector.FO.SocialConnect.Dropbox.allow_button)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }
}

module.exports = DropboxClient;

