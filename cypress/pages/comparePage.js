import { BasePage } from './BasePage';

export class ComparePage extends BasePage {
    
    imageProductCompare = '.sc-1641e09c-3 .sc-1362d5fd-2 .sc-1362d5fd-1';
    nameProductCompare = '.sc-5d5b0ad6-0 .sc-ca346929-0';
    priceProductCompare = '.sc-9c27ad62-0 .sc-1d9b1d9e-0';
    compareButton = '[data-test-id="buy-button"]';
    titleComparation = '.sc-e3469c03-1 .sc-2a817c70-0';
    buyButton = '.sc-e3469c03-4 .sc-e3469c03-5 [data-event="fvg.compareProducts.click-purchase-button"]';

    VerifyComparePage() {
        this.verifyHeader();
        this.assertText(this.titleComparation, 'Estás comparando los siguientes productos');
        for (let i = 0; i < 4; i++) {
            this.getElement(this.imageProductCompare).eq(i).should('be.visible');
            this.getElement(this.nameProductCompare).eq(i).should('be.visible');
            this.getElement(this.priceProductCompare).eq(i).should('be.visible');
            this.getElement(this.compareButton).eq(i).should('be.visible');
        }
        this.verifyFooter();
    }

    selectProduct(index) {        
        this.getElement(this.buyButton).eq(index).scrollIntoView().click();
    }
} 