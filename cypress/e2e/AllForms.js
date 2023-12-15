class allForms{
    static deployment(){
        cy.get('#down-right__BV_toggle_').click()
        cy.get(':nth-child(6) > .dropdown-item').click()
        cy.get('#vs47__combobox').type('External')
        cy.get(".vs__dropdown-option").contains('External - test external project').click()

        cy.get('#vs48__combobox').click()
        cy.get('#vs48__option-0').click()

        cy.get('#vs49__combobox').click()
        cy.get('#vs49__option-0').click()

        cy.get('p').type('New test Deployment')
        cy.get('p').type('{selectall}')
        cy.get('.ql-bold').click()
        cy.get('.ql-italic').click()
        
        cy.get('#vs51__combobox').click()
        cy.get('#vs51__option-0').click()

        cy.get('#vs52__combobox').click()
        cy.get('#vs52__option-0').click()

       
        cy.get('#database').type(' RF_CRM_DB')
        cy.get('#vs53__combobox').click()
        cy.get('#vs53__option-1').click()

        cy.get('.custom-file-label').selectFile('cypress/fixtures/Sample-SQL-File.sql')
        cy.get('.btn-primary').click()
    }

    static schemaUpdate(){
        cy.get('#down-right__BV_toggle_').click()
        cy.get(':nth-child(7) > .dropdown-item').click()

        cy.get('.row > :nth-child(1) > :nth-child(2)').should('contain','New Schema update')

        cy.get('p').type('New test Schema')
        cy.get('p').type('{selectall}')
        cy.get('.ql-bold').click()
        cy.get('.ql-italic').click()

        //cy.get('#vs50__combobox').click()
        cy.get('#vs50__combobox').type('External')
        cy.get(".vs__dropdown-option").contains('External - test external project').click()

        cy.get('#database').type(' RF_CRM_DB')

        cy.get('#vs53__combobox').click()
        cy.get('#vs53__option-1').click()

        cy.get('.custom-file-label').selectFile('cypress/fixtures/Sample-SQL-File.sql')
        cy.get('.btn-primary').click()
    }
}

export default allForms;