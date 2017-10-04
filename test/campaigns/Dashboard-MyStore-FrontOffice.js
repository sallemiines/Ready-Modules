scenario('Dashboard/MyStore - Front Office', client => {
    test('sign in', () => client.fillSignInForm());
    test('click on back office button', () => client.clickOnFrontOfficeButton());
});
