const { getClient } = require('../common.webdriverio.js');
var { selector } = require('../globals.webdriverio.js');

class commonClient {
    constructor() {
        this.client = getClient();
    }

    signInBO() {
        return this.client.signinBO();
    }

    signOutBO() {
        return this.client.signoutBO();
    }

    signInFO() {
        return this.client.signinFO();
    }

    signOutFO() {
        return this.client.signoutFO();
    }

    openShop(){
        return this.client
            .url('http://' + URL)
            .waitForExist(selector.FO.HomePage.logo_home_page)
    }

    open() {
        return this.client.init().windowHandleMaximize();
    }

    close() {
        return this.client.end();
    };

    goModulePage(){
        return this.client
            .click(selector.BO.ModulesPage.modules_subtub)
            .waitForExist(selector.BO.ModulesPage.modules_search_results, 90000)
    }

    searchModule(moduleName){
        return this.client
            .click(selector.BO.ModulesPage.installed_module_tabs)
            .waitForExist(selector.BO.ModulesPage.modules_search_input, 90000)
            .setValue(selector.BO.ModulesPage.modules_search_input, moduleName)
            .click(selector.BO.ModulesPage.modules_search_button)
    }

    goModuleConfigurationPage(){
        return this.client
            .waitForExist(selector.BO.ModulesPage.module_configuration_button, 90000)
            .click(selector.BO.ModulesPage.module_configuration_button)
    }

    takeScreenshot() {
        return this.client
            .saveScreenshot(`../screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}.png`);
    }
}
module.exports = commonClient;