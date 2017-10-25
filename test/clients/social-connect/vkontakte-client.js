const {selector} = require('../../globals.webdriverio.js');
const {external} = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class VkontakteClient extends SocialConnect {

    constructor() {
        super();
        this._siteUrl = "";
        this._baseDomain = "";
        this._key = "";
        this._secret = "";
    }

    get siteUrl() {
        return this._siteUrl;
    }

    get baseDomain() {
        return this._baseDomain;
    }

    get key() {
        return this._key;
    }

    get secret() {
        return this._secret;
    }

    set siteUrl(value) {
        this._siteUrl = value;
    }

    set baseDomain(value) {
        this._baseDomain = value;
    }

    set key(value) {
        this._key = value;
    }

    set secret(value) {
        this._secret = value;
    }

    clickOnDevelopersLink(name) {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Vkontakte.site_address_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Vkontakte.site_address_input, 'value'))
            .then((site) => {
                this.siteUrl = site;
                this.baseDomain = site.split('https://').pop().split('/').shift();
            })

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    fillVkontakteSignInForm(login = "prestotestsvkontakte@gmail.com", password = "presto_tests") {
        return this.client
            .waitForExist(external.FO.Vkontakte.username_input, 90000)
            .waitForExist(external.FO.Vkontakte.password_input, 90000)
            .setValue(external.FO.Vkontakte.username_input, login)
            .setValue(external.FO.Vkontakte.password_input, password)
            .waitForExist(external.FO.Vkontakte.signin_button, 90000)
            .click(external.FO.Vkontakte.signin_button)
            .pause(5000);
    }

    listOfApplication() {
        return this.client
            .waitForExist(external.FO.Vkontakte.my_apps_menu, 90000)
            .click(external.FO.Vkontakte.my_apps_menu)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .waitForExist(external.FO.Vkontakte.manage_button, 90000)
            .click(external.FO.Vkontakte.manage_button)
            .pause(5000);
    }

    clickOnSettingsSubtab() {
        return this.client
            .waitForExist(external.FO.Vkontakte.settings_subtab, 90000)
            .click(external.FO.Vkontakte.settings_subtab)
            .pause(3000)

            .waitForExist(external.FO.Vkontakte.id_text, 90000)
            .then(() => this.client.getText(external.FO.Vkontakte.id_text))
            .then((key) => this.key = key)

            .waitForExist(external.FO.Vkontakte.secret_key_input, 90000)
            .then(() => this.client.getAttribute(external.FO.Vkontakte.secret_key_input, 'value'))
            .then((secret) => this.secret = secret)
            .pause(5000);
    }

    setSiteUrl() {
        return this.client
            .waitForExist(external.FO.Vkontakte.site_url_input, 90000)
            .setValue(external.FO.Vkontakte.site_url_input, this.siteUrl)
            .pause(5000);
    }

    setBaseDomain() {
        return this.client
            .waitForExist(external.FO.Vkontakte.delete_base_domain_icon, 90000)
            .click(external.FO.Vkontakte.delete_base_domain_icon)
            .pause(3000)
            .waitForExist(external.FO.Vkontakte.domain_input, 90000)
            .setValue(external.FO.Vkontakte.domain_input, this.baseDomain)
            .pause(5000);
    }

    clickOnSaveButton() {
        return this.client
            .moveToObject(external.FO.Vkontakte.save_button, 90000)
            .click(external.FO.Vkontakte.save_button)
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Vkontakte.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Vkontakte.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Vkontakte.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Vkontakte.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Vkontakte.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Vkontakte.save_button)
            .pause(5000);
    }

    clickOnVkontakteButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingVkontakteAccount(login = 'prestotestsvkontakte@gmail.com', password = 'presto_tests') {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Vkontakte.username_input, 90000)
            .setValue(selector.FO.SocialConnect.Vkontakte.username_input, login)
            .setValue(selector.FO.SocialConnect.Vkontakte.password_input, password)
            .waitForExist(selector.FO.SocialConnect.Vkontakte.login_button, 90000)
            .click(selector.FO.SocialConnect.Vkontakte.login_button)

            .then(() => this.client.windowHandles())
            .then((handles) => this.client.switchTab(handles.value[0]))
            .pause(5000);
    }
}

module.exports = VkontakteClient;

