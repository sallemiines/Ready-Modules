scenario('Test google analytics', client => {
    scenario('Test case 1 : Configure "Google analytics" module ', () => {
        scenario('Log in in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should log in successfully in BO', () => client.signInBO());
            test('should go to the installed module page', () => client.goToModulePage());
            test('should search the "ps_googleanalytics" module page', () => client.searchModule());
            test('should go to the module configuration page', () => client.goToModuleConfigurationPage());
        }, "google-analytics/googleAnalytics-client");
    }, "google-analytics/googleAnalytics-client");
    scenario('Test case 2 : Configure google analytics account', () => {
        scenario('Go to google analytics account', client => {
            test('should go to creat account link', () => client.goToCreateAccountLink());
            test('should log in successfully in google account', () => client.fillGoogleSignInForm());
            test('should go to administration setting', () => client.clickOnAdministration());
            test('should select the Property Settings', () => client.selectPropertySettings());
            test('should check the existance of id ', () => client.checkId());
        }, "google-analytics/googleAnalytics-client");
        scenario('Configure the module in shop', client => {
            test('should back to shop', () => client.backToShop());
            test('should enter Google Analytics Tracking ID', () => client.addGoogleTrackingId());
            test('should enable the user ID tracking', () => client.enableUserTrackingId());
            test('should click on button Save', () => client.clickOnSaveButton());
            test('should check the account ID', () => client.checkAccountId());
            test('should check the user ID', () => client.checkUserId());
        }, "google-analytics/googleAnalytics-client");
        scenario('Logout from Back Office', client => {
            test('should logout', () => client.signOutBO());
        }, "google-analytics/googleAnalytics-client");
    }, "google-analytics/googleAnalytics-client");
}, "google-analytics/googleAnalytics-client", true);
