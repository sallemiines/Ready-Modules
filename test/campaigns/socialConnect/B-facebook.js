// @TODO:fix creating account and configuration of Facebook
scenario(`SocialConnect/${social_connect[0].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[0].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('access to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[0]} menu tab`, () => client.ClickOnConfigurationAccountMenu(4));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[0]));
    }, "social-connect/facebook-client");
}, "social-connect/facebook-client");