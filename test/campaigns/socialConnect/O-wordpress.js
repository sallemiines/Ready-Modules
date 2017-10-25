scenario('Test wordpress', client => {
    scenario('Configure wordpress in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on wordpress menu tab', () => client.ClickOnConfigurationAccountMenu(16));
        test('should configuration page is shown', () => client.waitForConfigurePage('wordpress'));
        test('should click on wordpress developers link', () => client.clickOnDevelopersLink('wordpress'));
        test('should log in with wordpress account', () => client.fillWordpressSignInForm());
        test('should access to the application', () => client.accessToApplication());
        test('should access to the manage settings', () => client.clickOnManageSettingsSubTab());
        test('should edit website url', () => client.setWebsiteUrl());
        test('should edit redirect url', () => client.setRedirectUrl());
        test('should edit javascript origins url', () => client.setJavascriptOriginsUrl());
        test('should click on update button', () => client.clickOnUpdateButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/wordpress-client", true);
    scenario('Connect with wordpress account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on wordpress button', () => client.clickOnWordpressButton('wordpress'));
        test('should connecting with wordpress account', () => client.connectingWordpressAccount());
        test('should check the connection', () => client.checkConnections('prestotests prestotests'));
    }, "social-connect/wordpress-client", true);
    scenario('Check wordpress customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+Wordpress@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check wordpress customer', () => client.checkCutomer('wordpress'));
    }, "social-connect/wordpress-client", true);
    scenario('Buy product with wordpress account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on wordpress button', () => client.clickOnConnectAccountButton(14));
        test('should connecting with wordpress account', () => client.connectingWordpressAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/wordpress-client", true);
}, "social-connect/wordpress-client", true);