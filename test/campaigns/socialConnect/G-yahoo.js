// @TODO: fix connection yahoo in FO
scenario('Test yahoo', client => {
    scenario('Connect with yahoo account in Front Office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
    }, "social-connect/yahoo-client", true);
    // scenario('Check yahoo customer in Back Office', client => {
    //     test('should open the browser', () => client.open());
    //     test('should sign in', () => client.fillSignInForm());
    //     test('should access to customers page', () => client.goToCustomers());
    //     test('should filter the list of customers by email', () => client.filterListCustomerByAddressEmail("prestotests@yahoo.com"));
    //     test('should click on search button', () => client.clickOnSearchButton());
    //     test('should check yahoo customer', () => client.checkCutomer('yahoo'));
    // }, "social-connect/yahoo-client", true);
}, "social-connect/yahoo-client", true);