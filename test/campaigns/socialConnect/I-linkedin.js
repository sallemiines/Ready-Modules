scenario(`SocialConnect/${social_connect[7].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[7].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[7]} menu tab`, () => client.ClickOnConfigurationAccountMenu(10));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[7]));
        test(`click on ${social_connect[7]} developers link`, () => client.clickOnDevelopersLink(social_connect[7]));
        test('click on sign in button', () => client.clickOnIdentifyButton());
        test(`log in with ${social_connect[7]} account`, () => client.fillLinkedinSignInForm());
        test('access to the application', () => client.accessToApplication());
        test('click on preferences menu', () => client.clickOnPreferencesMenu());
        test('edit website url', () => client.setWebsiteUrl());
        test('click on update button', () => client.clickOnUpdateButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/linkedin-client");

    scenario(`SocialConnect/Connect with - ${social_connect[7].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[7]} button`, () => client.clickOnLinkedinButton(social_connect[7]));
        test(`should connecting with ${social_connect[7]} account`, () => client.connectingLinkedinAccount());
        test('should check the connection', () => client.checkConnections('Presto Tests'));
    }, "social-connect/linkedin-client");

    scenario(`SocialConnect/Check customer - ${social_connect[7].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotestslinkedin@gmail.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[7]} customer`, () => client.checkCutomer(social_connect[7]));
    }, "social-connect/linkedin-client");

    scenario(`SocialConnect/Buy product with - ${social_connect[7].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test('go to product details', () => client.goToProductDetails());
        test('click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('click on checkout button', () => client.clickOnCheckoutButton());
        test('click on connect button', () => client.clickOnConnectButton());
        test(`click on ${social_connect[7]} button`, () => client.clickOnConnectAccountButton(8));
        test(`should connecting with ${social_connect[7]} account`, () => client.connectingLinkedinAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/linkedin-client");
}, "social-connect/linkedin-client");