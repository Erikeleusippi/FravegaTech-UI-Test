import { BasePage } from './BasePage';

export class ProductPage extends BasePage {   
    
    cathegoryBar = '.sc-8071ec51-0 > .sc-56271133-3';
    productTitle = '.sc-56271133-3 > .sc-2628e4d4-7 > .sc-2628e4d4-8';
    imageProduct = '.sc-56271133-3 > .sc-35d8967e-0';
    markProduct = '.sc-2b48db22-0 [data-test-id="product-info"] [data-event="fvg.productDetail.click-top-brand-link"]';
    saleForTitle = '.sc-56271133-3 > .sc-2628e4d4-7 > .sc-4f63cfa5-0';
    priceProduct = '.sc-2628e4d4-7 > .sc-56333aa7-1 > .sc-1d9b1d9e-0';
    promotionBankContainer = '.sc-56271133-3 [data-test-id="product-info"] [data-test-id="payment-tooltip"]';
    ShuppingSection = '[data-test-id="product-delivery"]';
    buyButton = '.sc-2b48db22-1 [data-test-id="product-buy-button"]';
    addToCartButton = '.sc-2b48db22-1 .sc-2ec5050c-1';
    descriptionSection = '.sc-fb2c095-0';
    technicalTab = 'button[id="0"]';
    descriptionTab = 'button[id="1"]';
    factoryInfoTab = 'button[id="2"]';
    butTab = 'button[id="3"]';
    cartCount = '.sc-dQEtJz > .sc-hTUWRQ';
    gotocart = '[data-tooltip-open="true"] [data-test-id="button-cart" ] [data-test-id="link-go-to-cart"]';

    verifyProductPage(){
       // this.verifyHeader();
        this.getElement(this.cathegoryBar).should('be.visible');
      //  this.verifyFooter();
    }
    verifyProductDetails(productName) {
        this.getElement(this.saleForTitle).should('be.visible');
        this.getElement(this.productTitle).should('contain.text', productName);
        this.getElement(this.imageProduct).should('be.visible');
        this.getElement(this.promotionBankContainer).should('exist');
        this.getElement(this.priceProduct).should('be.visible');         
        this.getElement(this.ShuppingSection).should('be.visible');
        this.getElement(this.markProduct).scrollIntoView().should('exist');
        this.getElement(this.addToCartButton).scrollIntoView().should('be.visible');
        this.getElement(this.buyButton).should('be.visible');       
        this.getElement(this.descriptionSection).should('be.visible');
        this.getElement(this.technicalTab).scrollIntoView().should('be.visible');
        this.getElement(this.descriptionTab).scrollIntoView().should('be.visible');
        this.getElement(this.factoryInfoTab).scrollIntoView().should('be.visible');
        this.getElement(this.butTab).scrollIntoView().should('be.visible');
        
    }
    
    addToCart() {
        this.getElement(this.buyButton).scrollIntoView().should('exist');
        this.getElement(this.addToCartButton).scrollIntoView().should('be.visible').click();
    }
    verifyProductAddedToCart() {
        this.getElement(this.cartCount).scrollIntoView().should('be.visible');
    }
    goToCart() {
        this.clickElement(this.buyButton);
    }
} 