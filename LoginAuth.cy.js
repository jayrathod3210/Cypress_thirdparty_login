
beforeEach(() => {

          // Visit the Microsoft login page
          cy.visit('http://uat.service365.com/signin')
          cy.get('#cookie-acceptance-button').click()
          cy.get('#app-sign-in-button').click()
  
      });
    
    
    it('Should successfully log in using Microsoft OAuth2', () => {

    
    cy.origin("https://login.microsoftonline.com/",()=>{
      cy.get('[name=loginfmt]').type("Jay.rathod@service365.com")
      cy.get('#idSIButton9').click();  // next button
      cy.get('#i0118').type("tatvasoft@3210")
      cy.get('#idSIButton9').should('be.visible').click()
      cy.wait(3000)

     
    });
    cy.wait(3000)

    cy.get('#timesheetTile > .card-enabled').click()

   
    // cy.visit("http://uat.service365.com/")
    // cy.get('#app-sign-in-button').click()
    
    
    });
  