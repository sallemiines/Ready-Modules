// @TODO: fix connecting with github account in FO when we buy product(error 502 bad gatway)
scenario('Test github', client => {
    scenario('Configure github Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on github menu tab', () => client.ClickOnConfigurationAccountMenu(13));
        test('should configuration page is shown', () => client.waitForConfigurePage('github'));
        test('should click on github developers link', () => client.clickOnDevelopersLink('github'));
        test('should log in with github account', () => client.fillGithubSignInForm());
        test('should click on cancel button', () => client.clickOnCancelButton());
        test('should access to the application', () => client.accessToApplication());
        test('should edit the home page url', () => client.setHomePageUrl());
        test('should edit the callback url', () => client.setCallbackUrl());
        test('should click on update button', () => client.clickOnUpdateButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/github-client", true);
    scenario('Connect with github account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on github button', () => client.clickOnGithubButton('github'));
        test('should connecting with github account', () => client.connectingGithubAccount());
        test('should check the connection', () => client.checkConnections('prestotests prestotests'));
    }, "social-connect/github-client", true);
    scenario('Check github customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+github@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check github customer', () => client.checkCutomer('github'));
    }, "social-connect/github-client", true);
    scenario('Buy product with github account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on github button', () => client.clickOnConnectAccountButton('github'));
        test('should connecting with github account', () => client.connectingGithubAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/github-client", true);
}, "social-connect/github-client", true);