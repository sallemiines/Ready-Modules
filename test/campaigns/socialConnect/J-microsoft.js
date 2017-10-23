scenario(`SocialConnect/${social_connect[8].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[8].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[8]} menu tab`, () => client.ClickOnConfigurationAccountMenu(11));
        test('configuration page is shown', () => client.waitForConfigurePage("hotmail"));
        test(`click on ${social_connect[8]} developers link`, () => client.clickOnDevelopersLink("hotmail"));
        test(`log in with ${social_connect[8]} account`, () => client.fillMicrosoftSignInForm());
        test('click on cancel button', () => client.clickOnCancelButton());
        test('access to the application', () => client.accessToApplication());
        test('edit the redirect url', () => client.setRedirectUrl());
        test('click on save button', () => client.clickOnSaveButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/microsoft-client");

    scenario(`SocialConnect/Connect with - ${social_connect[8].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[8]} button`, () => client.clickOnMicrosoftButton(social_connect[8]));
        test(`should connecting with ${social_connect[8]} account`, () => client.connectingMicrosoftAccount());
        test('should check the connection', () => client.checkConnections('Tests Presto'));
    }, "social-connect/microsoft-client");

    scenario(`SocialConnect/Check customer - ${social_connect[8].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests@outlook.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[8]} customer`, () => client.checkCutomer(social_connect[8]));
    }, "social-connect/microsoft-client");

    scenario(`SocialConnect/Buy product with - ${social_connect[8].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test('go to product details', () => client.goToProductDetails());
        test('click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('click on checkout button', () => client.clickOnCheckoutButton());
        test('click on connect button', () => client.clickOnConnectButton());
        test(`click on ${social_connect[8]} button`, () => client.clickOnConnectAccountButton(9));
        test(`should connecting with ${social_connect[8]} account`, () => client.connectingMicrosoftAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/microsoft-client");
}, "social-connect/microsoft-client");