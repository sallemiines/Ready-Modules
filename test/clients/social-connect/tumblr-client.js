const {selector} = require('../../globals.webdriverio.js');
const {external} = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class TumblrClient extends SocialConnect {

    constructor() {
        super();
        this._websiteUrl = "";
        this._callbackUrl = "";
        this._key = "";
        this._secret = "";
    }

    get websiteUrl() {
        return this._websiteUrl;
    }

    get callbackUrl() {
        return this._callbackUrl;
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

    set callbackUrl(value) {
        this._callbackUrl = value;
    }

    set key(value) {
        this._key = value;
    }

    set secret(value) {
        this._secret = value;
    }

    clickOnDevelopersLink(name) {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Tumblr.website_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Tumblr.website_url_input, 'value'))
            .then((website) => this.websiteUrl = website)

            .waitForExist(selector.BO.ModulePageSocialConnect.Tumblr.callback_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Tumblr.callback_url_input, 'value'))
            .then((callback) => this.callbackUrl = callback)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    fillTumblrSignInForm(login = "prestotests+tumblr@gmail.com", password = "presto_tests") {
        return this.client
            .waitForVisible(external.FO.Tumblr.username_input, 90000)
            .setValue(external.FO.Tumblr.username_input, login)

            .waitForExist(external.FO.Tumblr.next_button, 90000)
            .click(external.FO.Tumblr.next_button)

            .waitForVisible(external.FO.Tumblr.password_input, 90000)
            .setValue(external.FO.Tumblr.password_input, password)

            .waitForExist(external.FO.Tumblr.signin_button, 90000)
            .click(external.FO.Tumblr.signin_button)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Tumblr.app_link, 90000)
            .click(external.FO.Tumblr.app_link)

            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[2]))
            .pause(5000);
    }

    clickOnShowSecretButton() {
        return this.client
            .waitForExist(external.FO.Tumblr.customer_key, 90000)
            .then(() => this.client.getText(external.FO.Tumblr.customer_key))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Tumblr.show_secret_button, 90000)
            .click(external.FO.Tumblr.show_secret_button)

            .waitForExist(external.FO.Tumblr.customer_secret, 90000)
            .then(() => this.client.getText(external.FO.Tumblr.customer_secret))
            .then((secret) => this.secret = secret)
            .pause(5000);
    }

    setWebsiteUrl() {
        return this.client
            .waitForExist(external.FO.Tumblr.website_url_input, 90000)
            .setValue(external.FO.Tumblr.website_url_input, this.websiteUrl)
            .pause(5000);
    }

    setCallbackUrl() {
        return this.client
            .waitForExist(external.FO.Tumblr.callback_url_input, 90000)
            .setValue(external.FO.Tumblr.callback_url_input, this.callbackUrl)
            .pause(5000);
    }

    clickOnSaveButton() {
        return this.client
            .waitForExist(external.FO.Tumblr.save_button, 90000)
            .click(external.FO.Tumblr.save_button)

            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Tumblr.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Tumblr.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Tumblr.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Tumblr.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Tumblr.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Tumblr.save_button)
            .pause(5000);
    }

    clickOnTumblrButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingTumblrAccount(login = 'prestotests+tumblr@gmail.com', password = 'presto_tests') {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Tumblr.username_input, 90000)
            .setValue(selector.FO.SocialConnect.Tumblr.username_input, login)

            .waitForExist(selector.FO.SocialConnect.Tumblr.next_button, 90000)
            .click(selector.FO.SocialConnect.Tumblr.next_button)
            .pause(3000)

            .waitForExist(selector.FO.SocialConnect.Tumblr.password_input, 90000)
            .setValue(selector.FO.SocialConnect.Tumblr.password_input, password)
            .pause(3000)

            .waitForExist(selector.FO.SocialConnect.Tumblr.login_button, 90000)
            .click(selector.FO.SocialConnect.Tumblr.login_button)
            .pause(3000)

            .waitForExist(selector.FO.SocialConnect.Tumblr.allow_button, 90000)
            .click(selector.FO.SocialConnect.Tumblr.allow_button)
            .pause(2000)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }

    linkedAccount(login) {
        return this.client
            .waitForVisible(selector.FO.SocialConnect.Tumblr.linked_modale, 90000)
            .setValue(selector.FO.SocialConnect.Tumblr.email_input, login)
            .waitForExist(selector.FO.SocialConnect.Tumblr.send_button, 90000)
            .click(selector.FO.SocialConnect.Tumblr.send_button)
            .pause(3000)

            .then(() => this.client.getText(selector.FO.SocialConnect.Tumblr.check_sent_email_p))
            .then((value) => {
                expect(value).to.eql("Password has been sent to your mailbox: " + login)
            })
            .url('https://' + URL)
            .pause(5000);
    }
}

module.exports = TumblrClient;

