scenario('Check all social network button in Front Office', client => {
    test('should open browser', () => client.open());
    test('should access to Front Office', () => client.accessToFrontOffice());
    for (let i = 0; i < (global.social_connect.length); i++) {
        test(`should check ${global.social_connect[i]} button at the top of the page`, () => client.findFirstLogos(global.social_connect[i]));
        test(`should check ${global.social_connect[i]} button near the connection button`, () => client.findSecondLogos(global.social_connect[i]));
        test(`should check ${global.social_connect[i]} button at the bottom of the page`, () => client.findThirdLogos(global.social_connect[i]));
    }
}, "social-connect/checkLogos-client", true);