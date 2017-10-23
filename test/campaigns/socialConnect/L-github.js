scenario(`SocialConnect/${social_connect[10].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[10].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[10]} menu tab`, () => client.ClickOnConfigurationAccountMenu(13));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[10]));
        test(`click on ${social_connect[10]} developers link`, () => client.clickOnDevelopersLink(social_connect[10]));
        test(`log in with ${social_connect[10]} account`, () => client.fillGithubSignInForm());
        test('click on cancel button', () => client.clickOnCancelButton());
        test('access to the application', () => client.accessToApplication());
        test('edit the home page url', () => client.setHomePageUrl());
        test('edit the callback url', () => client.setCallbackUrl());
        test('click on update button', () => client.clickOnUpdateButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/github-client");

    scenario(`SocialConnect/Connect with - ${social_connect[10].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[10]} button`, () => client.clickOnGithubButton(social_connect[10]));
        test(`should connecting with ${social_connect[10]} account`, () => client.connectingGithubAccount());
        test('should check the connection', () => client.checkConnections('prestotests prestotests'));
    }, "social-connect/github-client");

    scenario(`SocialConnect/Check customer - ${social_connect[10].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+github@gmail.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[10]} customer`, () => client.checkCutomer(social_connect[10]));
    }, "social-connect/github-client");

    scenario(`SocialConnect/Buy product with - ${social_connect[10].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test('go to product details', () => client.goToProductDetails());
        test('click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('click on checkout button', () => client.clickOnCheckoutButton());
        test('click on connect button', () => client.clickOnConnectButton());
        test(`click on ${social_connect[10]} button`, () => client.clickOnConnectAccountButton(11));
        test(`should connecting with ${social_connect[10]} account`, () => client.connectingGithubAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/github-client");
}, "social-connect/github-client");