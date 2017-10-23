scenario(`SocialConnect/${social_connect[11].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[11].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[11]} menu tab`, () => client.ClickOnConfigurationAccountMenu(14));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[11]));
        test(`click on ${social_connect[11]} developers link`, () => client.clickOnDevelopersLink(social_connect[11]));
        test(`log in with ${social_connect[11]} account`, () => client.fillDisqusSignInForm());
        test('access to the application', () => client.accessToApplication());
        test('access to the settings subtab', () => client.clickOnSettingsSubTab());
        test('edit the website url', () => client.setWebsiteUrl());
        test('edit the callback url', () => client.setCallbackUrl());
        test('edit the terms of service url', () => client.setTermsOfServiceUrl());
        test('click on save changes button', () => client.clickOnSaveChangesButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/disqus-client");

    scenario(`SocialConnect/Connect with - ${social_connect[11].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[11]} button`, () => client.clickOnDisqusButton(social_connect[11]));
        test(`should connecting with ${social_connect[11]} account`, () => client.connectingDisqusAccount());
        test('should check the connection', () => client.checkConnections('prestotests prestotests'));
    }, "social-connect/disqus-client");

    scenario(`SocialConnect/Check customer - ${social_connect[11].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+disqus@gmail.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[11]} customer`, () => client.checkCutomer(social_connect[11]));
    }, "social-connect/disqus-client");
}, "social-connect/disqus-client");