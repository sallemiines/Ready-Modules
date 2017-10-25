scenario('Test tumblr', client => {
    scenario('Configure tumblr in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on tumblr menu tab', () => client.ClickOnConfigurationAccountMenu(17));
        test('should configuration page is shown', () => client.waitForConfigurePage('tumblr'));
        test('should click on tumblr developers link', () => client.clickOnDevelopersLink('tumblr'));
        test('should log in with tumblr account', () => client.fillTumblrSignInForm());
        test('should access to the application', () => client.accessToApplication());
        test('should click on show secret button', () => client.clickOnShowSecretButton());
        test('should edit website url', () => client.setWebsiteUrl());
        test('should edit callback url', () => client.setCallbackUrl());
        test('should click on save button', () => client.clickOnSaveButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/tumblr-client", true);
    scenario('Connect with tumblr account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on tumblr button', () => client.clickOnTumblrButton('tumblr'));
        test('should connecting with tumblr account', () => client.connectingTumblrAccount());
        test('should linked the account of tumblr', () => client.linkedAccount('prestotests+tumblr@gmail.com'));
        test('should check the connection', () => client.checkConnections('prestotests prestotests'));
    }, "social-connect/tumblr-client", true);
    scenario('Check tumblr customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+tumblr@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check tumblr customer', () => client.checkCutomer('tumblr'));
    }, "social-connect/tumblr-client", true);
    scenario('Buy product with tumblr account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on tumblr button', () => client.clickOnConnectAccountButton(15));
        test('should connecting with tumblr account', () => client.connectingTumblrAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/tumblr-client", true);
}, "social-connect/tumblr-client", true);