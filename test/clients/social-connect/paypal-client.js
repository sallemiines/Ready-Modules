const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');
const { external } = require('../../external_globals.webdriverio.js');
const SocialConnect = require('./social-connect.js');

class PaypalClient extends SocialConnect{

    constructor() {
        super();
        this.client = getClient();
        this._returnUrl = "";
        this._privacyPolicyUrl = "";
        this._userAgreementUrl = "";
        this._key = "";
        this._secret = "";
    }

    get returnUrl(){return this._returnUrl;}

    get privacyPolicyUrl(){return this._privacyPolicyUrl;}

    get userAgreementUrl(){return this._userAgreementUrl;}

    get key(){return this._key;}

    get secret(){return this._secret;}

    set returnUrl(value){this._returnUrl = value;}

    set privacyPolicyUrl(value){this._privacyPolicyUrl = value;}

    set userAgreementUrl(value){this._userAgreementUrl = value;}

    set key(value){this._key = value;}

    set secret(value){this._secret = value;}

    clickOnDevelopersLink(name) {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Paypal.return_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Paypal.return_url_input, 'value'))
            .then((return_url) => this.returnUrl = return_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Paypal.privacy_policy_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Paypal.privacy_policy_url_input, 'value'))
            .then((privacy_policy_url) => this.privacyPolicyUrl = privacy_policy_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Paypal.user_agreement_url_input, 90000)
            .then(() => this.client.getAttribute(selector.BO.ModulePageSocialConnect.Paypal.user_agreement_url_input, 'value'))
            .then((user_agreement_url) => this.userAgreementUrl = user_agreement_url)

            .waitForExist(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name), 90000)
            .click(selector.BO.ModulePageSocialConnect.Common.developers_link.replace("%NAME", name))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    clickOnLogIntoDashboardButton() {
        return this.client
            .waitForExist(external.FO.Paypal.log_into_dashboard_button, 90000)
            .click(external.FO.Paypal.log_into_dashboard_button)
            .pause(5000);
    }

    fillPaypalSignInForm(login="prestotests+paypal@gmail.com", password="presto_tests") {
        return this.client
            .waitForVisible(external.FO.Paypal.username_input, 90000)
            .setValue(external.FO.Paypal.username_input, login)
            .setValue(external.FO.Paypal.password_input, password)
            .waitForExist(external.FO.Paypal.login_button, 90000)
            .click(external.FO.Paypal.login_button)
            .pause(5000);
    }

    accessToApplication() {
        return this.client
            .moveToObject(external.FO.Paypal.manage_api_button)
            .waitForExist(external.FO.Paypal.app_link, 90000)
            .click(external.FO.Paypal.app_link)
            .pause(5000);
    }

    clickOnShowSecretButton() {
        return this.client
            .moveToObject(external.FO.Paypal.customer_key, 90000)
            .then(() => this.client.getText(external.FO.Paypal.customer_key))
            .then((key) => this.key = key)
            .waitForExist(external.FO.Paypal.show_secret_button, 90000)
            .click(external.FO.Paypal.show_secret_button)
            .pause(7000)
            .moveToObject(external.FO.Paypal.customer_secret)
            .then(() => this.client.getText(external.FO.Paypal.customer_secret))
            .then((secret) => this.secret = secret)
            .pause(5000);
    }

    clickOnReturnUrlButton() {
        return this.client
            .moveToObject(external.FO.Paypal.log_in_with_paypal_checkbox, 90000)
            .click(external.FO.Paypal.show_return_url_button)
            .pause(5000);
    }

    setReturnUrl() {
        return this.client
            .waitForExist(external.FO.Paypal.return_url_input, 90000)
            .click(external.FO.Paypal.return_url_input)
            .setValue(external.FO.Paypal.return_url_input, this.returnUrl)
            .pause(5000);
    }

    clickOnAdvancedOptionsButton() {
        return this.client
            .moveToObject(external.FO.Paypal.feedback_button)
            .waitForExist(external.FO.Paypal.advanced_options_button, 90000)
            .click(external.FO.Paypal.advanced_options_button)
            .pause(5000);
    }

    setPrivacyPolicyUrl() {
        return this.client
            .waitForVisible(external.FO.Paypal.privacy_policy_url_input, 90000)
            .setValue(external.FO.Paypal.privacy_policy_url_input, this.privacyPolicyUrl)
            .pause(5000);
    }

    setUserAgreementUrl() {
        return this.client
            .waitForVisible(external.FO.Paypal.user_agreement_url_input, 90000)
            .setValue(external.FO.Paypal.user_agreement_url_input, this.userAgreementUrl)
            .pause(5000);
    }

    clickOnSaveButton() {
        return this.client
            .moveToObject(external.FO.Paypal.feedback_button)
            .waitForExist(external.FO.Paypal.save_button, 90000)
            .click(external.FO.Paypal.save_button)
            .pause(5000)
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    fillConfigurationForm() {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Paypal.customer_key_input, 90000)
            .waitForExist(selector.BO.ModulePageSocialConnect.Paypal.customer_secret_input, 90000)
            .setValue(selector.BO.ModulePageSocialConnect.Paypal.customer_key_input, this.key)
            .setValue(selector.BO.ModulePageSocialConnect.Paypal.customer_secret_input, this.secret)
            .waitForExist(selector.BO.ModulePageSocialConnect.Paypal.save_button, 90000)
            .click(selector.BO.ModulePageSocialConnect.Paypal.save_button)
            .pause(5000);
    }

    clickOnPaypalButton(name) {
        return this.client
            .waitForExist(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name), 90000)
            .click(selector.FO.SocialConnect.Common.first_logos.replace("%SOCIAL", name))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    connectingPaypalAccount(login='prestotests+paypal@gmail.com', password='presto_tests') {
        return this.client
            .waitForExist(selector.FO.Paypal.username_input, 90000)
            .setValue(selector.FO.Paypal.username_input, login)
            .setValue(selector.FO.Paypal.password_input, password)
            .waitForExist(selector.FO.Paypal.login_button, 90000)
            .click(selector.FO.Paypal.login_button)
            .pause(5000);
    }
}

module.exports = PaypalClient;

