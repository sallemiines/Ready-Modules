// @TODO: fix connecting with pinterest account in FO when we buy product(error 502 bad gatway)
scenario('Test pinterest', client => {
    scenario('Configure pinterest in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should acces to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on pinterest menu tab', () => client.ClickOnConfigurationAccountMenu(18));
        test('should configuration page is shown', () => client.waitForConfigurePage('pinterest'));
        test('should click on pinterest developers link', () => client.clickOnDevelopersLink('pinterest'));
        test('should log in with pinterest account', () => client.fillPinterestSignInForm());
        test('should access to the application', () => client.accessToApplication());
        test('should click on show button', () => client.clickOnShowButton());
        test('should edit site url', () => client.setSiteUrl());
        test('should edit redirect url', () => client.setRedirectUrl());
        test('should click on save button', () => client.clickOnSaveButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/pinterest-client", true);
    scenario('Connect with pinterest account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on pinterest button', () => client.clickOnPinterestButton('pinterest'));
        test('should connecting with pinterest account', () => client.connectingPinterestAccount());
        test('should linked the account of pinterest', () => client.linkedAccount('prestotests+pinterest@gmail.com'));
        test('should check the connection', () => client.checkConnections('presto tests'));
    }, "social-connect/pinterest-client", true);
    scenario('Check pinterest customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+pinterest@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check pinterest customer', () => client.checkCutomer('pinterest'));
    }, "social-connect/pinterest-client", true);
    scenario('Buy product with pinterest account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on pinterest button', () => client.clickOnConnectAccountButton('pinterest'));
        test('should connecting with pinterest account', () => client.connectingPinterestAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delvery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/pinterest-client", true);
}, "social-connect/pinterest-client", true);