import { BasePage } from './BasePage'; 

export class CartEmailPage extends BasePage {

    mailTitle = '.sc-c4f086e2-1 .sc-c4f086e2-2 .sc-c4f086e2-6'
    informationBox = '.sc-c4f086e2-3'
    continueButton = '.sc-c4f086e2-0'
    inputMail = '.sc-c4f086e2-4'

    verifyCartEmailPage(){
    this.assertText(this.mailTitle, 'Ingresa tu mail para continuar la compra.');
    this.getElement(this.informationBox).should('be.visible');
    this.assertText(this.continueButton, 'Continuar');        
    }
    
    fillMailAndFinishPage(mail){
        this.typeText(this.inputMail, mail);
        this.clickElement(this.continueButton);
    }

}