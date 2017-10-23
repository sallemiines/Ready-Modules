scenario(`SocialConnect/${social_connect[4].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[4].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('acces to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[4]} menu tab`, () => client.ClickOnConfigurationAccountMenu(18));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[4]));
        test(`click on ${social_connect[4]} developers link`, () => client.clickOnDevelopersLink(social_connect[4]));
        test(`log in with ${social_connect[4]} account`, () => client.fillPinterestSignInForm());
        test('access to the application', () => client.accessToApplication());
        test('click on show button', () => client.clickOnShowButton());
        test('edit site url', () => client.setSiteUrl());
        test('edit redirect url', () => client.setRedirectUrl());
        test('click on save button', () => client.clickOnSaveButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/pinterest-client");

    scenario(`SocialConnect/Connect with - ${social_connect[4].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[4]} button`, () => client.clickOnPinterestButton(social_connect[4]));
        test(`should connecting with ${social_connect[4]} account`, () => client.connectingPinterestAccount());
        test(`should linked the account of ${social_connect[4]}`, () => client.linkedAccount('prestotests+pinterest@gmail.com'));
        test('should check the connection', () => client.checkConnections('presto tests'));
    }, "social-connect/pinterest-client");

    scenario(`SocialConnect/Buy product with - ${social_connect[4].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test('go to product details', () => client.goToProductDetails());
        test('click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('click on checkout button', () => client.clickOnCheckoutButton());
        test('click on connect button', () => client.clickOnConnectButton());
        test(`click on ${social_connect[4]} button`, () => client.clickOnConnectAccountButton(5));
        test(`should connecting with ${social_connect[4]} account`, () => client.connectingPinterestAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delvery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/pinterest-client");

    scenario(`SocialConnect/Check customer - ${social_connect[4].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+pinterest@gmail.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[4]} customer`, () => client.checkCutomer(social_connect[4]));
    }, "social-connect/pinterest-client");
}, "social-connect/pinterest-client");