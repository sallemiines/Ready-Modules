scenario('Dashboard/MyStore - Back Office', client => {
    test('sign in', () => client.fillSignInForm());
    test('click on back office button', () => client.clickOnBackOfficeButton());
});
