// @TODO:fix connection dropbox in FO ("error": "v1_retired")
scenario('Test dropbox', client => {
    scenario('Configure dropbox in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on dropbox menu tab', () => client.ClickOnConfigurationAccountMenu(15));
        test('should configuration page is shown', () => client.waitForConfigurePage('dropbox'));
        test('should click on dropbox developers link', () => client.clickOnDevelopersLink('dropbox'));
        test('should log in with dropbox account', () => client.fillDropboxSignInForm());
        test('should access to the application', () => client.accessToApplication());
        test('should delete old redirect url', () => client.clickOnDeleteOldRedirectIcon());
        test('should add new redirect url', () => client.setRedirectUrl());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/dropbox-client", true);
    scenario('Connect with dropbox account in FronOffice', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on dropbox button', () => client.clickOnDropboxButton('dropbox'));
        test('should connecting with dropbox account', () => client.connectingDropboxAccount());
        test('should check the connection', () => client.checkConnections('Tests Presto'));
    }, "social-connect/dropbox-client", true);
    scenario('Check dropbox customer in BackOffice', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+dropbox@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check dropbox customer', () => client.checkCutomer('dropbox'));
    }, "social-connect/dropbox-client", true);
    scenario('Buy product with dropbox account in FrontOffice', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on dropbox button', () => client.clickOnConnectAccountButton('dropbox'));
        test('should connecting with dropbox account', () => client.connectingDropboxAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/dropbox-client", true);
}, "social-connect/dropbox-client", true);