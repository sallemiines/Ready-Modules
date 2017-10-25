const {selector} = require('../../globals.webdriverio.js');
const {external} = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class PinterestClient extends SocialConnect {

    constructor() {
        super();
        this._url = "";
        this._siteUrl = "";
        this._redirectUrl = "";
        this._key = "";
        this._secret = "";
    }

    get url() {
        return this._url;
    }

    get siteUrl() {
        return this._siteUrl;
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

    set url(value) {
        this._url = value;
    }

    set siteUrl(value) {
        this._siteUrl = value;
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
            .waitForExist(selector.BO.ModulePageSocialConnect.Pinterest.site_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Pinterest.site_url_input, 'value'))
            .then((site) => this.siteUrl = site)

            .waitForExist(selector.BO.ModulePageSocialConnect.Pinterest.redirect_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Pinterest.redirect_url_input, 'value'))
            .then((redirect) => this.redirectUrl = redirect)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 'href'))
            .then((href) => this.url = href)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    fillPinterestSignInForm(login = "prestotests+pinterest@gmail.com", password = "presto_tests") {
        return this.client
            .waitForExist(external.FO.Pinterest.username_input, 90000)
            .setValue(external.FO.Pinterest.username_input, login)
            .setValue(external.FO.Pinterest.password_input, password)
            .waitForExist(external.FO.Pinterest.login_button, 90000)
            .click(external.FO.Pinterest.login_button)
            .pause(5000)
            .url(this.url)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Pinterest.app_link, 90000)
            .click(external.FO.Pinterest.app_link)
            .pause(5000);
    }

    clickOnShowButton() {
        return this.client
            .waitForExist(external.FO.Pinterest.app_id_input, 90000)
            .then(() => this.client.getAttribute(external.FO.Pinterest.app_id_input, 'value'))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Pinterest.show_button, 90000)
            .click(external.FO.Pinterest.show_button)
            .pause(3000)

            .waitForExist(external.FO.Pinterest.app_secret_input, 90000)
            .then(() => this.client.getAttribute(external.FO.Pinterest.app_secret_input, 'value'))
            .then((secret) => this.secret = secret)
            .pause(5000);
    }

    setSiteUrl() {
        return this.client
            .waitForExist(external.FO.Pinterest.site_url_input, 90000)
            .setValue(external.FO.Pinterest.site_url_input, this.siteUrl)
            .pause(5000);
    }

    setRedirectUrl() {
        return this.client
        //.moveToObject(this.external.FO.Pinterest.delete_redirect_url_icon)
            .waitForExist(external.FO.Pinterest.delete_redirect_url_icon)
            .click(external.FO.Pinterest.delete_redirect_url_icon)
            .pause(3000)
            .moveToObject(external.FO.Pinterest.redirect_url_input, 90000)
            .click(external.FO.Pinterest.redirect_url_input)
            .keys(this.redirectUrl)
            .keys("\uE007")
            .pause(5000);
    }

    clickOnSaveButton() {
        return this.client
            .waitForVisible(external.FO.Pinterest.save_button, 90000)
            .click(external.FO.Pinterest.save_button)
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Pinterest.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Pinterest.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Pinterest.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Pinterest.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Pinterest.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Pinterest.save_button)
            .pause(5000);
    }

    clickOnPinterestButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingPinterestAccount(login = 'prestotests+pinterest@gmail.com', password = 'presto_tests') {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Pinterest.username_input, 90000)
            .setValue(selector.FO.SocialConnect.Pinterest.username_input, login)
            .setValue(selector.FO.SocialConnect.Pinterest.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Pinterest.login_button, 90000)
            .click(selector.FO.SocialConnect.Pinterest.login_button)
            .pause(3000)
            .waitForExist(selector.FO.SocialConnect.Pinterest.allow_button, 90000)
            .click(selector.FO.SocialConnect.Pinterest.allow_button)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }

    linkedAccount(login) {
        return this.client
            .waitForVisible(selector.FO.SocialConnect.Pinterest.email_input, 90000)
            .setValue(selector.FO.SocialConnect.Pinterest.email_input, login)
            .waitForExist(selector.FO.SocialConnect.Pinterest.send_button, 90000)
            .click(selector.FO.SocialConnect.Pinterest.send_button)
            .pause(3000)

            .then(() => this.client.getText(selector.FO.SocialConnect.Twitter.check_sent_email_p))
            .then((value) => {
                expect(value).to.eql("Password has been sent to your mailbox: " + login)
            })
            .url('https://' + URL)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }
}

module.exports = PinterestClient;

