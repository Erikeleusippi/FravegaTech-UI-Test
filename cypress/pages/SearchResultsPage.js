import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {
    
    titleProductResult = '.sc-7ca66079-8';
    filterArea = '.sc-7ca66079-0 [style="grid-area: aggregations;"]';
    resultArticle = 'article[data-test-id="result-item"]';
    articleSelected ='article[data-test-id="result-item"] .sc-ca346929-0';
    orderByFilter = '[data-test-id="order-by-select"]';
    lowCostFilter = ':nth-child(2) > .sc-7cadb928-0';
    cheackBoxQuotas = ':nth-child(1) > .sc-4cab333d-0 > .sc-8f88aecf-0 > .sc-8f88aecf-1';    
    setMaxPriceFilter = '[name="max"]';
    setMinPriceFilter = '[name="min"]';
    enterNewPriceFilter = '.sc-a3765d4-2';
    checkBoxCompare ='.sc-287a2403-2';
    confirmCompareBtn = '.sc-d62d1820-0';

    
    verifyResultsPage(productName){
        this.verifyHeader();
        this.assertText(this.titleProductResult, productName);
        this.getElement(this.filterArea).should('be.visible');
        this.getElement(this.orderByFilter).should('be.visible');
        this.getElement(this.lowCostFilter).should('exist');
        this.getElement(this.cheackBoxQuotas).should('be.visible');        
        this.getElement(this.setMaxPriceFilter).should('be.visible');
        this.getElement(this.setMinPriceFilter).should('be.visible');
        this.verifyFooter();
    }
    validateSecondElemnt(productName){
        this.getElement(this.resultArticle).eq(1).should('be.visible');
        this.getElement(this.articleSelected).eq(1).should('contain.text', productName);
    }
    selectProduct(){
        this.getElement(this.resultArticle).eq(1).click();
    }
    useFilter() {
        this.clickElement(this.cheackBoxQuotas);       
    }
    useOrderFilter(orderText) {
        this.getElement(this.orderByFilter).click();
        cy.contains('li', orderText).click();
    }
    setPriceFilter(min, max) {
        this.typeText(this.setMinPriceFilter, min);
        this.typeText(this.setMaxPriceFilter, max);
        this.clickElement(this.enterNewPriceFilter);
    }
    selectCompareItem(n) {
        this.getElement(this.checkBoxCompare).each(($el, index) => {
            if (index < n) {
                cy.wrap($el).click();
            }
        });
    }
    confirmCompare() {
        this.clickElement(this.confirmCompareBtn);
    }
} 