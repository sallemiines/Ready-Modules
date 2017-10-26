scenario('MailChimp-Integration', client => {
    scenario('Test N°1 = Check the store  adresse configuration" ', () => {
        scenario('Log in in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should log in successfully in BO', () => client.signInBO());
        }, "mailChimpintegration-client");
        scenario('Go to the store adress', client => {
            test('should go to  store adresse', () => client.goToStoreAdresse());
            test('should config the store adresse', () => client.configStoreAdresse());
            test('should save the store adresse', () => client.clickSaveStoreButton());
        }, "mailChimpintegration-client");
        scenario('Go to the module page', client => {
            test('should go to the installed module page', () => client.goToModulePage());
            test('should search the MailChimpIntegration module page', () => client.searchModule());
        }, "mailChimpintegration-client");
    scenario('Test N°2 = Configure the  MailChimIntegration module" ', () => {
        test('should go to the module configuration page', () => client.goModuleConfigurationPage());
        test('should access to mailchimp ', () => client.clickAccessToMailchimpAccountButton());
        test('should log in successfully in mailchimp account ', () => client.signMailchimp());
        test('should add a  new name list ', () => client.addNewList());
        test('Disconnect from list', () => client.disconnectFromLIst());
      }, "blockYoutube-client");
  }, "mailChimpintegration-client");
}, "mailChimpintegration-client", true);