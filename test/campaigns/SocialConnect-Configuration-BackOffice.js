let SOCIAL_CONNECT = ["facebook", "twitter", "amazon", "google", "pinterest", "yahoo", "paypal", "linkedin", "microsoft", "foursquare", "github", "disqus", "dropbox", "wordpress", "tumblr", "vkontakte"];

// scenario('SocialConnect/CheckLogos - Front Office', client => {
//     test('open browser', () => client.open());
//     test('access to Front Office', () => client.accessToFrontOffice());
//     for(let i = 0; i < (SOCIAL_CONNECT.length); i++){
//         test(`check first ${SOCIAL_CONNECT[i]} logo`, () => client.findFirstLogos(SOCIAL_CONNECT[i]));
//         test(`check second ${SOCIAL_CONNECT[i]} logo`, () => client.findSecondLogos(SOCIAL_CONNECT[i]));
//         test(`check third ${SOCIAL_CONNECT[i]} logo`, () => client.findThirdLogos(SOCIAL_CONNECT[i]));
//     }
// }, "checkLogos-FrontOffice");

// @TODO:fix creating account and configuration of Facebook
// scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[0].toUpperCase()} - BackOffice`, client => {
//     test('open browser', () => client.open());
//     test('sign in', () => client.fillSignInForm());
//     test('access to module page', () => client.goToModule());
//     test('search the module', () => client.searchModule(module_tech_name));
//     test('click on configure button', () => client.clickOnConfigureButton());
//     test(`click on ${SOCIAL_CONNECT[0]} menu tab`, () => client.ClickOnConfigurationAccountMenu(4));
//     test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[0]));
// }, "update_configuration_app_facebook");

// scenario(`SocialConnect/${SOCIAL_CONNECT[1].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[1].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[1]} menu tab`, () => client.ClickOnConfigurationAccountMenu(5));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[1]));
//         test(`click on ${SOCIAL_CONNECT[1]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[1]));
//         test('click on sign in button', () => client.clickOnSignInButton());
//         test(`log in with ${SOCIAL_CONNECT[1]} account`, () => client.fillTwitterSignInForm());
//         test('access to the application', () => client.accessToApplication());
//         test('click on settings tab', () => client.clickOnSettingsTab());
//         test('edit website url', () => client.setWebsiteUrl());
//         test('edit callback url', () => client.setCallbackUrl());
//         test('click on update settings', () => client.clickOnUpdateSettingsButton());
//         test('click on keys and access tokens tab', () => client.clickOnKeysAccessTokens());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_twitter");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[1].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[1]} button`, () => client.clickOnTwitterButton(SOCIAL_CONNECT[1]));
//         test(`should connecting with ${SOCIAL_CONNECT[1]} account`, () => client.connectingTwitterAccount());
//         test(`should linked the account of ${SOCIAL_CONNECT[1]}`, () => client.linkedAccount('prestotests+twitter@gmail.com'));
//         test('should check the connection', () => client.checkConnections('prestotests prestotests'));
//     }, "update_configuration_app_twitter");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[1].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test(`should check ${SOCIAL_CONNECT[1]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[1]));
//     }, "update_configuration_app_twitter");
// }, "update_configuration_app_twitter");

// @TODO:fix connecting with amazon in FO
// scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[2].toUpperCase()} - BackOffice`, client => {
//     test('open browser', () => client.open());
//     test('sign in', () => client.fillSignInForm());
//     test('acces to module page', () => client.goToModule());
//     test('search the module', () => client.searchModule(module_tech_name));
//     test('click on configure button', () => client.clickOnConfigureButton());
//     test(`click on ${SOCIAL_CONNECT[2]} menu tab`, () => client.ClickOnConfigurationAccountMenu(6));
//     test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[2]));
// }, "update_configuration_app_amazon");

// scenario(`SocialConnect/${SOCIAL_CONNECT[3].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[3].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('acces to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[3]} menu tab`, () => client.ClickOnConfigurationAccountMenu(7));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[3]));
//         test(`click on ${SOCIAL_CONNECT[3]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[3]));
//         test(`log in with ${SOCIAL_CONNECT[3]} account`, () => client.fillGoogleSignInForm());
//         test('access to the application', () => client.accessToApplication());
//         test('go to identifiants menu', () => client.clickOnIdentifiantsMenu());
//         test('click on create identifiants button', () => client.clickOnCreateIdentifiantButton());
//         test('click on oauth', () => client.clickOnOauthButton());
//         test('should select a web application', () => client.selectTypeApplication());
//         test('edit authorized javaScript origins', () => client.setJavaScriptOrigins());
//         test('edit authorized redirect uri', () => client.setAuthorizedRedirectUri());
//         test('click on create button', () => client.clickOnCreateButton());
//         test('click on ok button', () => client.clickOnOkButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_google");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[3].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[3]} button`, () => client.clickOnGoogleButton(SOCIAL_CONNECT[3]));
//         test(`should connecting with ${SOCIAL_CONNECT[3]} account`, () => client.connectingGoogleAccount());
//         test('should check the connection', () => client.checkConnections('Presto Tests'));
//     }, "update_configuration_app_google");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[3].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[3]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[3]));
//     }, "update_configuration_app_google");
//
// }, "update_configuration_app_google");

// scenario(`SocialConnect/${SOCIAL_CONNECT[4].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[4].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('acces to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[4]} menu tab`, () => client.ClickOnConfigurationAccountMenu(18));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[4]));
//         test(`click on ${SOCIAL_CONNECT[4]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[4]));
//         test(`log in with ${SOCIAL_CONNECT[4]} account`, () => client.fillPinterestSignInForm());
//         test('access to the application', () => client.accessToApplication());
//         test('click on show button', () => client.clickOnShowButton());
//         test('edit site url', () => client.setSiteUrl());
//         test('edit redirect url', () => client.setRedirectUrl());
//         test('click on save button', () => client.clickOnSaveButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_pinterest");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[4].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[4]} button`, () => client.clickOnPinterestButton(SOCIAL_CONNECT[4]));
//         test(`should connecting with ${SOCIAL_CONNECT[4]} account`, () => client.connectingPinterestAccount());
//         test(`should linked the account of ${SOCIAL_CONNECT[4]}`, () => client.linkedAccount('prestotests+pinterest@gmail.com'));
//         test('should check the connection', () => client.checkConnections('presto tests'));
//     }, "update_configuration_app_pinterest");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[4].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+pinterest@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[4]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[4]));
//     }, "update_configuration_app_pinterest");
// }, "update_configuration_app_pinterest");

// scenario(`SocialConnect/${SOCIAL_CONNECT[5].toUpperCase()}`, client => {
//     scenario(`SocialConect/Connect with - ${SOCIAL_CONNECT[5].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//     }, "update_configuration_app_yahoo");
//     scenario(`SocialConect/Check customer - ${SOCIAL_CONNECT[5].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests@yahoo.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[5]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[5]));
//     }, "update_configuration_app_yahoo");
// }, "update_configuration_app_yahoo");

// @TODO:fix connecting with paypal in FO
// scenario(`SocialConnect/${SOCIAL_CONNECT[6].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[6].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('acces to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[6]} menu tab`, () => client.ClickOnConfigurationAccountMenu(9));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[6]));
//         test(`click on ${SOCIAL_CONNECT[6]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[6]));
//         test('click on log into dashboard button', () => client.clickOnLogIntoDashboardButton());
//         test(`log in with ${SOCIAL_CONNECT[6]} account`, () => client.fillPaypalSignInForm());
//         test('access to the application', () => client.accessToApplication());
//         test('click on show secret button', () => client.clickOnShowSecretButton());
//         test('click on show return url button', () => client.clickOnReturnUrlButton());
//         test('edit return url', () => client.setReturnUrl());
//         test('click on show return url button', () => client.clickOnAdvancedOptionsButton());
//         test('edit privacy policy url', () => client.setPrivacyPolicyUrl());
//         test('edit user agreement url', () => client.setUserAgreementUrl());
//         test('click on save button', () => client.clickOnSaveButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_paypal");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[6].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[6]} button`, () => client.clickOnPaypalButton(SOCIAL_CONNECT[6]));
//         test(`should connecting with ${SOCIAL_CONNECT[6]} account`, () => client.connectingPaypalAccount());
//         test('should check the connection', () => client.checkConnections('Presto Tests'));
//     }, "update_configuration_app_paypal");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[6].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+paypal@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[6]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[6]));
//     }, "update_configuration_app_paypal");
// }, "update_configuration_app_paypal");

// scenario(`SocialConnect/${SOCIAL_CONNECT[7].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[7].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[7]} menu tab`, () => client.ClickOnConfigurationAccountMenu(10));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[7]));
//         test(`click on ${SOCIAL_CONNECT[7]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[7]));
//         test('click on sign in button', () => client.clickOnIdentifyButton());
//         test(`log in with ${SOCIAL_CONNECT[7]} account`, () => client.fillLinkedinSignInForm());
//         test('access to the application', () => client.accessToApplication());
//         test('click on preferences menu', () => client.clickOnPreferencesMenu());
//         test('edit website url', () => client.setWebsiteUrl());
//         test('click on update button', () => client.clickOnUpdateButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_linkedin");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[7].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[7]} button`, () => client.clickOnLinkedinButton(SOCIAL_CONNECT[7]));
//         test(`should connecting with ${SOCIAL_CONNECT[7]} account`, () => client.connectingLinkedinAccount());
//         test('should check the connection', () => client.checkConnections('Presto Tests'));
//     }, "update_configuration_app_linkedin");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[7].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotestslinkedin@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[7]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[7]));
//     }, "update_configuration_app_linkedin");
// }, "update_configuration_app_linkedin");

// scenario(`SocialConnect/${SOCIAL_CONNECT[8].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[8].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[8]} menu tab`, () => client.ClickOnConfigurationAccountMenu(11));
//         test('configuration page is shown', () => client.waitForConfigurePage("hotmail"));
//         test(`click on ${SOCIAL_CONNECT[8]} developers link`, () => client.clickOnDevelopersLink("hotmail"));
//         test(`log in with ${SOCIAL_CONNECT[8]} account`, () => client.fillMicrosoftSignInForm());
//         test('click on cancel button', () => client.clickOnCancelButton());
//         test('access to the application', () => client.accessToApplication());
//         test('edit the redirect url', () => client.setRedirectUrl());
//         test('click on save button', () => client.clickOnSaveButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_microsoft");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[8].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[8]} button`, () => client.clickOnMicrosoftButton(SOCIAL_CONNECT[8]));
//         test(`should connecting with ${SOCIAL_CONNECT[8]} account`, () => client.connectingMicrosoftAccount());
//         test('should check the connection', () => client.checkConnections('Tests Presto'));
//     }, "update_configuration_app_microsoft");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[8].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests@outlook.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[8]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[8]));
//     }, "update_configuration_app_microsoft");
// }, "update_configuration_app_microsoft");

// scenario(`SocialConnect/${SOCIAL_CONNECT[9].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[9].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[9]} menu tab`, () => client.ClickOnConfigurationAccountMenu(12));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[9]));
//         test(`click on ${SOCIAL_CONNECT[9]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[9]));
//         test(`log in with ${SOCIAL_CONNECT[9]} account`, () => client.fillFoursquareSignInForm());
//         test('access to the application', () => client.accessToApplication());
//         test('click on update button', () => client.clickOnUpdateButton());
//         test('edit the welcome page url', () => client.setWelcomePageUrl());
//         test('edit the privacy policy url', () => client.setPrivacyPolicyUrl());
//         test('edit the redirect url', () => client.setRedirectUrl());
//         test('click on save button', () => client.clickOnSaveButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_foursquare");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[9].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[9]} button`, () => client.clickOnFoursquareButton(SOCIAL_CONNECT[9]));
//         test(`should connecting with ${SOCIAL_CONNECT[9]} account`, () => client.connectingFoursquareAccount());
//         test('should check the connection', () => client.checkConnections('Tests Presto'));
//     }, "update_configuration_app_foursquare");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[9].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+foursquare@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[9]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[9]));
//     }, "update_configuration_app_foursquare");
// }, "update_configuration_app_foursquare");

// scenario(`SocialConnect/${SOCIAL_CONNECT[10].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[10].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[10]} menu tab`, () => client.ClickOnConfigurationAccountMenu(13));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[10]));
//         test(`click on ${SOCIAL_CONNECT[10]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[10]));
//         test(`log in with ${SOCIAL_CONNECT[10]} account`, () => client.fillGithubSignInForm());
//         test('click on cancel button', () => client.clickOnCancelButton());
//         test('access to the application', () => client.accessToApplication());
//         test('edit the home page url', () => client.setHomePageUrl());
//         test('edit the callback url', () => client.setCallbackUrl());
//         test('click on update button', () => client.clickOnUpdateButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_github");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[10].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[10]} button`, () => client.clickOnGithubButton(SOCIAL_CONNECT[10]));
//         test(`should connecting with ${SOCIAL_CONNECT[10]} account`, () => client.connectingGithubAccount());
//         test('should check the connection', () => client.checkConnections('prestotests prestotests'));
//     }, "update_configuration_app_github");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[10].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+github@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[10]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[10]));
//     }, "update_configuration_app_github");
// }, "update_configuration_app_github");

// scenario(`SocialConnect/${SOCIAL_CONNECT[11].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[11].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[11]} menu tab`, () => client.ClickOnConfigurationAccountMenu(14));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[11]));
//         test(`click on ${SOCIAL_CONNECT[11]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[11]));
//         test(`log in with ${SOCIAL_CONNECT[11]} account`, () => client.fillDisqusSignInForm());
//         test('access to the application', () => client.accessToApplication());
//         test('access to the settings subtab', () => client.clickOnSettingsSubTab());
//         test('edit the website url', () => client.setWebsiteUrl());
//         test('edit the callback url', () => client.setCallbackUrl());
//         test('edit the terms of service url', () => client.setTermsOfServiceUrl());
//         test('click on save changes button', () => client.clickOnSaveChangesButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_disqus");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[11].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[11]} button`, () => client.clickOnDisqusButton(SOCIAL_CONNECT[11]));
//         test(`should connecting with ${SOCIAL_CONNECT[11]} account`, () => client.connectingDisqusAccount());
//         test('should check the connection', () => client.checkConnections('prestotests prestotests'));
//     }, "update_configuration_app_disqus");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[11].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+disqus@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[11]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[11]));
//     }, "update_configuration_app_disqus");
// }, "update_configuration_app_disqus");

// @TODO:fix connection dropbox in FO ("error": "v1_retired")
// scenario(`SocialConnect/${SOCIAL_CONNECT[12].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[12].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[12]} menu tab`, () => client.ClickOnConfigurationAccountMenu(15));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[12]));
//         test(`click on ${SOCIAL_CONNECT[12]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[12]));
//         test(`log in with ${SOCIAL_CONNECT[12]} account`, () => client.fillDropboxSignInForm());
//         test('access to the application', () => client.accessToApplication());
//         test('delete old redirect url', () => client.clickOnDeleteOldRedirectIcon());
//         test('add new redirect url', () => client.setRedirectUrl());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_dropbox");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[12].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[12]} button`, () => client.clickOnDropboxButton(SOCIAL_CONNECT[12]));
//         test(`should connecting with ${SOCIAL_CONNECT[12]} account`, () => client.connectingDropboxAccount());
//         test('should check the connection', () => client.checkConnections('Tests Presto'));
//     }, "update_configuration_app_dropbox");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[12].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+dropbox@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[12]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[12]));
//     }, "update_configuration_app_dropbox");
// }, "update_configuration_app_dropbox");

// scenario(`SocialConnect/${SOCIAL_CONNECT[13].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[13].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[13]} menu tab`, () => client.ClickOnConfigurationAccountMenu(16));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[13]));
//         test(`click on ${SOCIAL_CONNECT[13]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[13]));
//         test(`log in with ${SOCIAL_CONNECT[13]} account`, () => client.fillWordpressSignInForm());
//         test('access to the application', () => client.accessToApplication());
//         test('access to the manage settings', () => client.clickOnManageSettingsSubTab());
//         test('edit website url', () => client.setWebsiteUrl());
//         test('edit redirect url', () => client.setRedirectUrl());
//         test('edit javascript origins url', () => client.setJavascriptOriginsUrl());
//         test('click on update button', () => client.clickOnUpdateButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_wordpress");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[13].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[13]} button`, () => client.clickOnWordpressButton(SOCIAL_CONNECT[13]));
//         test(`should connecting with ${SOCIAL_CONNECT[13]} account`, () => client.connectingWordpressAccount());
//         test('should check the connection', () => client.checkConnections('prestotests prestotests'));
//     }, "update_configuration_app_wordpress");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[13].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+Wordpress@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[13]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[13]));
//     }, "update_configuration_app_wordpress");
// }, "update_configuration_app_wordpress");

// scenario(`SocialConnect/${SOCIAL_CONNECT[14].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[14].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[14]} menu tab`, () => client.ClickOnConfigurationAccountMenu(17));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[14]));
//         test(`click on ${SOCIAL_CONNECT[14]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[14]));
//         test(`log in with ${SOCIAL_CONNECT[14]} account`, () => client.fillTumblrSignInForm());
//         test('access to the application', () => client.accessToApplication());
//         test('click on show secret button', () => client.clickOnShowSecretButton());
//         test('edit website url', () => client.setWebsiteUrl());
//         test('edit callback url', () => client.setCallbackUrl());
//         test('click on save button', () => client.clickOnSaveButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_tumblr");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[14].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[14]} button`, () => client.clickOnTumblrButton(SOCIAL_CONNECT[14]));
//         test(`should connecting with ${SOCIAL_CONNECT[14]} account`, () => client.connectingTumblrAccount());
//         test(`should linked the account of ${SOCIAL_CONNECT[14]}`, () => client.linkedAccount('prestotests+tumblr@gmail.com'));
//         test('should check the connection', () => client.checkConnections('prestotests prestotests'));
//     }, "update_configuration_app_tumblr");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[14].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests+tumblr@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[14]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[14]));
//     }, "update_configuration_app_tumblr");
// }, "update_configuration_app_tumblr");

// scenario(`SocialConnect/${SOCIAL_CONNECT[15].toUpperCase()}`, client => {
//     scenario(`SocialConnect/Configuration - ${SOCIAL_CONNECT[15].toUpperCase()} - BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to module page', () => client.goToModule());
//         test('search the module', () => client.searchModule(module_tech_name));
//         test('click on configure button', () => client.clickOnConfigureButton());
//         test(`click on ${SOCIAL_CONNECT[15]} menu tab`, () => client.ClickOnConfigurationAccountMenu(19));
//         test('configuration page is shown', () => client.waitForConfigurePage(SOCIAL_CONNECT[15]));
//         test(`click on ${SOCIAL_CONNECT[15]} developers link`, () => client.clickOnDevelopersLink(SOCIAL_CONNECT[15]));
//         test(`log in with ${SOCIAL_CONNECT[15]} account`, () => client.fillVkontakteSignInForm());
//         test('access to the list of application', () => client.listOfApplication());
//         test('access to the application', () => client.accessToApplication());
//         test('click on settings subtab', () => client.clickOnSettingsSubtab());
//         test('edit site url', () => client.setSiteUrl());
//         test('edit callback url', () => client.setBaseDomain());
//         test('click on save button', () => client.clickOnSaveButton());
//         test('update configuration settings', () => client.fillConfigurationForm());
//     }, "update_configuration_app_vkontakte");
//
//     scenario(`SocialConnect/Connect with - ${SOCIAL_CONNECT[15].toUpperCase()} - account in FrontOffice`, client => {
//         test('open browser', () => client.open());
//         test('access to front office', () => client.accessToFrontOffice());
//         test(`click on ${SOCIAL_CONNECT[15]} button`, () => client.clickOnVkontakteButton(SOCIAL_CONNECT[15]));
//         test(`should connecting with ${SOCIAL_CONNECT[15]} account`, () => client.connectingVkontakteAccount());
//         test('should check the connection', () => client.checkConnections('Tests Presto'));
//     }, "update_configuration_app_vkontakte");
//
//     scenario(`SocialConnect/Check customer - ${SOCIAL_CONNECT[15].toUpperCase()} - in BackOffice`, client => {
//         test('open browser', () => client.open());
//         test('sign in', () => client.fillSignInForm());
//         test('access to customers page', () => client.goToCustomers());
//         test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotestsvkontakte@gmail.com"));
//         test('click on search button', () => client.clickOnSearchButton());
//         test(`should check ${SOCIAL_CONNECT[15]} customer`, () => client.checkCutomer(SOCIAL_CONNECT[15]));
//     }, "update_configuration_app_vkontakte");
// }, "update_configuration_app_vkontakte");
