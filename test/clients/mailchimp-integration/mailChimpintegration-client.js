const {getClient} = require('../../common.webdriverio');
const {selector} = require('../../globals.webdriverio.js');


class mailChimpintegration {
    constructor() {
        this.client = getClient();
    }

    signInBO(login = 'testpresta@presto.com', password = 'abcd1234') {
        return this.client
            .url(`https://${URL}/backoffice/`)
            .waitForExist(selector.BO.AccessPage.login_input, 60000)
            .waitForExist(selector.BO.AccessPage.password_input, 60000)
            .setValue(selector.BO.AccessPage.login_input, login)
            .setValue(selector.BO.AccessPage.password_input, password)
            .click(selector.BO.AccessPage.login_button)
            .pause(5000);
    }

    close() {
        return this.client.end();
    };

    takeScreenshot() {
        return this.client.saveScreenshot(`test/screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}.png`);
    }

    open() {
        return this.client.init().windowHandleMaximize();
    }

    goToModulePage() {
        return this.client
            .waitForExist(selector.BO.ModulesPage.modules_subtab, 90000)
            .click(selector.BO.ModulesPage.modules_subtab)
            .pause(5000);
    }

    searchModule() {
        return this.client
            .waitForExist(selector.BO.ModulesPage.search_input, 90000)
            .setValue(selector.BO.ModulesPage.search_input, module_tech_name_mailchimp)
            .waitForExist(selector.BO.ModulesPage.search_button, 3000)
            .click(selector.BO.ModulesPage.search_button)
            .pause(3000)
            .getText(selector.BO.ModulesPage.page_loaded).then(function (nbr) {
                global.nbr = parseInt(nbr[0].charAt(0));
            })
            .pause(3000);
    }

    goModuleConfigurationPage() {
        if (global.nbr === 0) {
            done(new Error('The module you are searching for does not exist!'));
        }
        else {
            return this.client
                .waitForExist(selector.BO.MailChimpModulePage.config_module_button, 90000)
                .click(selector.BO.MailChimpModulePage.config_module_button)
        }
    }

    goToStoreAdresse() {

        return this.client
            .pause(2000)
            .waitForExist(selector.BO.SettingPage.setting_subtab,90000)
            .moveToObject(selector.BO.SettingPage.setting_subtab)
            .pause(5000)
            .waitForExist(selector.BO.ContactPage.contact_subtab, 90000)
            .click(selector.BO.ContactPage.contact_subtab)
            .pause(5000)
            .waitForExist(selector.BO.ContactPage.shop_link, 90000)
            .click(selector.BO.ContactPage.shop_link)
    }
    configStoreAdresse ()
    {
        return this.client
        .waitForExist(selector.BO.ContactPage.adress_shop_input, 90000)
        .setValue(selector.BO.ContactPage.adress_shop_input, 'rue de boulvard')
        .waitForExist(selector.BO.ContactPage.postal_code_input, 90000)
        .setValue(selector.BO.ContactPage.postal_code_input, '75001')
        .waitForExist(selector.BO.ContactPage.city_shop_input, 90000)
        .setValue(selector.BO.ContactPage.city_shop_input, 'Paris')
        .waitForExist(selector.BO.ContactPage.city_shop_input, 90000)
        .setValue(selector.BO.ContactPage.city_shop_input, '12345678')
        .waitForExist(selector.BO.ContactPage.fax_input, 90000)
        .setValue(selector.BO.ContactPage.fax_input, '12345678')

    }
    clickSaveStoreButton ()
    {
        return this.client
            .pause(3000)
            .waitForExist(selector.BO.ContactPage.save_button, 9000)
            .click(selector.BO.ContactPage.save_button)
    }

    clickAccessToMailchimpAccountButton() {
        return this.client
            .pause(3000)
            .waitForExist(selector.BO.MailChimpModulePage.access_button, 90000)
            .click(selector.BO.MailChimpModulePage.access_button)
    }

    signMailchimp ()

    {
        return this.client
        .waitForExist(selector.BO.MailChimpModulePage.login_input, 90000)
        .setValue(selector.BO.MailChimpModulePage.login_input, 'prestotests')
        .waitForExist(selector.BO.MailChimpModulePage.password_input, 90000)
        .setValue(selector.BO.MailChimpModulePage.password_input, 'Presto_tests1')
        .waitForExist(selector.BO.MailChimpModulePage.login_button, 90000)
        .click(selector.BO.MailChimpModulePage.login_button)}

    addNewList() {

        return this.client

            .waitForExist(selector.BO.MailChimpModulePage.list_input, 90000)
            .setValue(selector.BO.MailChimpModulePage.list_input, global.listNameInput)
            .click(selector.BO.MailChimpModulePage.save_button)
            .getText(selector.BO.MailChimpModulePage.connection_list).then(function (text) {
                var list = text;
                should(list).be.equal("Connected to list " + global.listNameInput);
            })
    }

    disconnectFromLIst()
    {
        return this.client
            .pause(3000)
            .waitForExist(selector.BO.MailChimpModulePage.save_button, 90000)
            .click(selector.BO.MailChimpModulePage.save_button)
            .pause(5000)
    }
    selectList () {

        return this.client
            .waitForExist(selector.BO.MailChimpModulePage.list_select, 90000)
            .selectByVisibleText(selector.BO.MailChimpModulePage.list_select, global.listNameInput).getText('option:checked').then(function (selectValue) {
                global.value = selectValue
                should(global.value).be.equal(global.listNameInput)
            })

    }

}

module.exports = mailChimpintegration;
