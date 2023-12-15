class ProjectSettingModules{
    static tabCheck(){
        //Module 
       cy.get('#__BVID__638 > .admincontainer > .row > .col > .pull-right').click()
       cy.get('#__BVID__641').type('Test Module')
       cy.get('#__BVID__638 > .admincontainer > .row > .col > .input-group > .input-group-append > .btn-success').click()
       cy.get(':nth-child(5) > .input-group > .input-group-append > .btn-danger').click() 

       //Category
       cy.get('#__BVID__642___BV_tab_button__').click()
       cy.get('#__BVID__642 > .admincontainer > .row > .col > .pull-right').click()
       cy.get('#__BVID__645').type('Test Category')
       cy.get('#__BVID__642 > .admincontainer > .row > .col > .input-group > .input-group-append > .btn-success > .fa').click()
       cy.get(':nth-child(5) > .input-group > .input-group-append > .btn-danger > .fa').click() 

       //version 
       cy.get('#__BVID__646___BV_tab_button__').click()
       cy.get('#__BVID__646 > .admincontainer > .row > .col > .pull-right').click()
       cy.get('#__BVID__649').type('Test Vsersion 1.0')
       cy.get('#__BVID__646 > .admincontainer > .row > .col > .input-group > .input-group-append > .btn-success > .fa').click()
       cy.get(':nth-child(5) > .input-group > .input-group-append > .btn-danger').click() 

       //user
       cy.get('#__BVID__650___BV_tab_button__').click()
       cy.get('#__BVID__650 > .admincontainer > .row > .col > h6 > strong').should('contain','Assigned Users')
    }
}

export default ProjectSettingModules;