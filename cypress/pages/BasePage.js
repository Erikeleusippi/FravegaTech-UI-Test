export class BasePage {

    headerCompanyLogo = '.anchor-logo';
    headerCathegoryMenu = '.sc-jEACwC > .sc-dAlyuH';
    headerSearchInput = '.sc-ejfMa-d > .sc-dkmUuB > .sc-sLsrZ';
    headerSearchButton = '.sc-iEXKAA';
    headerAccountButton = '.sc-kqGoIF';
    headerCartButton = '.sc-imwsjW';    
    headerTopMenu ='.sc-iMWBiJ';  
    
    footerMenu = '.sc-dBFDNq';
    footerClientNumberOne =':nth-child(2) > .sc-gJCZQp';
    footerClientNumberTwo =':nth-child(3) > .sc-gJCZQp';
    footerSaleNumber ='.sc-dChVcU > .sc-gJCZQp';
    footerPromotionMail = '.sc-iowXnY'
    footerPromotionMailButton = '.sc-fUBkdm';
    footerCreditMailTitle = ':nth-child(3) > .sc-dChVcU > .sc-ezreuY';
    footerCreditMail = '.sc-jwZKMi';
    footerCopyRight = '.sc-fatcLD';

    visit(url) {
        cy.visit(url);
    }

    getElement(selector) {
        return cy.get(selector, { timeout: 10000 });
    }

    clickElement(selector) {
        this.getElement(selector, { timeout: 10000 }).click();
    }

    typeText(selector, text) {
        this.getElement(selector).type(text);
    }

    assertText(selector, expectedText) {
        this.getElement(selector).should('contain.text', expectedText, { timeout: 10000 });
    }

    assertUrlContains(text) {
        cy.url().should('include', text);
    }        
    waitForElement(selector, timeout = 10000) {
        return this.getElement(selector).should('be.visible', { timeout });
    }

    selectOption(selector, option) {
        this.getElement(selector, { timeout: 10000 }).select(option);
    }       
    
     verifyHeader() {
        this.getElement(this.headerCompanyLogo).should('be.visible');
        this.getElement(this.headerCathegoryMenu).should('be.visible');
        this.getElement(this.headerSearchInput).should('be.visible');
        this.getElement(this.headerAccountButton).should('be.visible');
        this.getElement(this.headerCartButton).should('be.visible');
        this.assertText(this.headerTopMenu, 'Seguí tu compra');
        this.assertText(this.headerTopMenu, 'Servicio técnico');
        this.assertText(this.headerTopMenu, 'Sucursales');
        this.assertText(this.headerTopMenu, 'Venta telefónica');
        this.assertText(this.headerTopMenu, 'Centro de ayuda');  
        }
      
     verifyFooter() {
        this.getElement(this.footerMenu).should('be.visible');
        this.assertText(this.footerClientNumberOne, '0800 122 0338');
        this.assertText(this.footerClientNumberTwo, '0810 999 3728');
        this.assertText(this.footerSaleNumber, '0810 333 8700');
        this.getElement(this.footerPromotionMail).should('be.visible');
        this.assertText(this.footerPromotionMailButton, 'Suscribirme');
        this.assertText(this.footerCreditMailTitle, 'Cobranza de créditos:');
        this.assertText(this.footerCreditMail, 'cobranzas@fravega.com.ar');
        this.getElement(this.footerCopyRight).should('be.visible'); 
        }
} 