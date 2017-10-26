// @TODO: fix connecting with microsoft account in FO when we buy product(error 502 bad gatway)
scenario('Test microsoft', client => {
    scenario('Configure microsoft in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on microsoft menu tab', () => client.ClickOnConfigurationAccountMenu(11));
        test('should configuration page is shown', () => client.waitForConfigurePage("hotmail"));
        test('should click on microsoft developers link', () => client.clickOnDevelopersLink("hotmail"));
        test('should log in with microsoft account', () => client.fillMicrosoftSignInForm());
        test('should click on cancel button', () => client.clickOnCancelButton());
        test('should access to the application', () => client.accessToApplication());
        test('should edit the redirect url', () => client.setRedirectUrl());
        test('should click on save button', () => client.clickOnSaveButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/microsoft-client", true);
    scenario('Connect with microsoft account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on microsoft button', () => client.clickOnMicrosoftButton('microsoft'));
        test('should connecting with microsoft account', () => client.connectingMicrosoftAccount());
        test('should check the connection', () => client.checkConnections('Tests Presto'));
    }, "social-connect/microsoft-client", true);
    scenario('Check microsoft customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests@outlook.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check microsoft customer', () => client.checkCutomer('microsoft'));
    }, "social-connect/microsoft-client", true);
    scenario('Buy product with microsoft account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on microsoft button', () => client.clickOnConnectAccountButton('microsoft'));
        test('should connecting with microsoft account', () => client.connectingMicrosoftAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/microsoft-client", true);
}, "social-connect/microsoft-client", true);