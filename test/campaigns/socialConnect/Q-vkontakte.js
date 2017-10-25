scenario('Test vkontakte', client => {
    scenario('Configure vkontakte in BackOffice', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on vkontakte menu tab', () => client.ClickOnConfigurationAccountMenu(19));
        test('should configuration page is shown', () => client.waitForConfigurePage('vkontakte'));
        test('should click on vkontakte developers link', () => client.clickOnDevelopersLink('vkontakte'));
        test('should log in with vkontakte account', () => client.fillVkontakteSignInForm());
        test('should access to the list of application', () => client.listOfApplication());
        test('should access to the application', () => client.accessToApplication());
        test('should click on settings subtab', () => client.clickOnSettingsSubtab());
        test('should edit site url', () => client.setSiteUrl());
        test('should edit callback url', () => client.setBaseDomain());
        test('should click on save button', () => client.clickOnSaveButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/vkontakte-client", true);
    scenario('Connect with vkontakte account in Front Office', client => {
        test('should open browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on vkontakte button', () => client.clickOnVkontakteButton('vkontakte'));
        test('should should connecting with vkontakte account', () => client.connectingVkontakteAccount());
        test('sshould hould check the connection', () => client.checkConnections('Tests Presto'));
    }, "social-connect/vkontakte-client", true);
    scenario('Check vkontakte customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotestsvkontakte@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check vkontakte customer', () => client.checkCutomer('vkontakte'));
    }, "social-connect/vkontakte-client", true);
    scenario('Buy product with vkontakte account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on vkontakte button', () => client.clickOnConnectAccountButton(16));
        test('should connecting with vkontakte account', () => client.connectingVkontakteAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/vkontakte-client", true);
}, "social-connect/vkontakte-client", true);