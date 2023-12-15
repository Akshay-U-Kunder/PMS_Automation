class createDeployment{
    static deployment(){
        cy.get('#down-right__BV_toggle_').click()
        cy.get(':nth-child(6) > .dropdown-item').click()
        cy.get('#vs31__combobox > .vs__selected-options > .vs__search').type('External')
        cy.get(".vs__dropdown-option").contains('External - test external project').click()

        cy.get('#vs32__combobox > .vs__actions').click()
        cy.get('#vs32__option-0').click()

        cy.get('#vs33__combobox > .vs__actions').click()
        cy.get('#vs33__option-0').click()

        cy.get('p').type('New test Deployment')
        cy.get('p').type('{selectall}')
        cy.get('.ql-bold').click()
        cy.get('.ql-italic').click()
        
        cy.get('#vs35__combobox > .vs__actions').click()
        cy.get('#vs35__option-0').click()

        cy.get('#vs36__combobox > .vs__actions').click()
        cy.get('#vs36__option-0').click()

       
        cy.get('#database').type(' RF_CRM_DB')
        cy.get('#vs37__combobox > .vs__actions').click()
        cy.get('#vs37__option-1').click()

        cy.get('.custom-file-label').selectFile('cypress/fixtures/Sample-SQL-File.sql')
        cy.get('.btn-primary').click()
    }

    static schemaUpdate(){
        
        cy.wait(1000)
        cy.get('#down-right__BV_toggle_').click()
        cy.get(':nth-child(7) > .dropdown-item').click()

        cy.get('.row > :nth-child(1) > :nth-child(2)').should('contain','New Schema update')

        cy.get('p').type('New test Schema')
        cy.get('p').type('{selectall}')
        cy.get('.ql-bold').click()
        cy.get('.ql-italic').click()

        cy.get('#vs34__combobox').click()
        cy.get('#vs34__combobox').type('External')
        cy.get(".vs__dropdown-option").contains('External - test external project').click()

        cy.get('#database').type(' RF_CRM_DB')

        cy.get('#vs37__combobox > .vs__actions').click()
        cy.get('#vs37__option-1').click()

        cy.get('.custom-file-label').selectFile('cypress/fixtures/Sample-SQL-File.sql')
        cy.get('.btn-primary').click()
    }
}

export default createDeployment;