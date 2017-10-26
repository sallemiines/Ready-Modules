// @TODO: fix connecting with foursquare account in FO when we buy product(error 502 bad gatway)
scenario('Test foursquare', client => {
    scenario('Configure foursquare in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on foursquare menu tab', () => client.ClickOnConfigurationAccountMenu(12));
        test('should configuration page is shown', () => client.waitForConfigurePage('foursquare'));
        test('should click on foursquare developers link', () => client.clickOnDevelopersLink('foursquare'));
        test('should log in with foursquare account', () => client.fillFoursquareSignInForm());
        test('should access to the application', () => client.accessToApplication());
        test('should click on update button', () => client.clickOnUpdateButton());
        test('should edit the welcome page url', () => client.setWelcomePageUrl());
        test('should edit the privacy policy url', () => client.setPrivacyPolicyUrl());
        test('should edit the redirect url', () => client.setRedirectUrl());
        test('should click on save button', () => client.clickOnSaveButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/foursquare-client", true);
    scenario('Connect with foursquare account in FrontOffice', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on foursquare button', () => client.clickOnFoursquareButton('foursquare'));
        test('should connecting with foursquare account', () => client.connectingFoursquareAccount());
        test('should check the connection', () => client.checkConnections('Tests Presto'));
    }, "social-connect/foursquare-client", true);
    scenario('Check foursquare customer in BackOffice', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+foursquare@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check foursquare customer', () => client.checkCutomer('foursquare'));
    }, "social-connect/foursquare-client", true);
    scenario('Buy product with foursquare account in FrontOffice', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on foursquare button', () => client.clickOnConnectAccountButton('foursquare'));
        test('should connecting with foursquare account', () => client.connectingFoursquareAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/foursquare-client", true);
}, "social-connect/foursquare-client", true);