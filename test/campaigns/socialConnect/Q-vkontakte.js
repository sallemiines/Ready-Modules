scenario(`SocialConnect/${social_connect[15].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[15].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[15]} menu tab`, () => client.ClickOnConfigurationAccountMenu(19));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[15]));
        test(`click on ${social_connect[15]} developers link`, () => client.clickOnDevelopersLink(social_connect[15]));
        test(`log in with ${social_connect[15]} account`, () => client.fillVkontakteSignInForm());
        test('access to the list of application', () => client.listOfApplication());
        test('access to the application', () => client.accessToApplication());
        test('click on settings subtab', () => client.clickOnSettingsSubtab());
        test('edit site url', () => client.setSiteUrl());
        test('edit callback url', () => client.setBaseDomain());
        test('click on save button', () => client.clickOnSaveButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/vkontakte-client");

    scenario(`SocialConnect/Connect with - ${social_connect[15].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[15]} button`, () => client.clickOnVkontakteButton(social_connect[15]));
        test(`should connecting with ${social_connect[15]} account`, () => client.connectingVkontakteAccount());
        test('should check the connection', () => client.checkConnections('Tests Presto'));
    }, "social-connect/vkontakte-client");

    scenario(`SocialConnect/Check customer - ${social_connect[15].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotestsvkontakte@gmail.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[15]} customer`, () => client.checkCutomer(social_connect[15]));
    }, "social-connect/vkontakte-client");

    scenario(`SocialConnect/Buy product with - ${social_connect[15].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test('go to product details', () => client.goToProductDetails());
        test('click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('click on checkout button', () => client.clickOnCheckoutButton());
        test('click on connect button', () => client.clickOnConnectButton());
        test(`click on ${social_connect[15]} button`, () => client.clickOnConnectAccountButton(16));
        test(`should connecting with ${social_connect[15]} account`, () => client.connectingVkontakteAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/vkontakte-client");
}, "social-connect/vkontakte-client");