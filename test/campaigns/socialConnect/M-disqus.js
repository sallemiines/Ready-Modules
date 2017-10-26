// @TODO: fix connecting with disqus account in FO when we buy product(error 502 bad gatway)
scenario('Test disqus', client => {
    scenario('Configure disqus in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on disqus menu tab', () => client.ClickOnConfigurationAccountMenu(14));
        test('should configuration page is shown', () => client.waitForConfigurePage('disqus'));
        test('should click on disqus developers link', () => client.clickOnDevelopersLink('disqus'));
        test('should log in with disqus account', () => client.fillDisqusSignInForm());
        test('should access to the application', () => client.accessToApplication());
        test('should access to the settings subtab', () => client.clickOnSettingsSubTab());
        test('should edit the website url', () => client.setWebsiteUrl());
        test('should edit the callback url', () => client.setCallbackUrl());
        test('should edit the terms of service url', () => client.setTermsOfServiceUrl());
        test('should click on save changes button', () => client.clickOnSaveChangesButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/disqus-client", true);
    scenario('Connect with disqus account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on disqus button', () => client.clickOnDisqusButton('disqus'));
        test('should connecting with disqus account', () => client.connectingDisqusAccount());
        test('should check the connection', () => client.checkConnections('prestotests prestotests'));
    }, "social-connect/disqus-client", true);
    scenario('Check disqus customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+disqus@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check disqus customer', () => client.checkCutomer('disqus'));
    }, "social-connect/disqus-client", true);
    scenario('Buy product with disqus account in FrontOffice', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on disqus button', () => client.clickOnConnectAccountButton('disqus'));
        test('should connecting with disqus account', () => client.connectingDisqusAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/disqus-client", true);
}, "social-connect/disqus-client", true);