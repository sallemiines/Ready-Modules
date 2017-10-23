// @TODO: fix connection yahoo in FO
scenario(`SocialConnect/${social_connect[5].toUpperCase()}`, client => {
    scenario(`SocialConect/Connect with - ${social_connect[5].toUpperCase()} - account in FrontOffice`, client => {
        test('open browser', () => client.open());
        test('access to front office', () => client.accessToFrontOffice());
    }, "social-connect/yahoo-client");
    // scenario(`SocialConect/Check customer - ${social_connect[5].toUpperCase()} - in BackOffice`, client => {
    //     test('open browser', () => client.open());
    //     test('sign in', () => client.fillSignInForm());
    //     test('access to customers page', () => client.goToCustomers());
    //     test('filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests@yahoo.com"));
    //     test('click on search button', () => client.clickOnSearchButton());
    //     test(`should check ${social_connect[5]} customer`, () => client.checkCutomer(social_connect[5]));
    // }, "social-connect/yahoo-client");
}, "social-connect/yahoo-client");