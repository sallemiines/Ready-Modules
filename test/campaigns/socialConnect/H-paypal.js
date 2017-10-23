// @TODO:fix connecting with paypal in FO
scenario(`SocialConnect/${social_connect[6].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[6].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('acces to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[6]} menu tab`, () => client.ClickOnConfigurationAccountMenu(9));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[6]));
        test(`click on ${social_connect[6]} developers link`, () => client.clickOnDevelopersLink(social_connect[6]));
        test('click on log into dashboard button', () => client.clickOnLogIntoDashboardButton());
        test(`log in with ${social_connect[6]} account`, () => client.fillPaypalSignInForm());
        test('access to the application', () => client.accessToApplication());
        test('click on show secret button', () => client.clickOnShowSecretButton());
        test('click on show return url button', () => client.clickOnReturnUrlButton());
        test('edit return url', () => client.setReturnUrl());
        test('click on show return url button', () => client.clickOnAdvancedOptionsButton());
        test('edit privacy policy url', () => client.setPrivacyPolicyUrl());
        test('edit user agreement url', () => client.setUserAgreementUrl());
        test('click on save button', () => client.clickOnSaveButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/paypal-client");

    scenario(`SocialConnect/Connect with - ${social_connect[6].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[6]} button`, () => client.clickOnPaypalButton(social_connect[6]));
        test(`should connecting with ${social_connect[6]} account`, () => client.connectingPaypalAccount());
        test('should check the connection', () => client.checkConnections('Presto Tests'));
    }, "social-connect/paypal-client");

    scenario(`SocialConnect/Buy product with - ${social_connect[6].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test('go to product details', () => client.goToProductDetails());
        test('click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('click on checkout button', () => client.clickOnCheckoutButton());
        test('click on connect button', () => client.clickOnConnectButton());
        test(`click on ${social_connect[6]} button`, () => client.clickOnConnectAccountButton(7));
        test(`should connecting with ${social_connect[6]} account`, () => client.connectingPaypalAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delvery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/paypal-client");

    scenario(`SocialConnect/Check customer - ${social_connect[6].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+paypal@gmail.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[6]} customer`, () => client.checkCutomer(social_connect[6]));
    }, "social-connect/paypal-client");
}, "social-connect/paypal-client");