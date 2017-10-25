scenario('Test twitter', client => {
    scenario('Configure twitter in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on twitter menu tab', () => client.ClickOnConfigurationAccountMenu(5));
        test('should configuration page is shown', () => client.waitForConfigurePage('twitter'));
        test('should click on twitter developers link', () => client.clickOnDevelopersLink('twitter'));
        test('should click on sign in button', () => client.clickOnSignInButton());
        test('should log in with twitter account', () => client.fillTwitterSignInForm());
        test('should access to the application', () => client.accessToApplication());
        test('should click on settings tab', () => client.clickOnSettingsTab());
        test('should edit website url', () => client.setWebsiteUrl());
        test('should edit callback url', () => client.setCallbackUrl());
        test('should click on update settings', () => client.clickOnUpdateSettingsButton());
        test('should click on keys and access tokens tab', () => client.clickOnKeysAccessTokens());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/twitter-client", true);
    scenario('Connect with twitter account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on twitter button', () => client.clickOnTwitterButton('twitter'));
        test('should connecting with twitter account', () => client.connectingTwitterAccount());
        test('should linked the account of twitter', () => client.linkedAccount('prestotests+twitter@gmail.com'));
        test('should check the connection', () => client.checkConnections('prestotests prestotests'));
    }, "social-connect/twitter-client", true);
    scenario('Check twitter customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should check twitter customer', () => client.checkCutomer('twitter'));
    }, "social-connect/twitter-client", true);
    scenario('Buy product with twitter account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on twitter button', () => client.clickOnConnectAccountButton(2));
        test('should connecting with twitter account', () => client.connectingTwitterAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delvery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/twitter-client", true);
}, "social-connect/twitter-client", true);