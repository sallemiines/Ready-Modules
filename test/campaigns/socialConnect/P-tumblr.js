scenario(`SocialConnect/${social_connect[14].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[14].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[14]} menu tab`, () => client.ClickOnConfigurationAccountMenu(17));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[14]));
        test(`click on ${social_connect[14]} developers link`, () => client.clickOnDevelopersLink(social_connect[14]));
        test(`log in with ${social_connect[14]} account`, () => client.fillTumblrSignInForm());
        test('access to the application', () => client.accessToApplication());
        test('click on show secret button', () => client.clickOnShowSecretButton());
        test('edit website url', () => client.setWebsiteUrl());
        test('edit callback url', () => client.setCallbackUrl());
        test('click on save button', () => client.clickOnSaveButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/tumblr-client");

    scenario(`SocialConnect/Connect with - ${social_connect[14].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[14]} button`, () => client.clickOnTumblrButton(social_connect[14]));
        test(`should connecting with ${social_connect[14]} account`, () => client.connectingTumblrAccount());
        test(`should linked the account of ${social_connect[14]}`, () => client.linkedAccount('prestotests+tumblr@gmail.com'));
        test('should check the connection', () => client.checkConnections('prestotests prestotests'));
    }, "social-connect/tumblr-client");

    scenario(`SocialConnect/Check customer - ${social_connect[14].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+tumblr@gmail.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[14]} customer`, () => client.checkCutomer(social_connect[14]));
    }, "social-connect/tumblr-client");
}, "social-connect/tumblr-client");