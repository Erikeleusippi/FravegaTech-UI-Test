import { BasePage } from './BasePage';
import 'cypress-iframe';

export class FinalBuyPage extends BasePage {

titlePage = '.sc-6a03bf00-1';
titleStepOne =':nth-child(1) > .sc-faf2c8bc-1';
inputEmail = '.sc-6a03bf00-4 .sc-7e2ffef0-0';
TitleName = '.sc-3423907-2 > :nth-child(1) > label';
titleLastName = '.sc-3423907-2 > :nth-child(2) > label';
inputName = ':nth-child(1) > .sc-7e2ffef0-0';
inputLastName = '.sc-3423907-2 > :nth-child(2) > .sc-7e2ffef0-0';
titleDocument = ':nth-child(4) > label';
inputDocument = ':nth-child(4) > .sc-7e2ffef0-0';
titlePhoneNumber ='[style="display: flex; justify-content: space-between;"] > label';
inputPhoneNumber = '[style="display: flex; justify-content: flex-start; align-items: center; gap: 10px;"] > .sc-7e2ffef0-0';
CheckBoxPromotion = '[style="gap: 10px;"] > input';
titlePromotion = '[style="gap: 10px;"] > span';
ContinueButton = '.sc-f9203034-0';
titleStepTwo = '#formListAddress > .sc-faf2c8bc-1';
titleAddress = '[style="display: flex; gap: 10px; align-items: center;"]';
inputZipCode = '.sc-7e2ffef0-0';
searchZipCode = '[style="display: flex; gap: 20px; align-items: center;"] > a';
streetTitle =':nth-child(1) > :nth-child(1) > .sc-d5e784d0-3';
numberStreet =':nth-child(1) > :nth-child(2) > .sc-d5e784d0-3';
typeHouseTitle = ':nth-child(2) > :nth-child(1) > .sc-d5e784d0-3';
floorTitle = ':nth-child(2) > :nth-child(2) > .sc-d5e784d0-3';
estateTitle =':nth-child(3) > :nth-child(1) > .sc-d5e784d0-3';
cityTitle =':nth-child(3) > :nth-child(2) > .sc-d5e784d0-3';
inputStreet = ':nth-child(1) > .sc-7e2ffef0-0';
inputNumberStreet = '.sc-d5e784d0-0 > :nth-child(1) > :nth-child(2) > .sc-7e2ffef0-0';
listTypeHouse = ':nth-child(2) > :nth-child(1) > .sc-6a0f5484-1 > .sc-6a0f5484-0';
inputFloor = ':nth-child(2) > :nth-child(2) > .sc-7e2ffef0-0';
listEstate = 'select[name="state"]';
listCitty = 'select[name="city"]';
titleTypeShipping = '[style="display: flex; flex-direction: column; gap: 25px;"] > h2';
titleImportant ='.sc-1f04ac43-3';
ShippingClarificationOne ='.sc-1f04ac43-4 > :nth-child(1)';
ShippingClarificationTwo ='.sc-1f04ac43-4 > :nth-child(2)';
checkBoxTypeShippingOne =':nth-child(2) > .sc-24bfd0a2-1 > .sc-24bfd0a2-4 > [alt="Opción de tipo de entrega"]';
checkBoxTypeShippingTwo =':nth-child(3) > .sc-24bfd0a2-1 > .sc-24bfd0a2-4 > [alt="Opción de tipo de entrega"]';
DescriptionShippingOne =':nth-child(2) > .sc-24bfd0a2-1 > .sc-24bfd0a2-4 > span';
DescriptionShippingTwo =':nth-child(3) > .sc-24bfd0a2-1 > .sc-24bfd0a2-4 > span';
selectLocalButton ='.sc-24bfd0a2-2';
listStateAvailable = '#locations';
listStoreAvailable = '.sc-59b92849-12';
nextButton = '.sc-59b92849-9 > .sc-f9203034-0';
titleSelectStore = '.sc-59b92849-4';
ChechBoxDebitCard = '[for="debitCardPaymentGroup"] > .sc-fcd62550-2';
titlePayment = ':nth-child(5) > .sc-faf2c8bc-1';
SecondTitlePayment = '.sc-926b1c77-0';

verifyFinalBuyStepOnePage(email){
    this.assertText(this.titlePage, 'Finalizar la compra');
    this.assertText(this.titleStepOne, 'Datos Personales y Tipo de Factura');
    this.getElement(this.inputEmail).should('have.value', email);
    this.assertText(this.TitleName, 'Nombre');
    this.assertText(this.titleLastName, 'Apellido');
    this.getElement(this.inputName).should('be.visible');
    this.getElement(this.inputLastName).should('be.visible');
    this.assertText(this.titleDocument, 'DNI');
    this.getElement(this.inputDocument).should('be.visible');
    this.assertText(this.titlePhoneNumber, 'Teléfono');
    this.getElement(this.inputPhoneNumber).should('be.visible');
    this.getElement(this.CheckBoxPromotion).should('be.visible');
    this.assertText(this.titlePromotion, 'Quiero recibir promociones por mail.');    
    }   

fillFinalBuyStepOnePage(name, lastName, document, phoneNumber){
    this.typeText(this.inputName, name);
    this.typeText(this.inputLastName, lastName);
    this.typeText(this.inputDocument, document);
    this.typeText(this.inputPhoneNumber, phoneNumber);    
    }

continueStep(){
    cy.get(this.ContinueButton).contains(/continuar/i).should('be.visible');
    cy.get(this.ContinueButton).contains(/continuar/i).click();
    }

VerifiAndfillStepTwoPage(zipCode){
    this.assertText(this.titleStepTwo, 'Domicilio y Entrega'); 
    this.assertText(this.titleAddress, 'Código Postal *');
    this.typeText(this.inputZipCode, zipCode);
    this.getElement(this.inputZipCode).should('be.visible');
    this.getElement(this.searchZipCode).should('be.visible');
    this.assertText(this.streetTitle, 'Calle *');
    this.getElement(this.inputStreet).should('be.visible');
    this.assertText(this.numberStreet, 'Numero *');
    this.getElement(this.inputNumberStreet).should('be.visible');
    this.assertText(this.typeHouseTitle, 'Tipo de domicilio');
    this.getElement(this.listTypeHouse).should('be.visible');
    this.assertText(this.floorTitle, 'Piso/Departamento *');
    this.getElement(this.inputFloor).should('be.visible');
    this.assertText(this.estateTitle, 'Provincia');
    this.getElement(this.listEstate).should('be.visible');
    this.assertText(this.cityTitle, 'Ciudad');
    this.getElement(this.listCitty).should('be.visible');    
    this.assertText(this.titleImportant, 'Importante');
    this.assertText(this.ShippingClarificationOne, 'Retiro en sucursal: sólo podrá retirar la compra el titular de la tarjeta. Si pagás con 2 tarjetas, deberá presentarse quien abonó el mayor monto.');
    this.assertText(this.ShippingClarificationTwo, 'Envío a domicilio');    
    this.getElement(this.checkBoxTypeShippingOne).should('be.visible');
    this.getElement(this.checkBoxTypeShippingTwo).should('be.visible');
    this.assertText(this.DescriptionShippingOne, 'Retiro en Sucursal - Gratis');
    this.getElement(this.DescriptionShippingTwo).should('be.visible');     
    this.typeText(this.inputStreet, 'Av. Gaona');
    this.typeText(this.inputNumberStreet, '1100'); 
    this.typeText(this.inputFloor, '8A');
    this.selectOption(this.listEstate, 'Ciudad Autónoma de Buenos Aires'); 
    this.selectOption(this.listCitty, 'Ciudad Autónoma Buenos Aires');  
    }

    verifyAndFillLocalStore(){
        this.clickElement(this.selectLocalButton);        
        this.selectOption(this.listStateAvailable, 'Capital Federal');
        this.getElement(this.listStoreAvailable).eq(0).click();
        this.assertText(this.titleSelectStore, 'Encontrá las sucursales disponibles para retirar este producto');
        cy.contains(this.nextButton, 'siguiente', { timeout: 10000 }).click();     
        }

    verifyAndFillStepThreePage(){
        this.assertText(this.titlePayment, 'Pago');
        this.getElement(this.SecondTitlePayment).should('be.visible');
        //this.assertText(this.SecondTitlePayment, 'Elegí un medio de pago. Recordá que los datos de tu tarjeta deben coincidir con los datos del comprador');
        this.getElement(this.ChechBoxDebitCard).should('be.visible');
        this.clickElement(this.ChechBoxDebitCard);      
        }

    iframeDebitCard(CardName, CardNumber){
        cy.frameLoaded('#chk-card-form');        
        cy.iframe('#chk-card-form').find('#creditCardpayment-card-0Name').type(CardName);
        cy.iframe('#chk-card-form').find('#creditCardpayment-card-0Number').type(CardNumber);
        cy.screenshot('Carga de datos en iframe de tarjeta');             
        }
    }


