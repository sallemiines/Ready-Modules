scenario('BlockYoutube-BackOffice', client => {
    scenario('Test N°1 = Configure the  blockYoutubeModule with "Insert the video in the product page" ', () => {
        scenario('Log in in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should log in successfully in BO', () => client.signInBO());
        }, 'blockYoutube-client');
        scenario('Go to the module page', client => {
            test('should go to the installed module page', () => client.goToModulePage());
            test('should search the BlockYoutube module page', () => client.searchModule());
        }, "blockYoutube-client");
        scenario('Configure the  BlockYoutube module', client => {
            test('should go to the module configuration page', () => client.goModuleConfigurationPage());
            //test('should go to "Documentation" tab', () => client.goDocumentationTab());
            test('should add api key ', () => client.addApiKey());
            test('Choose the position of the videos in the product pages ', () => client.configPosition());
            test('should insert the video in page product ', () => client.configInsertionVideo());
            test('should add a banner above the video  ', () => client.configBanner());
            test('should add a banner text', () => client.configBannerTxt());
            test('should add title ', () => client.configTitle());
            test('should add title position ', () => client.configTitlePosition());
            test('should click on update button ', () => client.clickUpdateButton());
        }, "blockYoutube-client");
    }, "blockYoutube-client");
    scenario('configure video in page product', () => {
        test('should go to page product', () => client.goProductPage());
        test('should choose product ', () => client.chooseProduct1());
        test('should click on module in page product ', () => client.clickModuleButton());
        test('should click on configure ', () => client.clickConfigureButtoun());
        test('should select type of language ', () => client.selectLanguage());
        test('should add title video', () => client.addTitle());
        test('should select method ', () => client.selectAddUrlMethode());
        test('should add url video ', () => client.addUrl());
        test('should click on  save', () => client.clickSaveButton());
        test('Should click on visualiser', () => client.clickView());
        test('should detect if the video is visible in FO', () => client.checkVideo());
    }, "blockYoutube-client");
}, "blockYoutube-client", true);

scenario('Test N°2 = Configure the  blockYoutubeModule with "Insert the video in pop_up', () => {
    scenario('Log in in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should log in successfully in BO', () => client.signInBO());
    }, "blockYoutube-client");
    scenario('Go to the module page', client => {
        test('should go to the installed module page', () => client.goModulePage());
        test('should search the BlockYoutube module page', () => client.searchModule());
    }, "blockYoutube-client");
    scenario('Configure the  BlockYoutube module ', client => {
        test('should go to the module configuration page', () => client.goModuleConfigurationPage());
        test('should add api key ', () => client.addApiKey());
        test('Choose the position of the videos in the produced pages ', () => client.configPosition());
        test('should insert the video in a pop-up  ', () => client.insetrtPopUpVideo());
        test('should add a banner above the video  ', () => client.configBanner());
        test('should add a banner text', () => client.configBannerTxt());
        test('should add title ', () => client.configTitle());
        test('should add title position ', () => client.configTitlePosition());
        test('should click on update button ', () => client.clickupdateButton());
    }, "blockYoutube-client");
    scenario('configure video in page product', () => {
        scenario('search the  BlockYoutube module ', client => {
        test('should go to page product', () => client.goProductPage());
        test('should choose product ', () => client.chooseProduct2());
        test('should click on module in page product ', () => client.clickModuleButton());
        test('should click on configure ', () => client.clickConfigureButtoun());
        test('should select type of language ', () => client.selectLanguage());
        test('should add title video', () => client.addVideoTitle());
        test('should select method ', () => client.selectSearchVideoMethode());
        test('should search video ', () => client.searchVideo());
        test('should click on  save', () => client.clickSaveButton());
        test('Should click on visualiser', () => client.clickPreviewButton());
        test('should detect if the video is visible in FO', () => client.checkVideo());
    }, "blockYoutube-client");
    }, "blockYoutube-client");
}, "blockYoutube-client", true);