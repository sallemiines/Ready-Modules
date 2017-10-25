// @TODO:fix connecting with amazon in FO
scenario('Test amazon', client => {
    scenario('Configure amazon in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should sign in', () => client.fillSignInForm());
        test('should acces to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('fbloginblock'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on amazon menu tab', () => client.ClickOnConfigurationAccountMenu(6));
        test('should configuration page is shown', () => client.waitForConfigurePage('amazon'));
    }, "social-connect/amazon-client", true);
}, "social-connect/amazon-client", true);