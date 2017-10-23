scenario(`SocialConnect/${social_connect[9].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[9].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[9]} menu tab`, () => client.ClickOnConfigurationAccountMenu(12));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[9]));
        test(`click on ${social_connect[9]} developers link`, () => client.clickOnDevelopersLink(social_connect[9]));
        test(`log in with ${social_connect[9]} account`, () => client.fillFoursquareSignInForm());
        test('access to the application', () => client.accessToApplication());
        test('click on update button', () => client.clickOnUpdateButton());
        test('edit the welcome page url', () => client.setWelcomePageUrl());
        test('edit the privacy policy url', () => client.setPrivacyPolicyUrl());
        test('edit the redirect url', () => client.setRedirectUrl());
        test('click on save button', () => client.clickOnSaveButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/foursquare-client");

    scenario(`SocialConnect/Connect with - ${social_connect[9].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[9]} button`, () => client.clickOnFoursquareButton(social_connect[9]));
        test(`should connecting with ${social_connect[9]} account`, () => client.connectingFoursquareAccount());
        test('should check the connection', () => client.checkConnections('Tests Presto'));
    }, "social-connect/foursquare-client");

    scenario(`SocialConnect/Buy product with - ${social_connect[9].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test('go to product details', () => client.goToProductDetails());
        test('click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('click on checkout button', () => client.clickOnCheckoutButton());
        test('click on connect button', () => client.clickOnConnectButton());
        test(`click on ${social_connect[9]} button`, () => client.clickOnConnectAccountButton(10));
        test(`should connecting with ${social_connect[9]} account`, () => client.connectingFoursquareAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/foursquare-client");

    scenario(`SocialConnect/Check customer - ${social_connect[9].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+foursquare@gmail.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[9]} customer`, () => client.checkCutomer(social_connect[9]));
    }, "social-connect/foursquare-client");
}, "social-connect/foursquare-client");