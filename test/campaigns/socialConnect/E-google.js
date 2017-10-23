scenario(`SocialConnect/${social_connect[3].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[3].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('acces to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[3]} menu tab`, () => client.ClickOnConfigurationAccountMenu(7));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[3]));
        test(`click on ${social_connect[3]} developers link`, () => client.clickOnDevelopersLink(social_connect[3]));
        test(`log in with ${social_connect[3]} account`, () => client.fillGoogleSignInForm());
        test('access to the application', () => client.accessToApplication());
        test('go to identifiants menu', () => client.clickOnIdentifiantsMenu());
        test('click on create identifiants button', () => client.clickOnCreateIdentifiantButton());
        test('click on oauth', () => client.clickOnOauthButton());
        test('should select a web application', () => client.selectTypeApplication());
        test('edit authorized javaScript origins', () => client.setJavaScriptOrigins());
        test('edit authorized redirect uri', () => client.setAuthorizedRedirectUri());
        test('click on create button', () => client.clickOnCreateButton());
        test('click on ok button', () => client.clickOnOkButton());
        test('update configuration settings', () => client.fillConfigurationForm());
    }, "social-connect/google-client");

    scenario(`SocialConnect/Connect with - ${social_connect[3].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test(`click on ${social_connect[3]} button`, () => client.clickOnGoogleButton(social_connect[3]));
        test(`should connecting with ${social_connect[3]} account`, () => client.connectingGoogleAccount());
        test('should check the connection', () => client.checkConnections('Presto Tests'));
    }, "social-connect/google-client");

    scenario(`SocialConnect/Check customer - ${social_connect[3].toUpperCase()} - in BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to customers page', () => client.goToCustomers());
        test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests@gmail.com"));
        test('click on search button', () => client.clickOnSearchButton());
        test(`should check ${social_connect[3]} customer`, () => client.checkCutomer(social_connect[3]));
    }, "social-connect/google-client");

    scenario(`SocialConnect/Buy product with - ${social_connect[3].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
        test('go to product details', () => client.goToProductDetails());
        test('click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('click on checkout button', () => client.clickOnCheckoutButton());
        test('click on connect button', () => client.clickOnConnectButton());
        test(`click on ${social_connect[3]} button`, () => client.clickOnConnectAccountButton(4));
        test(`should connecting with ${social_connect[3]} account`, () => client.connectingGoogleAccount());
        test('should select the address step-2', () => client.fillAddressForm());
        test('should select the delvery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should confirm the order', () => client.confirmationOrder());
        test('should get the order id', () => client.getOrderId());
    }, "social-connect/google-client");

}, "social-connect/google-client");