scenario(`SocialConnect/${social_connect[13].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[13].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[13]} menu tab`, () => client.ClickOnConfigurationAccountMenu(16));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[13]));
        test(`click on ${social_connect[13]} developers link`, () => client.clickOnDevelopersLink(social_connect[13]));
        test(`log in with ${social_connect[13]} account`, () => client.fillWordpressSignInForm());
        test('access to the application', () => client.accessToApplication());
        test('access to the manage settings', () => client.clickOnManageSettingsSubTab());
        test('edit website url', () => client.setWebsiteUrl());
        test('edit redirect url', () => client.setRedirectUrl());
        test('edit javascript origins url', () => client.setJavascriptOriginsUrl());
        test('click on update button', () => client.clickOnUpdateButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/wordpress-client");

    scenario(`SocialConnect/Connect with - ${social_connect[13].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[13]} button`, () => client.clickOnWordpressButton(social_connect[13]));
        test(`should connecting with ${social_connect[13]} account`, () => client.connectingWordpressAccount());
        test('should check the connection', () => client.checkConnections('prestotests prestotests'));
    }, "social-connect/wordpress-client");

    scenario(`SocialConnect/Check customer - ${social_connect[13].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+Wordpress@gmail.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[13]} customer`, () => client.checkCutomer(social_connect[13]));
    }, "social-connect/wordpress-client");
}, "social-connect/wordpress-client");