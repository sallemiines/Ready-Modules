// @TODO:fix connection dropbox in FO ("error": "v1_retired")
scenario(`SocialConnect/${social_connect[12].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[12].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[12]} menu tab`, () => client.ClickOnConfigurationAccountMenu(15));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[12]));
        test(`click on ${social_connect[12]} developers link`, () => client.clickOnDevelopersLink(social_connect[12]));
        test(`log in with ${social_connect[12]} account`, () => client.fillDropboxSignInForm());
        test('access to the application', () => client.accessToApplication());
        test('delete old redirect url', () => client.clickOnDeleteOldRedirectIcon());
        test('add new redirect url', () => client.setRedirectUrl());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/dropbox-client");

    // scenario(`SocialConnect/Connect with - ${social_connect[12].toUpperCase()} - account in FrontOffice`, client => {
    //     test('open browser', () => client.open());
    //     test('access to front office', () => client.accessToFrontOffice());
    //     test(`click on ${social_connect[12]} button`, () => client.clickOnDropboxButton(social_connect[12]));
    //     test(`should connecting with ${social_connect[12]} account`, () => client.connectingDropboxAccount());
    //     test('should check the connection', () => client.checkConnections('Tests Presto'));
    // }, "social-connect/dropbox-client");
    //
    // scenario(`SocialConnect/Check customer - ${social_connect[12].toUpperCase()} - in BackOffice`, client => {
    //     test('open browser', () => client.open());
    //     test('sign in', () => client.fillSignInForm());
    //     test('access to customers page', () => client.goToCustomers());
    //     test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+dropbox@gmail.com"));
    //     test('click on search button', () => client.clickOnSearchButton());
    //     test(`should check ${social_connect[12]} customer`, () => client.checkCutomer(social_connect[12]));
    // }, "social-connect/dropbox-client");
}, "social-connect/dropbox-client");