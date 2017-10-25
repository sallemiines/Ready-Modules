const {getClient} = require('../../common.webdriverio');
const {selector} = require('../../globals.webdriverio.js');

class SocialConnect {
    constructor() {
        this.client = getClient();
    }

    fillSignInForm() {
        return this.client.signinBO();
    }

    accessToFrontOffice() {
        return this.client
            .url(`https://${URL}/`)
            .waitForExist(selector.FO.AccessPage.logo_home_page, 90000)
            .pause(3000)
    }

    close() {
        return this.client.end();
    };

    open() {
        return this.client.init().windowHandleSize({width: 1280, height: 1024});
    }

    goToModule() {
        return this.client
            .click(selector.BO.ModulesPage.modules_subtab)
            .waitForExist(selector.BO.ModulesPage.page_loaded, 60000)
            .pause(5000);
    }

    clickOnConfigureButton() {
        return this.client
            .waitForExist(selector.BO.ModulesPage.configuration_button, 90000)
            .click(selector.BO.ModulesPage.configuration_button)
            .pause(5000);
    }

    searchModule(name) {
        return this.client
            .waitForExist(selector.BO.ModulesPage.search_input, 60000)
            .setValue(selector.BO.ModulesPage.search_input, name)
            .click(selector.BO.ModulesPage.search_button)
            .pause(5000);
    }

    ClickOnConfigurationAccountMenu(id_tab) {
        return this.client
            .waitForExist(selector.BO.ModulePageSocialConnect.Common.menu_tabs.replace("%ID", id_tab), 60000)
            .click(selector.BO.ModulePageSocialConnect.Common.menu_tabs.replace("%ID", id_tab))
            .pause(5000);
    }

    waitForConfigurePage(name) {
        return this.client.waitForText(selector.BO.ModulePageSocialConnect.Common.title_page_name.replace("%NAME", name), 15000)
            .then(() => this.client.getText(selector.BO.ModulePageSocialConnect.Common.title_page_name.replace("%NAME", name)))
            .then((title) => {
                expect(title).to.have.string(name.toUpperCase())
            })
            .pause(5000);
    }

    goToProductDetails() {
        return this.client
            .waitForExist(selector.FO.AccessPage.logo_home_page, 90000)
            .click(selector.FO.AccessPage.logo_home_page)
            .waitForExist(selector.FO.AccessPage.first_product_home_page, 90000)
            .then(() => this.client.getText(selector.FO.AccessPage.first_product_home_page_name))
            .then((text) => {
                global.my_name = text[1].split('...')[0]
            })

            .waitForExist(selector.FO.AccessPage.first_product_home_page, 90000)
            .click(selector.FO.AccessPage.first_product_home_page)

            .waitForExist(selector.FO.ProductPage.product_image, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.product_name_details))
            .then((text) => {
                var my_name_check = text;
                my_name_check.pop(-1).toLowerCase().should.containEql(my_name.toLowerCase())
            })

            .waitForExist(selector.FO.ProductPage.product_price_details, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.product_price_details))
            .then((text) => {
                global.my_price = text
            })

            .waitForExist(selector.FO.ProductPage.product_quantity_details, 90000)
            .then(() => this.client.getValue(selector.FO.ProductPage.product_quantity_details))
            .then((text) => {
                global.my_quantity = text
            })

            .waitForExist(selector.FO.ProductPage.add_to_cart_button, 90000)
            .click(selector.FO.ProductPage.add_to_cart_button)

            .waitForExist(selector.FO.ProductPage.layer_cart, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.layer_cart_name_details))
            .then((text) => {
                var my_cart_name_check = text;
                expect(my_cart_name_check.toLowerCase()).to.have.string(my_name.toLowerCase());
            })

            .waitForExist(selector.FO.ProductPage.layer_cart_price_details, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.layer_cart_price_details))
            .then((text) => {
                var my_cart_price_check = text;
                expect(my_cart_price_check).to.eql(my_price)
            })

            .waitForExist(selector.FO.ProductPage.layer_cart_quantity_details, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.layer_cart_quantity_details))
            .then((text) => {
                var my_cart_quantity_check = text.split(': ');
                expect(my_cart_quantity_check[1]).to.eql(my_quantity);
            })
            .pause(5000);
    }

    clickOnAddToCartButton() {
        return this.client
            .waitForExist(selector.FO.ProductPage.layer_cart_command_button, 90000)
            .click(selector.FO.ProductPage.layer_cart_command_button)
            .pause(5000);
    }

    validateNameProduct() {
        return this.client
            .waitForExist(selector.FO.ProductPage.command_checkout_button, 90000)
            .moveToObject(selector.FO.ProductPage.command_product_name)
            .then(() => this.client.getText(selector.FO.ProductPage.command_product_name))
            .then((text) => {
                var command_my_name = text;
                expect(command_my_name.toLowerCase()).to.have.string(my_name.toLowerCase());
            })
            .pause(5000);
    }

    validatePriceProduct() {
        return this.client
            .waitForExist(selector.FO.ProductPage.command_product_price, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.command_product_price))
            .then((text) => {
                var command_price_check = text;
                expect(command_price_check).to.have.string(my_price);
            })
            .pause(5000);
    }

    clickOnCheckoutButton() {
        return this.client
            .waitForExist(selector.FO.ProductPage.command_checkout_button, 90000)
            .click(selector.FO.ProductPage.command_checkout_button)
            .pause(5000);
    }

    clickOnConnectButton() {
        return this.client
            .waitForExist(selector.FO.Commande.connect_tab, 90000)
            .click(selector.FO.Commande.connect_tab)
            .pause(5000);
    }

    clickOnConnectAccountButton(id) {
        return this.client
            .waitForExist(selector.FO.Commande.first_logo.replace("%ID", id), 90000)
            .click(selector.FO.Commande.first_logo.replace("%ID", id))

            .then(() => this.client.windowHandles())
            .then(handles => this.client.switchTab(handles.value[1]))
            .pause(5000);
    }

    fillAddressForm() {
        return this.client
            .waitForExist(selector.FO.Commande.address_input, 90000)
            .setValue(selector.FO.Commande.address_input, 'rue boulvard')

            .waitForExist(selector.FO.Commande.post_code_input, 90000)
            .setValue(selector.FO.Commande.post_code_input, '75005')

            .waitForExist(selector.FO.Commande.city_input, 90000)
            .setValue(selector.FO.Commande.city_input, 'Paris')

            .moveToObject(selector.FO.CartSummary.step3_section, 90000)
            .waitForExist(selector.FO.Commande.checkout_step2_continue_button, 90000)
            .click(selector.FO.Commande.checkout_step2_continue_button)
            .pause(5000);
    }

    selectDelevryStep3() {
        return this.client
            .waitForExist(selector.FO.Commande.checkout_step3_continue_button, 90000)
            .click(selector.FO.Commande.checkout_step3_continue_button)
            .pause(5000);
    }

    selectShippingMethodStep4() {
        return this.client
            .waitForExist(selector.FO.Commande.payment_option_radio, 90000)
            .click(selector.FO.Commande.payment_option_radio)

            .waitForExist(selector.FO.ProductPage.checkout_step4_cgv, 90000)
            .click(selector.FO.ProductPage.checkout_step4_cgv)

            .moveToObject(selector.FO.Commande.footer, 90000)
            .waitForExist(selector.FO.ProductPage.checkout_step4_order, 90000)
            .click(selector.FO.ProductPage.checkout_step4_order)
            .pause(5000);
    }

    confirmationOrder() {
        return this.client
            .waitForExist(selector.FO.ProductPage.order_confirmation_name, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.order_confirmation_name))
            .then((text) => {
                expect(text.toLowerCase()).to.have.string(my_name.toLowerCase());
            })

            .waitForExist(selector.FO.ProductPage.order_confirmation_price1, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.order_confirmation_price1))
            .then((text) => {
                expect(text).to.eql(my_price);
            })

            .moveToObject(selector.FO.ProductPage.customer_support_link, 90000)
            .waitForExist(selector.FO.ProductPage.order_confirmation_price2, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.order_confirmation_price2))
            .then((text) => {
                expect(text).to.eql(my_price);
            })

            .waitForExist(selector.FO.ProductPage.order_confirmation_ref, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.order_confirmation_ref))
            .then((text) => {
                var my_ref = text.split(': ');
                global.order_reference = my_ref[1];
            })
            .pause(5000);
    }

    getOrderId() {
        return this.client
            .url()
            .then((res) => {
                var current_url = res.value;
                var temp1 = current_url.split("id_order=");
                var temp2 = temp1[1].split("&");
                global.order_id = temp2[0];
            })
            .pause(5000);
    }

    goToCustomers() {
        return this.client
            .waitForExist(selector.BO.CustomersPage.customer_subtab, 90000)
            .click(selector.BO.CustomersPage.customer_subtab)
            .pause(5000);
    }

    filterListCustomerByAddressEmail(email) {
        return this.client
            .waitForExist(selector.BO.CustomersPage.customer_address_email_input, 90000)
            .setValue(selector.BO.CustomersPage.customer_address_email_input, email)
            .pause(5000);
    }

    clickOnSearchButton() {
        return this.client
            .pause(3000)
            .waitForExist(selector.BO.CustomersPage.customer_search_button, 90000)
            .click(selector.BO.CustomersPage.customer_search_button)
    }

    checkCutomer(name) {
        let logo_customer_page_selector = selector.BO.ModulePageSocialConnect.Common.logo_customer_page;
        if (name === "twitter") {
            logo_customer_page_selector = logo_customer_page_selector.replace('6', '5');
        }
        return this.client
            .waitForExist(logo_customer_page_selector, 90000)
            .moveToObject(logo_customer_page_selector)

            .then(() => this.client.getAttribute(logo_customer_page_selector, 'title'))
            .then((title) => {
                expect(title.toLowerCase()).to.have.string(name.toLowerCase())
            })

            .then(() => this.client.getAttribute(logo_customer_page_selector, 'alt'))
            .then((alt) => {
                expect(alt.toLowerCase()).to.have.string(name.toLowerCase())
            })
    }

    checkConnections(user_name) {
        return this.client
            .waitForVisible(selector.FO.SocialConnect.Common.user_connected_span, 90000)
            .moveToObject(selector.FO.SocialConnect.Common.user_connected_span)
            .then(() => this.client.getText(selector.FO.SocialConnect.Common.user_connected_span))
            .then((user) => {
                expect(user).to.eql(user_name)
            })
            .pause(5000);
    }

    takeScreenshot() {
        return this.client.saveScreenshot(`test/screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}.png`);
    }
}

module.exports = SocialConnect;

