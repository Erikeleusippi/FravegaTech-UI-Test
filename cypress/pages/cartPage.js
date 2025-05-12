import { BasePage } from './BasePage'; 

export class CartPage extends BasePage {

    cartTitle = '.sc-jhZTHU'
    cartProductlist = '.sc-b6a50d62-5' 
    deleteProduct = '.sc-b6a50d62-19'    
    moreInfoButton = '.sc-b6a50d62-16 .sc-eOzmre'
    countProduct = '.sc-f855981b-0'
    lessCountProductButton = '.sc-f855981b-0 .sc-f855981b-1'
    addCountProductButton = '.sc-f855981b-0 > :nth-child(3)'
    priceListProduct = '.sc-geXuza'
    titleCodeDiscount = '.sc-1b664852-0 .sc-1b664852-1'
    inputCodeDiscount = '.sc-1b664852-2 .sc-1b664852-3'
    aplyDiscountButton = '.sc-1b664852-4'
    subtotal = '.sc-78e829cd-0 .sc-78e829cd-1';
    shippingCost = '.sc-78e829cd-0 .sc-78e829cd-1';
    total = '.sc-78e829cd-2';
    finishBuyButton = '.sc-78e829cd-3 #endPurchaseCart';
    continueBuyButton = '.sc-78e829cd-5'; 
    popupDiscountMessage = '.Toastify__toast-body > :nth-child(2)';       

    verifyCartPage(productName) {                 
        this.getElement(this.cartTitle).invoke('text').should('include', 'Mi carrito');
        this.getElement(this.cartProductlist).should('contain.text', productName)
        this.assertText(this.deleteProduct, 'Eliminar')       
        this.getElement(this.lessCountProductButton).should('be.visible')
        this.getElement(this.addCountProductButton).should('be.visible')
        this.getElement(this.priceListProduct).should('be.visible')
        this.assertText(this.titleCodeDiscount, '¿Tenés un código de descuento?')
        this.getElement(this.inputCodeDiscount).should('be.visible')
        this.getElement(this.aplyDiscountButton).should('be.visible')
        this.getElement(this.subtotal).should('be.visible')
        this.getElement(this.shippingCost).should('be.visible')
        this.getElement(this.total).should('be.visible')
        this.getElement(this.finishBuyButton).should('be.visible')
        this.getElement(this.continueBuyButton).should('be.visible')
    }

    finishBuy(){
        this.clickElement(this.finishBuyButton)
    }

    fillCodeDiscount(code){
        this.typeText(this.inputCodeDiscount, code)
        this.clickElement(this.aplyDiscountButton)
    }

        validateCodeDiscount(code){
            this.getElement(this.popupDiscountMessage)
            .should('be.visible').invoke('text').then((mensaje) => {
                console.log('la respuesta es:', mensaje);
                if(mensaje.trim() === '¡Cargaste el cupón con éxito!Aplicaremos el descuento si tu compra cumple con los requisitos.'){
                    this.assertText(this.popupDiscountMessage, mensaje.trim());
                    cy.screenshot('Evidencia Cupón Válido');
                } else {
                    this.assertText(this.popupDiscountMessage, `Cupón ${code} inválido`);
                    cy.screenshot('Evidencia Cupón Inválido');
                }
            });
        }
}
 