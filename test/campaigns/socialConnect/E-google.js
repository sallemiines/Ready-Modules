// @TODO: fix connecting with google account in FO when we buy product(error 502 bad gatway)
scenario('Test google', client => {
    scenario('Configure google in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should acces to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on google menu tab', () => client.ClickOnConfigurationAccountMenu(7));
        test('should configuration page is shown', () => client.waitForConfigurePage('google'));
        test('should click on google developers link', () => client.clickOnDevelopersLink('google'));
        test('should log in with google account', () => client.fillGoogleSignInForm());
        test('should access to the application', () => client.accessToApplication());
        test('should go to identifiants menu', () => client.clickOnIdentifiantsMenu());
        test('should click on create identifiants button', () => client.clickOnCreateIdentifiantButton());
        test('should click on oauth', () => client.clickOnOauthButton());
        test('should select a web application', () => client.selectTypeApplication());
        test('should edit authorized javaScript origins', () => client.setJavaScriptOrigins());
        test('should edit authorized redirect uri', () => client.setAuthorizedRedirectUri());
        test('should click on create button', () => client.clickOnCreateButton());
        test('should click on ok button', () => client.clickOnOkButton());
        test('should update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/google-client", true);
    scenario('Connect with google account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on google button', () => client.clickOnGoogleButton('google'));
        test('should connecting with google account', () => client.connectingGoogleAccount());
        test('should check the connection', () => client.checkConnections('Presto Tests'));
    }, "social-connect/google-client", true);
    scenario('Check google customer in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to customers page', () => client.goToCustomers());
        test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests@gmail.com"));
        test('should click on search button', () => client.clickOnSearchButton());
        test('should check google customer', () => client.checkCutomer('google'));
    }, "social-connect/google-client", true);
    scenario('Buy product with google account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should click on connect button', () => client.clickOnConnectButton());
        test('should click on google button', () => client.clickOnConnectAccountButton('google'));
        test('should connecting with google account', () => client.connectingGoogleAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delvery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/google-client", true);
}, "social-connect/google-client", true);