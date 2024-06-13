// Note: Add below config on cypress.config.js file
//     chromeWebSecurity: false,
//     experimentalModifyObstructiveThirdPartyCode: true, // Third party login
//     experimentalSessionAndOrigin: true, // // Third party login

beforeEach(() => {
  
  cy.session("login",()=>{  // Sesssion started
  cy.visit('URL') // Add your visit URL
  // Perform action for select login.

    cy.origin("https://login.microsoftonline.com/", () => {   // Add your origin e.g google,microsoft,etc.
    // Find locator to enter login and password field 
    cy.get('[name=loginfmt]').type("",{log:false})  // Enter email.
    cy.wait(2000)
    cy.get('#idSIButton9').click();  // next button
    cy.get('#i0118').type("",{log:false}) // Enter password
    cy.get('#idSIButton9').should('be.visible').click({ force: true })
    
  });  
  cy.visit("http://")  // Enter your URL again.
})
});

it("Test", ()=>{
  
// Write you code.
})
