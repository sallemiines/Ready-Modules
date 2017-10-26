const {getClient} = require('../common.webdriverio');
const {selector} = require('../globals.webdriverio.js');


class blockYoutube  {
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
            .setValue(selector.BO.ModulesPage.search_input, module_tech_name_youtubeVideo)
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
                .waitForExist(selector.BO.ModuleBlockYoutubeVideo.config_module_button, 90000)
                .click(selector.BO.ModuleBlockYoutubeVideo.config_module_button)
        }
    }

    goDocumentationTab() {
        return this.client
            .pause(3000)
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.pdf_logo, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.pdf_logo)
            .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[handles.value.length - 1])
            })
            .pause(7000)
            .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[0])
            })
            .pause(3000)
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.prestashop_link, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.prestashop_link)
            .windowHandles().then(function (handles) {
                console.log(handles);
                return this.switchTab(handles.value[handles.value.length - 1])
            })
            .pause(7000)
            .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[0])
            })
            .pause(9000);
    }

    addApiKey() {
        return this.client
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.configuration_tab, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.configuration_tab)
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.api_key_input, 90000)
            .setValue(selector.BO.ModuleBlockYoutubeVideo.api_key_input, global.apiKey)
            .pause(9000);
    }

    configPosition() {
        return this.client
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.position_select, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.position_select)
            .selectByValue(selector.BO.ModuleBlockYoutubeVideo.position_select, 3)
    }

    configInsertionVideo() {
        return this.client
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.page_product_video_button, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.page_product_video_button)
            .pause(9000);
    }

    configBanner() {
        return this.client
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.banner_button, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.banner_button)
    }

    configBannerTxt() {
        return this.client
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.banner_txt, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.banner_txt)
            .pause(5000)
            .execute(function (banner_txt) {
                document.querySelector('input#youtube_banner_text_1').value = banner_txt;
            }, global.bannerInput)
    }

    configTitle() {
        return this.client
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.title_position_button, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.title_position_button)

    }

    configTitlePosition() {
        return this.client
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.title_position_select, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.title_position_select)
            .selectByValue(selector.BO.ModuleBlockYoutubeVideo.title_position_select, 0)
    }

    clickupdateButton() {
        return this.client
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.update_button, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.update_button)
            .pause(5000)
    }

    goProductPage() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.categorie_menu, 90000)
            .moveToObject(selector.BO.ProductSetting.categorie_menu)
            .pause(5000)
            .waitForExist(selector.BO.ProductSetting.product_menu, 90000)
            .click(selector.BO.ProductSetting.product_menu)
            .pause(5000)
    }

    chooseProduct1() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.update_product1, 90000)
            .click(selector.BO.ProductSetting.update_product1)
            .pause(3000)
    }

    chooseProduct2() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.update_product2, 90000)
            .click(selector.BO.ProductSetting.update_product2)
            .pause(3000)
    }

    clickModuleButton() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.modules_button, 90000)
            .click(selector.BO.ProductSetting.modules_button)
            .pause(3000)
    }

    clickConfigureButtoun() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.configure_button, 90000)
            .click(selector.BO.ProductSetting.configure_button)
            .pause(3000)
    }

    selectLanguage() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.language_list, 90000)
            .click(selector.BO.ProductSetting.language_list)
            .selectByValue(selector.BO.ProductSetting.language_list, 0)
            .pause(7000)
    }

    addTitle() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.title_video_input, 90000)
            .click(selector.BO.ProductSetting.title_video_input)
            .execute(function (title) {
                document.querySelector('input#youtube_custom_title_1').value = title;
            }, global.titleVideo)
    }

    selectAddUrlMethode() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.url_methode_button, 90000)
            .click(selector.BO.ProductSetting.url_methode_button)
            .pause(3000)
    }

    addUrl() {

        return this.client
            .waitForExist(selector.BO.ProductSetting.url_input, 90000)
            .setValue(selector.BO.ProductSetting.url_input, global.videoUrlInput)
            .waitForExist(selector.BO.ProductSetting.save_url_button, 90000)
            .click(selector.BO.ProductSetting.save_url_button)
            .pause(9000)
    }

    clickSaveButton() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.save_button, 90000)
            .click(selector.BO.ProductSetting.save_button)
            .pause(9000)
    }

    clickPreviewButton() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.view_button, 90000)
            .click(selector.BO.ProductSetting.view_button)
            .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[1])
            })
            .pause(9000)
    }

    checkVideo() {
        return this.client
            .waitForExist(selector.FO.ProductPage.product_video_title, 90000)
            .then(() => this.client.isVisible(selector.FO.ProductPage.product_video_title))
            .then((isVisible) => {expect(isVisible).to.be.equal(true);})
            .windowHandles().then(function (handles) {
                return this.switchTab(handles.value[0])
            })
    }

    insertPopUpVideo() {

        return this.client
            .waitForExist(selector.BO.ModuleBlockYoutubeVideo.pop_up_video_button, 90000)
            .click(selector.BO.ModuleBlockYoutubeVideo.pop_up_video_button)
            .pause(9000)
    }

    searchVideo() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.search_url_input, 90000)
            .setValue(selector.BO.ProductSetting.search_url_input, 'prestashop')
            .waitForExist(selector.BO.ProductSetting.choose_video_button, 90000)
            .click(selector.BO.ProductSetting.choose_video_button)
            .pause(9000)
    }

    selectSearchVideotMethode() {
        return this.client
            .waitForExist(selector.BO.ProductSetting.search_methode_button, 90000)
            .click(selector.BO.ProductSetting.search_methode_button)
            .pause(3000)
    }

}

module.exports = blockYoutube;
