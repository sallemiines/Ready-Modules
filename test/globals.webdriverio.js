const path = require('path');
const should = require('should');
const argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.module_tech_name = argv.MODULE;
global.URL = argv.URL;
global.saucelabs = argv.SAUCELABS;
global.selenium_url = argv.SELENIUM;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';

global.module_tech_name = 'fbloginblock';

module.exports = {
    selector: {
        //Installation
        language: '//*[@id="langList"]',
        next_step: '//*[@id="btNext"]',
        agree_checkbox: '//*[@id="set_license"]',
        test_result_compatibility: '//*[@id="sheet_"]/h3',
        shop_name: '//*[@id="infosShop"]',
        country_fo: '//*[@id="infosCountry_chosen"]',
        country_france: '//*[@id="infosCountry_chosen"]/div/ul/li[2]',
        first_name: '//*[@id="infosFirstname"]',
        last_name: '//*[@id="infosName"]',
        email_address: '//*[@id="infosEmail"]',
        shop_password: '//*[@id="infosPassword"]',
        retype_password: '//*[@id="infosPasswordRepeat"]',
        database_address: '//*[@id="dbServer"]',
        database_name: '//*[@id="dbName"]',
        database_login: '//*[@id="dbLogin"]',
        database_password: '//*[@id="dbPassword"]',
        database_server_address: '//*[@id="dbServer"]',
        test_conection: '#btTestDB',
        dbResultCheck: '//*[@id="dbResultCheck"]',
        step_success: '[class:"class="process_step success"]',
        create_file_parameter_step: '//li[@id="process_step_generateSettingsFile" and @class="process_step success"]',
        create_database_step: '//li[@id="process_step_installDatabase" and @class="process_step success"]',
        create_default_shop_step: '//li[@id="process_step_installDefaultData" and @class="process_step success"]',
        create_database_table_step: '//li[@id="process_step_populateDatabase" and @class="process_step success"]',
        create_shop_informations_step: '//li[@id="process_step_configureShop" and @class="process_step success"]',
        create_demonstration_data_step: '//li[@id="process_step_installFixtures" and @class="process_step success"]',
        install_module_step: '//li[@id="process_step_installModules" and @class="process_step success"]',
        install_addons_modules_step: '//li[@id="process_step_installModulesAddons" and @class="process_step success"]',
        install_theme_step: '//li[@id="process_step_installTheme" and @class="process_step success"]',
        finish_step: '//*[@id="install_process_success"]/div[1]/h2',


        //BO
        login: '#email',
        password: '#passwd',
        login_btn: '[name="submitLogin"]',
        exit_welcome: '[class="btn btn-tertiary-outline btn-lg onboarding-button-shut-down"]',
        click_outside: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]',
        profil: '#employee_infos',
        new_profil: '.employee-dropdown.dropdown > div',
        logout: '#header_logout',
        products: '#subtab-AdminCatalog',
        //go_to_catalog: '//*[@id="form"]/div[4]/div[2]/div/div[2]/a[2]',
        go_to_catalog: '#form > div.product-footer > div.text-lg-right > div > div.dropdown-menu > a.dropdown-item.go-catalog.js-btn-save',
        more_option: '.btn.btn-primary.dropdown-toggle',
        new_product: '#page-header-desc-configuration-add',
        menu: '#nav-sidebar',
        product_name: '#form_step1_name_1',
        save_product: '//*[@id="form"]/div[4]/div[2]/div/button[1]',
        catalog_list: '#product_catalog_list',
        green_validation: '[class="growl growl-notice growl-medium"]',
        close_validation: '.growl-close',
        validation_msg: '//*[@id="growls"]/div/div[3]',
        red_validation: '[class="growl growl-error growl-medium"]',
        summary_button: '[href="#description_short"]',
        summary: 'form_step1_description_short_1_ifr', //not declare than an id because using into function "frame" that not need this information;
        description_button: '[href="#description"]',
        description: 'form_step1_description_1_ifr',//not declare than an id because using into function "frame" that not need this information;
        priceTE_shortcut: '#form_step1_price_shortcut',
        quantity_shortcut: '#form_step1_qty_0_shortcut',
        picture: '[class="dz-hidden-input"]',
        picture_cover: '.iscover',
        product_online: '.switch-input ',
        catalogue_filter_by_name: '//input[@name="filter_column_name"]',
        catalogue_submit_filter: '//button[@name="products_filter_submit"]',
        catalogue_filter_reset: '//button[@type="reset" and @style="display: inline-block;"]',
        orders: '#subtab-AdminParentOrders',
        orders_form: '#form-order',
        order_product_name: '.productName',
        order_quantity: '.product_quantity_show',
        order_total: '#total_order > td.amount.text-right.nowrap',
        //order_reference: '#content > div.row > div > div:nth-child(5) > div.col-lg-7 > div:nth-child(1) > div.panel-heading > span:nth-child(2)',
        order_reference: '((//div[@class="panel-heading"])[1]/span)[1]',
        modules_menu: '#subtab-AdminParentModulesSf',
        modules_search: 'div.pstaggerAddTagWrapper > input',
        modules_search_button: '.btn.btn-primary.pull-right.search-button',
        modules_page_loaded: '.module-search-result-wording',
        modules_installed: '(//div[@class="page-head-tabs"]/a)[2]',
        modules_validate_uninstall: '//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
        nbr_module: '[class="module-sorting-search-wording"]',
        close_sf_toolbar: '//a[@class="hide-button"]',
        module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',
        install_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@data-confirm_modal="module-modal-confirm-' + module_tech_name + '-install"]',
        uninstall_module_list: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="btn btn-primary-outline  dropdown-toggle"]',
        uninstall_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="dropdown-item module_action_menu_uninstall"]',
        modal_confirm_uninstall: '//*[@id="module-modal-confirm-' + module_tech_name + '-uninstall" and @class="modal modal-vcenter fade in"]//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',

        onboarding_popup: '.onboarding-popup',
        onboarding_popup_close_btn: '.onboarding-button-shut-down',
        onboarding_stop: '.onboarding-button-stop',

        //FO
        frontoffice_contact_link: '#contact-link a',

        access_loginFO: 'div.user-info > a',
        loginFO: '//*[@id="login-form"]/section/div[1]/div[1]/input',
        passwordFO: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
        login_btnFO: '//*[@id="login-form"]/footer/button',
        logoutFO: '.logout',
        //create_account: '#email_create',
        create_account_button: '[data-link-action="display-register-form"]',
        create_account_firstname: '[name="firstname"]',
        create_account_lastname: '[name="lastname"]',
        create_account_email: '[name="email"]',
        create_account_password: '[name="password"]',
        create_account_info_validate: '[data-link-action="save-customer"]',
        logo_home_pageFO: '.logo.img-responsive',
        first_product_home_page: '.thumbnail.product-thumbnail',
        add_to_cart: '.btn.btn-primary.add-to-cart',
        first_product_home_page_name: '[itemprop="name"]',
        product_image: '#content',
        product_name_details: '[itemprop="name"]',
        product_price_details: '[itemprop="price"]',
        product_quantity_details: '#quantity_wanted',
        layer_cart: '//div[@id="blockcart-modal" and @style="display: block;"]',
        layer_cart_name_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/h6',
        layer_cart_price_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[1]',
        layer_cart_quantity_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[2]',
        layer_cart_command_button: '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
        //for 1.7.1.0
        //layer_cart_command_button: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
        //command_product_quantity: '//div[@class="product-line-grid-body col-md-5 col-xs-5"]/div[5]',
        command_product_name: '(//div[@class="product-line-info"])[1]/a',
        command_product_price: '//span[@class="price"]',
        command_button_checkout: '//*[@id="main"]/div/div[2]/div[1]/div[2]/div/a',
        check_out_step1: '#checkout-personal-information-step',
        check_out_step2: '#checkout-addresses-step',
        checkout_step2_continue_button: '//*[@id="checkout-addresses-step"]/div/div/form/div[2]/button',
        check_out_step3: '#checkout-delivery-step',
        checkout_step3_continue_button: '//*[@id="js-delivery"]/button',
        check_out_step4: '#checkout-payment-step',
        checkout_step4_payment: '//*[@id="payment-option-2"]',
        checkout_step4_cgv: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
        checkout_step4_order: '#payment-confirmation >div > button',
        checkout_total: '//div[@class="cart-summary-line cart-total"]/span[2]',
        order_confirmation_name: '#order-items > div > div > div.col-sm-4.col-xs-9.details > span',
        order_confirmation_price1: '#order-items > div > table > tbody > tr:nth-child(1) > td:nth-child(2)',
        order_confirmation_price2: '#content-hook_payment_return > div > div > div > dl > dd:nth-child(2)',
        order_confirmation_ref: '(//div[@id="order-details"]/ul/li)[1]',
        search_product: '.ui-autocomplete-input',
        search_product_button: '.material-icons.search',
        search_product_result_image: '.thumbnail.product-thumbnail',
        search_product_result_name: '.h3.product-title > a',
        search_product_result_price: '[itemprop="price"]',
        close_error: '//*[@id="error-modal"]/div/div/button',


        //******strictly for presto project*******
        // selector variable naming convention: [page_name_object] example: "dashboard_loginmember_btn"
        //page: sigin|signup|reset_password|dashboard|
        //object: btn|field|checkbox|link|label|title|logo|avatar|

        //1.1 signin page
        signin_loginemail_field: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[2]/input',
        signin_password_field: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[4]/input',
        signin_forgetpassword_link: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[6]/a',
        signin_rememberme_checkbox: '//*[@id="remember"]',
        signin_connection_btn: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/button',
        signin_subscribe_link: '//*[@id="app"]/div[2]/div[2]/div[2]/div[2]/p/a',
        signin_subscribe_btn: '//*[@id="app"]/div[2]/div[2]/div[1]/div[2]/div/a',
        signin_puffins_logo: '//*[@id="app"]/div[2]/div[2]/div[1]/div[2]/div/img',
        signin_errormsg_wrongemailformat_txt: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[3]/span',
        signin_errormsg_loginincorrect_txt: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[1]',

        //1.2 signup page
        signup_disconnected_label: '//*[@id="app"]/div[1]/div/div/div/div/div[2]/p',
        //step1: email
        //signup_email_field: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[2]/input',
        //signup_password_field: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[4]/input',
        signup_email_field: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[1]/input',
        signup_password_field: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[3]/input',
        signup_nextemail_btn: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/button',
        //step2: name
        signup_name_field: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[2]/input',
        signup_surname_field: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[4]/input',
        signup_nextname_btn: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/button',
        //step1: shop
        signup_shopname_field: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[1]/input',
        signup_subdomain_field: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/div[4]/input',
        signup_nextshop_btn: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/button',
        //step1: country
        signup_country_list: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/select[1]',
        signup_countrynb7_list: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/select[1]/option[7]',
        signup_language_list: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/select[2]',
        signup_languagenb2_list: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/select[2]/option[4]',
        signup_cgv_checkbox: '//*[@id="gtc"]',
        signup_nextcountry_btn: '//*[@id="app"]/div[2]/div[2]/div[2]/form/div/button',

        //2.1 dashboard page
        dashboard_profil_avatar: '//*[@id="app"]/div[1]/div/div/div/div/div[3]/i',
        dashboard_signout_link: '//*[@id="app"]/div[1]/div/div[3]/div[3]/a',
        dashboard_profilname_link: '//*[@id="app"]/div[1]/div/div/div/div/div[2]/span',
        dashboard_disconnect_link: '//*[@id="app"]/div[1]/div/div[3]/div[3]/a',
        dashboard_backoffice_btn: '//*[@id="app"]/div[2]/div[2]/div[1]/div[1]/div[2]/div/div/a[1]',
        dashboard_frontoffice_btn: '//*[@id="app"]/div[2]/div[2]/div[1]/div[1]/div[2]/div/div/a[2]',
        dashboard_selectplan_btn: '/html/body/div[1]/div[2]/div[2]/div[3]/div[1]/div[2]/div[1]/div[2]/a',

        //3.1 BackOffice page
        backoffice_startonboarding_btn: 'html/body/div[1]/div/div/div[3]/button[2]',
        backoffice_lateronboarding_btn: 'html/body/div[1]/div/div/div[3]/button[1]',
        backoffice_closeonboarding_btn: 'html/body/div[1]/div/div/i',

        backoffice_title: 'h2.page-title',

        //4.1 Subscribe panel-heading
        subscription_monthlyearly_switch: '/html/body/div[1]/div[2]/div[2]/div[2]/div[1]/div/input',
        subscription_select_btn: '/html/body/div[1]/div[2]/div[2]/div[2]/div[2]/div[2]/div/button',
        //4.2 Subscribe step2
        subscription_couponcode_field: '#newCouponCode',
        subscription_apply_btn: '/html/body/div[1]/div[2]/div[2]/div[1]/div[4]/form/div[2]/button',
        subscription_mobilephone_field: '/html/body/div[1]/div[2]/div[2]/div[2]/form/div[4]/div[1]/input',
        subscription_next1_btn: '/html/body/div[1]/div[2]/div[2]/div[2]/form/div[6]/button',
        //4.3 Subscribe step3
        subscription_companyname_field: '#company_name',
        subscription_adress_field: '#address',
        subscription_zipcode_field: '#zip_code',
        subscription_city_field: '#city',
        subscription_country_list: '#country',
        subscription_next2_btn: '/html/body/div[1]/div[2]/div[2]/div[2]/form/div[7]/div/button',
        //4.4 Subscribe step4
        subscribe_creditcard_field: '#cardNumber input',
        subscribe_expdate_field: '#cardExpiry input',
        subscribe_secucode_field: '#cardCvc input',
        subscribe_iagree_checkbox: '#gtc',
        subscribe_subscribenow_btn: '/html/body/div[1]/div[2]/div[2]/div[2]/form/button',

        //Modal
        modal_whats_next_btn: `//button[text() = 'What’s next?']`,
        modal_next_btn: `//button[text() = 'Next']`,
        modal_go_to_my_account_btn: `//button[text() = 'Go to my account']`,

        upgrade_plan_btn: `//a[text() = 'Upgrade plan']`,

        BO:{
            AccessPage: {
                login_input: '#email',
                password_input: '#passwd',
                login_button: '[name="submitLogin"]'
            },
            ModulesPage: {
                modules_subtab: '#subtab-AdminParentModulesSf',
                search_input: 'div.pstaggerAddTagWrapper > input',
                search_button: '.btn.btn-primary.pull-right.search-button',
                page_loaded: '.module-search-result-wording',
                installed_modules_tabs: '(//div[@class="page-head-tabs"]/a)[2]',
                module_number_span: '[class="module-sorting-search-wording"]',
                number_of_module_found:'//*[@id="main-div"]/div[3]/div/div/div[2]/div/div[7]/span[1]',
                configuration_button:'//*[@id="modules-list-container-all"]/div/div/div/div[5]/div[2]/form/button',
                module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',
                install_module_button: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@data-confirm_modal="module-modal-confirm-' + module_tech_name + '-install"]',
                uninstall_module_list: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="btn btn-primary-outline  dropdown-toggle"]',
                uninstall_module_button: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="dropdown-item module_action_menu_uninstall"]',
                modal_confirm_uninstall: '//*[@id="module-modal-confirm-' + module_tech_name + '-uninstall" and @class="modal modal-vcenter fade in"]//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]',
                module_menu_button: '[class="btn btn-primary-outline  dropdown-toggle"]',
                enable_module_button: '[class="dropdown-item module_action_menu_enable"]'
            },
            //Customer page selectors
            CustomersPage: {
                number_of_customer: '//*[@id="form-customer"]/div/div[1]/span[1]',
                customer_subtab: '#subtab-AdminParentCustomer',
                customer_address_email_input: '//*[@id="form-customer"]/div/div[2]/table/thead/tr[2]/th[7]/input',
                customer_search_button: '#submitFilterButtoncustomer'
            },
            ModulePageSocialConnect:{
                Common:{
                    menu_tabs: '//*[@id="navtabs16"]/li[%ID]/a',
                    title_page_name: '//*[@id="%NAME"]/form/div/div[1]',
                    developers_link: '//*[@id="%NAME"]/div/div/fieldset/div[3]/a',
                    logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                },
                //@TODO
                Facebook: {
                    site_url_input: '//*[@id="facebook"]/div/div/fieldset/div[8]/input',
                    customer_key_input: '//*[@id="appid"]',
                    customer_secret_input: '//*[@id="secret"]',
                    save_button: '//*[@id="module_form_submit_btn_18"]'
                },
                Twitter: {
                    website_field_input: '//*[@id="twitter"]/div/div/fieldset/div[8]/input',
                    callback_field_input: '//*[@id="twitter"]/div/div/fieldset/div[9]/input',
                    customer_key_input: '//*[@id="twitterconskey"]',
                    customer_secret_input: '//*[@id="twitterconssecret"]',
                    save_button: '//*[@id="module_form_submit_btn_19"]'
                },
                //@TODO
                Amazon: {
                },
                Google: {
                    authorized_javaScript_origins_input: '//*[@id="google"]/div/div/fieldset/div[21]/input',
                    authorized_redirect_uri_input: '//*[@id="google"]/div/div/fieldset/div[22]/input',
                    customer_key_input: '//*[@id="oci"]',
                    customer_secret_input: '//*[@id="ocs"]',
                    save_button: '//*[@id="module_form_submit_btn_21"]'
                },
                Pinterest: {
                    site_url_input: '//*[@id="pinterest"]/div/div/fieldset/div[8]/input',
                    redirect_url_input: '//*[@id="pinterest"]/div/div/fieldset/div[9]/input',
                    customer_key_input: '//*[@id="pici"]',
                    customer_secret_input: '//*[@id="pics"]',
                    save_button: '//*[@id="module_form_submit_btn_32"]'
                },
                Yahoo: {
                },
                Paypal: {
                    return_url_input: '//*[@id="paypal"]/div/div/fieldset/div[8]/input',
                    privacy_policy_url_input: '//*[@id="paypal"]/div/div/fieldset/div[11]/input',
                    user_agreement_url_input: '//*[@id="paypal"]/div/div/fieldset/div[12]/input',
                    customer_key_input: '//*[@id="clientid"]',
                    customer_secret_input: '//*[@id="psecret"]',
                    save_button: '//*[@id="module_form_submit_btn_23"]'
                },
                Linkedin: {
                    website_url_input: '//*[@id="linkedin"]/div/div/fieldset/div[11]/input',
                    customer_key_input: '//*[@id="lapikey"]',
                    customer_secret_input: '//*[@id="lsecret"]',
                    save_button: '//*[@id="module_form_submit_btn_24"]'
                },
                Microsoft: {
                    redirect_url_input: '//*[@id="hotmail"]/div/div/fieldset/div[8]/input',
                    customer_key_input: '//*[@id="mclientid"]',
                    customer_secret_input: '//*[@id="mclientsecret"]',
                    save_button: '//*[@id="module_form_submit_btn_25"]'
                },
                Foursquare: {
                    redirect_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[9]/input',
                    welcome_page_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[7]/input',
                    privacy_policy_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[8]/input',
                    customer_key_input: '//*[@id="fsci"]',
                    customer_secret_input: '//*[@id="fscs"]',
                    save_button: '//*[@id="module_form_submit_btn_26"]'
                },
                Github: {
                    logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                    config_button: '//*[@id="navtabs16"]/li[13]/a',
                    developers_link: '//*[@id="github"]/div/div/fieldset/div[3]/a',
                    home_page_url_input: '//*[@id="github"]/div/div/fieldset/div[5]/input',
                    callback_url_input: '//*[@id="github"]/div/div/fieldset/div[7]/input',
                    customer_key_input: '//*[@id="gici"]',
                    customer_secret_input: '//*[@id="gics"]',
                    save_button: '//*[@id="module_form_submit_btn_27"]'
                },
                Disqus: {
                    website_url_input: '//*[@id="disqus"]/div/div/fieldset/div[8]/input',
                    callback_url_input: '//*[@id="disqus"]/div/div/fieldset/div[12]/input',
                    terms_of_service_url_input: '//*[@id="disqus"]/div/div/fieldset/div[16]/input',
                    customer_key_input: '//*[@id="dci"]',
                    customer_secret_input: '//*[@id="dcs"]',
                    save_button: '//*[@id="module_form_submit_btn_28"]'
                },
                Dropbox: {
                    redirect_uri_input: '//*[@id="dropbox"]/div/div/fieldset/div[10]/input',
                    customer_key_input: '//*[@id="dbci"]',
                    customer_secret_input: '//*[@id="dbcs"]',
                    save_button: '//*[@id="module_form_submit_btn_29"]'
                },
                Wordpress: {
                    website_url_input: '//*[@id="wordpress"]/div/div/fieldset/div[7]/input',
                    redirect_uri_input: '//*[@id="wordpress"]/div/div/fieldset/div[8]/input',
                    javascript_origins_input: '//*[@id="wordpress"]/div/div/fieldset/div[9]/input',
                    customer_key_input: '//*[@id="wci"]',
                    customer_secret_input: '//*[@id="wcs"]',
                    save_button: '//*[@id="module_form_submit_btn_30"]'
                },
                Tumblr: {
                    website_url_input: '//*[@id="tumblr"]/div/div/fieldset/div[6]/input',
                    callback_url_input: '//*[@id="tumblr"]/div/div/fieldset/div[8]/input',
                    customer_key_input: '//*[@id="tuci"]',
                    customer_secret_input: '//*[@id="tucs"]',
                    save_button: '//*[@id="module_form_submit_btn_31"]'
                },
                Vkontakte: {
                    site_address_input: '//*[@id="vkontakte"]/div/div/fieldset/div[6]/input',
                    customer_key_input: '//*[@id="vci"]',
                    customer_secret_input: '//*[@id="vcs"]',
                    save_button: '//*[@id="module_form_submit_btn_33"]'
                }
            }
        },
        //FO
        FO: {
            SocialConnect:{
                Common: {
                    first_logos: '#follow-teaser > div > a.%SOCIAL.custom-social-button-all.custom-social-button-1 > i',
                    second_logos: '#_desktop_user_info > div > span > a.%SOCIAL.custom-social-button-all.custom-social-button-4 > i',
                    third_logos: '#follow-teaser-footer > div > a.%SOCIAL.custom-social-button-all.custom-social-button-1 > i',
                    user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
                },
                Facebook: {
                    first_facebook_logo: '#follow-teaser > div > a.facebook.custom-social-button-all.custom-social-button-1 > i',
                    second_facebook_logo: '#_desktop_user_info > div > span > a.facebook.custom-social-button-all.custom-social-button-4 > i',
                    third_facebook_logo: '#follow-teaser-footer > div > a.facebook.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="email"]',
                    password_input: '//*[@id="pass"]',
                    login_button: '//*[@id="loginbutton"]'
                },
                Twitter: {
                    first_twitter_logo: '#follow-teaser > div > a.twitter.custom-social-button-all.custom-social-button-1 > i',
                    second_twitter_logo: '#_desktop_user_info > div > span > a.twitter.custom-social-button-all.custom-social-button-4 > i',
                    third_twitter_logo: '#follow-teaser-footer > div > a.twitter.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="username_or_email"]',
                    password_input: '//*[@id="password"]',
                    allow_button: '//*[@id="allow"]',
                    linked_modale: '#fb-con-wrapper',
                    email_input: '//*[@id="api-email"]',
                    send_button: '//*[@id="fb-con-wrapper"]/a[2]',
                    check_sent_email_p: '//*[@id="fb-con-wrapper"]/p'
                },
                Amazon: {
                    first_amazon_logo: '#follow-teaser > div > a.amazon.custom-social-button-all.custom-social-button-1 > i',
                    second_amazon_logo: '#_desktop_user_info > div > span > a.amazon.custom-social-button-all.custom-social-button-4 > i',
                    third_amazon_logo: '#follow-teaser-footer > div > a.amazon.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="ap_email"]',
                    password_input: '//*[@id="ap_password"]',
                    signin_button: '//*[@id="signInSubmit"]/span/button'
                },
                Google: {
                    first_google_logo: '#follow-teaser > div > a.google.custom-social-button-all.custom-social-button-1 > i',
                    second_google_logo: '#_desktop_user_info > div > span > a.google.custom-social-button-all.custom-social-button-4 > i',
                    third_google_logo: '#follow-teaser-footer > div > a.google.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="identifierId"]',
                    identifier_next_button: '//*[@id="identifierNext"]',
                    password_input: '//input[@type="password" and @name="password"]',
                    password_next_button: '//*[@id="passwordNext"]',
                    user_link: '//*[@id="view_container"]/form/div[2]/div/div/div/ul/li[1]/div/div[1]/img'
                },
                Pinterest: {
                    first_pinterest_logo: '#follow-teaser > div > a.pinterest.custom-social-button-all.custom-social-button-1 > i',
                    second_pinterest_logo: '#_desktop_user_info > div > span > a.pinterest.custom-social-button-all.custom-social-button-4 > i',
                    third_pinterest_logo: '#follow-teaser-footer > div > a.pinterest.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//input[@type="email" and @name="id"]',
                    password_input: '//input[@type="password" and @name="password"]',
                    login_button: '.red.SignupButton.active',
                    allow_button: '//*[@id="dialog_footer"]/button[2]',
                    email_input: '//*[@id="api-email"]',
                    send_button: '//*[@id="fb-con-wrapper"]/a[2]',
                    check_sent_email_p: '//*[@id="fb-con-wrapper"]/p'
                },
                Yahoo: {
                    first_yahoo_logo: '#follow-teaser > div > a.yahoo.custom-social-button-all.custom-social-button-1 > i',
                    second_yahoo_logo: '#_desktop_user_info > div > span > a.yahoo.custom-social-button-all.custom-social-button-4 > i',
                    third_yahoo_logo: '#follow-teaser-footer > div > a.yahoo.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="login-username"]',
                    password_input: '//*[@id="login-passwd"]',
                    next_button: '//*[@id="login-signin"]'
                },
                Paypal: {
                    first_paypal_logo: '#follow-teaser > div > a.paypal.custom-social-button-all.custom-social-button-1 > i',
                    second_paypal_logo: '#_desktop_user_info > div > span > a.paypal.custom-social-button-all.custom-social-button-4 > i',
                    third_paypal_logo: '#follow-teaser-footer > div > a.paypal.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="email"]',
                    password_input: '//*[@id="password"]',
                    login_button: '//*[@id="btnLogin"]',
                    allow_button: '//*[@id="agreeConsent"]'
                },
                Linkedin: {
                    first_linkedin_logo: '#follow-teaser > div > a.linkedin.custom-social-button-all.custom-social-button-1 > i',
                    second_linkedin_logo: '#_desktop_user_info > div > span > a.linkedin.custom-social-button-all.custom-social-button-4 > i',
                    third_linkedin_logo: '#follow-teaser-footer > div > a.linkedin.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="session_key-oauthAuthorizeForm"]',
                    password_input: '//*[@id="session_password-oauthAuthorizeForm"]',
                    allow_button: '.allow.btn-primary'
                },
                Microsoft: {
                    first_microsoft_logo: '#follow-teaser > div > a.microsoft.custom-social-button-all.custom-social-button-1 > i',
                    second_microsoft_logo: '#_desktop_user_info > div > span > a.microsoft.custom-social-button-all.custom-social-button-4 > i',
                    third_microsoft_logo: '#follow-teaser-footer > div > a.microsoft.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="i0116"]',
                    password_input: '//*[@id="i0118"]',
                    next_button: '//*[@id="idSIButton9"]',
                    accept_button: '//*[@id="idBtn_Accept"]'
                },
                Foursquare: {
                    first_foursquare_logo: '#follow-teaser > div > a.foursquare.custom-social-button-all.custom-social-button-1 > i',
                    second_foursquare_logo: '#_desktop_user_info > div > span > a.foursquare.custom-social-button-all.custom-social-button-4 > i',
                    third_foursquare_logo: '#follow-teaser-footer > div > a.foursquare.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="username"]',
                    password_input: '//*[@id="password"]',
                    allow_button: '//*[@id="loginFormButton"]'
                },
                Github: {
                    first_github_logo: '#follow-teaser > div > a.github.custom-social-button-all.custom-social-button-1 > i',
                    second_github_logo: '#_desktop_user_info > div > span > a.github.custom-social-button-all.custom-social-button-4 > i',
                    third_github_logo: '#follow-teaser-footer > div > a.github.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="login_field"]',
                    password_input: '//*[@id="password"]',
                    allow_button: '.btn.btn-primary.btn-block'
                },
                Disqus: {
                    first_disqus_logo: '#follow-teaser > div > a.disqus.custom-social-button-all.custom-social-button-1 > i',
                    second_disqus_logo: '#_desktop_user_info > div > span > a.disqus.custom-social-button-all.custom-social-button-4 > i',
                    third_disqus_logo: '#follow-teaser-footer > div > a.disqus.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="username"]',
                    password_input: '//*[@id="password"]',
                    allow_button: '.btn',
                    accept_button: '.btn.main'
                },
                Dropbox: {
                    first_dropbox_logo: '#follow-teaser > div > a.dropbox.custom-social-button-all.custom-social-button-1 > i',
                    second_dropbox_logo: '#_desktop_user_info > div > span > a.dropbox.custom-social-button-all.custom-social-button-4 > i',
                    third_dropbox_logo: '#follow-teaser-footer > div > a.dropbox.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="regular-login-forms"]/div/form/div[1]/div[1]/div[2]/input',
                    password_input: '//*[@id="regular-login-forms"]/div/form/div[1]/div[2]/div[2]/input',
                    login_button: '.login-button.signin-button.button-primary',
                    allow_button: '.auth-button.button-primary'
                },
                Wordpress: {
                    first_wordpress_logo: '#follow-teaser > div > a.wordpress.custom-social-button-all.custom-social-button-1 > i',
                    second_wordpress_logo: '#_desktop_user_info > div > span > a.wordpress.custom-social-button-all.custom-social-button-4 > i',
                    third_wordpress_logo: '#follow-teaser-footer > div > a.wordpress.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="usernameOrEmail"]',
                    password_input: '//*[@id="password"]',
                    login_button: '.button.form-button.is-primary',
                    allow_button: '//*[@id="approve"]'
                },
                Tumblr: {
                    first_tumblr_logo: '#follow-teaser > div > a.tumblr.custom-social-button-all.custom-social-button-1 > i',
                    second_tumblr_logo: '#_desktop_user_info > div > span > a.tumblr.custom-social-button-all.custom-social-button-4 > i',
                    third_tumblr_logo: '#follow-teaser-footer > div > a.tumblr.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="signup_determine_email"]',
                    password_input: '//*[@id="signup_password"]',
                    next_button: '//*[@id="signup_forms_submit"]/span[2]',
                    login_button: '.signup_login_btn.active',
                    allow_button: '.chrome.green.allow',
                    linked_modale: '#fb-con-wrapper',
                    email_input: '//*[@id="api-email"]',
                    send_button: '//*[@id="fb-con-wrapper"]/a[2]',
                    check_sent_email_p: '//*[@id="fb-con-wrapper"]/p'
                },
                Vkontakte: {
                    first_vkontakte_logo: '#follow-teaser > div > a.vkontakte.custom-social-button-all.custom-social-button-1 > i',
                    second_vkontakte_logo: '#_desktop_user_info > div > span > a.vkontakte.custom-social-button-all.custom-social-button-4 > i',
                    third_vkontakte_logo: '#follow-teaser-footer > div > a.vkontakte.custom-social-button-all.custom-social-button-1 > i',

                    username_input: '//*[@id="login_submit"]/div/div/input[6]',
                    password_input: '//*[@id="login_submit"]/div/div/input[7]',
                    login_button: '//*[@id="install_allow"]'
                }
            },
            //Common selectors
            Common: {
                favicon: '/html/head/link[2]',

                desktop_login:'//*[@id="_desktop_logo"]/a',
                cookie_banner_close_button:'//*[@id="checkout"]/div/a',
                clickOutSide: '//*[@id="index"]'
            },

            //Access page selectors
            AccessPage: {
                logo_home_page: '.logo.img-responsive',
                first_product_home_page: '.thumbnail.product-thumbnail',
                first_product_home_page_name: '[itemprop="name"]',

                access_loginFO:'div.user-info > a',
                loginFO_input: '//*[@id="login-form"]/section/div[1]/div[1]/input',
                passwordFO_input: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
                loginFO_button: '//*[@id="login-form"]/footer/button',
                logoutFO: '//*[@id="_desktop_user_info"]/div/a[1]'
            },

            //Product page selectors
            ProductPage: {
                add_to_cart_button: '.btn.btn-primary.add-to-cart',
                product_image: '#content',
                product_name_details: '[itemprop="name"]',
                product_price_details: '[itemprop="price"]',
                product_quantity_details: '#quantity_wanted',
                layer_cart: '//div[@id="blockcart-modal" and @style="display: block;"]',
                layer_cart_name_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/h6',
                layer_cart_price_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[1]',
                layer_cart_quantity_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[2]',
                layer_cart_command_button: '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
                command_product_name: '(//div[@class="product-line-info"])[1]/a',
                command_product_price: '//span[@class="price"]',
                command_checkout_button: '//*[@id="main"]/div/div[2]/div[1]/div[3]/div/a',
                checkout_step4_cgv: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
                checkout_step4_order: '#payment-confirmation >div > button',
                order_confirmation_name: '#order-items > div > div > div.col-sm-4.col-xs-9.details > span',
                order_confirmation_price1: '#order-items > div > table > tbody > tr:nth-child(1) > td:nth-child(2)',
                order_confirmation_price2: '#content-hook_payment_return > div > div > div > p > span > strong',
                customer_support_link: '//*[@id="content-hook_payment_return"]/div/div/div/p/a',
                order_confirmation_ref: '//*[@id="order-details"]/ul/li[1]'
            },

            //Cart summary selectors
            CartSummary:{
                command_button_checkout: '//*[@id="main"]/div/div[2]/div[1]/div[3]/div/a',
                checkout_step2_continue_button:'//*[@id="checkout-addresses-step"]/div/div/form/div[2]/button',
                checkout_step3_continue_button: '//*[@id="js-delivery"]/button',
                step3_section: '//*[@id="checkout-delivery-step"]',
                checkout_step4_payment: '//*[@id="payment-option-2"]',
                checkout_step4_cgv: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
                checkout_step4_order_button: '#payment-confirmation >div > button',
                order_confirmation_text:'#content-hook_order_confirmation > div > div > div > h3 > i'
            },

            //Commande selector
            Commande: {
                connect_tab: '//*[@id="checkout-personal-information-step"]/div/ul/li[3]/a',
                address_input: '//*[@id="delivery-address"]/div/section/div[5]/div[1]/input',
                post_code_input: '//*[@id="delivery-address"]/div/section/div[7]/div[1]/input',
                city_input: '//*[@id="delivery-address"]/div/section/div[8]/div[1]/input',
                checkout_step2_continue_button: '//*[@id="delivery-address"]/div/footer/button',
                checkout_step3_continue_button: '//*[@id="js-delivery"]/button',
                footer: '//*[@id="footer"]',
                payment_option_radio: '//*[@id="payment-option-1"]',
                first_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[%ID]'
                // first_facebook_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[1]',
                // first_twitter_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[2]',
                // first_amazon_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[3]',
                // first_google_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[4]',
                // first_pinterest_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[5]',
                // first_yahoo_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[6]',
                // first_paypal_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[7]',
                // first_linkedin_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[8]',
                // first_microsoft_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[9]',
                // first_foursquare_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[10]',
                // first_github_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[11]',
                // first_disqus_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[12]',
                // first_dropbox_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[13]',
                // first_wordpress_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[14]',
                // first_tumblr_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[15]',
                // first_vkontakte_logo: '//*[@id="fbloginblock-beforeauthpage"]/a[16]'
            },

        }
    },
    shouldExist: function(err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};
