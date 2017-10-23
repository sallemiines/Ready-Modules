// @TODO:fix connecting with amazon in FO
scenario(`SocialConnect/${social_connect[2].toUpperCase()}`, client => {
    scenario(`SocialConnect/Configuration - ${social_connect[2].toUpperCase()} - BackOffice`, client => {
        test('open browser', () => client.open());
        test('sign in', () => client.fillSignInForm());
        test('acces to module page', () => client.goToModule());
        test('search the module', () => client.searchModule(module_tech_name));
        test('click on configure button', () => client.clickOnConfigureButton());
        test(`click on ${social_connect[2]} menu tab`, () => client.ClickOnConfigurationAccountMenu(6));
        test('configuration page is shown', () => client.waitForConfigurePage(social_connect[2]));
    }, "social-connect/amazon-client");
}, "social-connect/amazon-client");