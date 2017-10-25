scenario('Test linkedin', client => {
    scenario('Configure linkedin in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on linkedin menu tab', () => client.ClickOnConfigurationAccountMenu(10));
        test('should configuration page is shown', () => client.waitForConfigurePage('linkedin'));
        test('should click on linkedin developers link', () => client.clickOnDevelopersLink('linkedin'));
        test('should click on sign in button', () => client.clickOnIdentifyButton());
        test('should log in with linkedin account', () => client.fillLinkedinSignInForm());
        test('should access to the application', () => client.accessToApplication());
        test('should click on preferences menu', () => client.clickOnPreferencesMenu());
        test('should edit website url', () => client.setWebsiteUrl());
        test('should click on update button', () => client.clickOnUpdateButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/linkedin-client", true);
    scenario('Connect with linkedin account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on linkedin button', () => client.clickOnLinkedinButton('linkedin'));
        test('should connecting with linkedin account', () => client.connectingLinkedinAccount());
        test('should check the connection', () => client.checkConnections('Presto Tests'));
    }, "social-connect/linkedin-client", true);
    scenario('Check linkedin customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotestslinkedin@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check linkedin customer', () => client.checkCutomer('linkedin'));
    }, "social-connect/linkedin-client", true);
    scenario('Buy product with linkedin account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on linkedin button', () => client.clickOnConnectAccountButton(8));
        test('should connecting with linkedin account', () => client.connectingLinkedinAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delivery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/linkedin-client", true);
}, "social-connect/linkedin-client", true);