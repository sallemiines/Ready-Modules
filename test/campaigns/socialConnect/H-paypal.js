// @TODO:fix connecting with paypal in FO (error client_id ou redirect_uri incorrect)
scenario('Test paypal', client => {
    scenario('Configure paypal in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should acces to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on paypal menu tab', () => client.ClickOnConfigurationAccountMenu(9));
        test('should configuration page is shown', () => client.waitForConfigurePage('paypal'));
        test('should click on paypal developers link', () => client.clickOnDevelopersLink('paypal'));
        test('should click on log into dashboard button', () => client.clickOnLogIntoDashboardButton());
        test('should log in with paypal account', () => client.fillPaypalSignInForm());
        test('should access to the application', () => client.accessToApplication());
        test('should click on show secret button', () => client.clickOnShowSecretButton());
        test('should click on show return url button', () => client.clickOnReturnUrlButton());
        test('should edit return url', () => client.setReturnUrl());
        test('should click on show return url button', () => client.clickOnAdvancedOptionsButton());
        test('should edit privacy policy url', () => client.setPrivacyPolicyUrl());
        test('should edit user agreement url', () => client.setUserAgreementUrl());
        test('should click on save button', () => client.clickOnSaveButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/paypal-client", true);
    scenario('Connect with paypal account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on paypal button', () => client.clickOnPaypalButton('paypal'));
        test('should connecting with paypal account', () => client.connectingPaypalAccount());
        test('should check the connection', () => client.checkConnections('Presto Tests'));
    }, "social-connect/paypal-client", true);
    scenario('Check paypal customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+paypal@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check paypal customer', () => client.checkCutomer('paypal'));
    }, "social-connect/paypal-client", true);
    scenario('Buy product with paypal account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on paypal button', () => client.clickOnConnectAccountButton('paypal'));
        test('should connecting with paypal account', () => client.connectingPaypalAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delvery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/paypal-client", true);
}, "social-connect/paypal-client", true);