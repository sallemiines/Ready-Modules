scenario('MailChimp-Integration', client => {
    scenario('Test N°1 = Check the store  adress configuration" ', () => {
        scenario('Log in in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should log in successfully in BO', () => client.signInBO());
        }, "mailchimp-integration/mailChimpintegration-client");
        scenario('Configure  the store adress', client => {
            test('should go to store adress', () => client.goToStoreAdress());
            test('should configure the store adress', () => client.configureStoreAdress());
            test('should save the store adress', () => client.clickOnSaveStoreButton());
        }, "mailchimp-integration/mailChimpintegration-client");
        scenario('Go to the module page', client => {
            test('should go to the installed module page', () => client.goToModulePage());
            test('should search the " MailChimpIntegration " module page', () => client.searchModule());
        }, "mailchimp-integration/mailChimpintegration-client");
        scenario('Test N°2 = Configure the "MailChimIntegration" module ', () => {
            test('should go to the module configuration page', () => client.goModuleConfigurationPage());
            test('should access to mailchimp ', () => client.clickAccessToMailchimpAccountButton());
            test('should log in successfully in mailchimp account ', () => client.signInMailchimp());
            test('should add a new list ', () => client.addNewList());
            test('should disconnect from list', () => client.disconnectFromList());
            test('should select list', () => client.selectList());
        }, "mailchimp-integration/mailChimpintegration-client");
    }, "mailchimp-integration/mailChimpintegration-client");
}, "mailchimp-integration/mailChimpintegration-client", true);