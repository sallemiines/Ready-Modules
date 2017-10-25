// @TODO:fix creating account and configuration of Facebook
scenario(`Test facebook`, () => {
    scenario(`Configure facebook in Back Office`, client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on facebook menu tab', () => client.ClickOnConfigurationAccountMenu(4));
        test('should configuration page is shown', () => client.waitForConfigurePage('facebook'));
    }, "social-connect/facebook-client", true);
}, "social-connect/facebook-client", true);