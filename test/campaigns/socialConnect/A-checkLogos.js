scenario('SocialConnect/CheckLogos - Front Office', client => {
    test('open browser', () => client.open());
    test('access to Front Office', () => client.accessToFrontOffice());
    for(let i = 0; i < (social_connect.length); i++){
        test(`check logo ${social_connect[i]} at the top of the page`, () => client.findFirstLogos(social_connect[i]));
        test(`check logo ${social_connect[i]} near the connection button`, () => client.findSecondLogos(social_connect[i]));
        test(`check logo ${social_connect[i]} at the bottom of the page`, () => client.findThirdLogos(social_connect[i]));
    }
}, "social-connect/checkLogos-client");