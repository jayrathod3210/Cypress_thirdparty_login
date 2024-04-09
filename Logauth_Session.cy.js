
beforeEach(() => {


  cy.session("login",()=>{

  cy.visit('http://uat.service365.com/signin')
  cy.get('#cookie-acceptance-button').click()
  cy.get('#app-sign-in-button').click()
  cy.wait(2000)


    cy.origin("https://login.microsoftonline.com/", () => {
      cy.get('[name=loginfmt]').type("Jay.rathod@service365.com")
    cy.wait(2000)
    cy.get('#idSIButton9').click();  // next button
    cy.get('#i0118').type("tatvasoft@3210")
    cy.get('#idSIButton9').should('be.visible').click({ force: true })
    //cy.get('#app-sign-in-button').click({ force: true })
  
  
  });
    
  cy.visit("http://uat.service365.com/")
  cy.get('#app-sign-in-button').click({ force: true })
  
  cy.get('#timesheetTile > .card-enabled').click({force: true})

})
});

it("Timesheet", ()=>{
  cy.visit("http://uat.service365.com/")
  //cy.get('#app-sign-in-button').click({ force: true })
  cy.get('#timesheetTile > .card-enabled').click({force: true})

})

 

