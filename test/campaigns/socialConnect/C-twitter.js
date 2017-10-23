scenario(`SocialConnect/${social_connect[1].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[1].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[1]} menu tab`, () => client.ClickOnConfigurationAccountMenu(5));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[1]));
        test(`click on ${social_connect[1]} developers link`, () => client.clickOnDevelopersLink(social_connect[1]));
        test('click on sign in button', () => client.clickOnSignInButton());
        test(`log in with ${social_connect[1]} account`, () => client.fillTwitterSignInForm());
        test('access to the application', () => client.accessToApplication());
        test('click on settings tab', () => client.clickOnSettingsTab());
        test('edit website url', () => client.setWebsiteUrl());
        test('edit callback url', () => client.setCallbackUrl());
        test('click on update settings', () => client.clickOnUpdateSettingsButton());
        test('click on keys and access tokens tab', () => client.clickOnKeysAccessTokens());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/twitter-client");

    scenario(`SocialConnect/Connect with - ${social_connect[1].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[1]} button`, () => client.clickOnTwitterButton(social_connect[1]));
        test(`should connecting with ${social_connect[1]} account`, () => client.connectingTwitterAccount());
        test(`should linked the account of ${social_connect[1]}`, () => client.linkedAccount('prestotests+twitter@gmail.com'));
        test('should check the connection', () => client.checkConnections('prestotests prestotests'));
    }, "social-connect/twitter-client");

    scenario(`SocialConnect/Buy product with - ${social_connect[1].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test('go to product details', () => client.goToProductDetails());
        test('click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('click on checkout button', () => client.clickOnCheckoutButton());
        test('click on connect button', () => client.clickOnConnectButton());
        test(`click on ${social_connect[1]} button`, () => client.clickOnConnectAccountButton(2));
        test(`should connecting with ${social_connect[1]} account`, () => client.connectingTwitterAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delvery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/twitter-client");

    scenario(`SocialConnect/Check customer - ${social_connect[1].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test(`should check ${social_connect[1]} customer`, () => client.checkCutomer(social_connect[1]));
    }, "social-connect/twitter-client");
}, "social-connect/twitter-client");