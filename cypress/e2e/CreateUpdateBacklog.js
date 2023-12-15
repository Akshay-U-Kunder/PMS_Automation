class createUpdateBacklog
{
    static create(){
        cy.get('a.btn').click()
        cy.url().should('contain','task_management/create_backlog')
        cy.get('h4').should('contain','New Backlog')

        //create backlog
        cy.get('#summary').type('New Test backlog')
        cy.get(".custom-control-input[type='checkbox']").uncheck()
        cy.get('#vs31__combobox > .vs__actions').type('External')
        cy.get(".vs__dropdown-option").contains('External - test external project').click()
        cy.get('p').type('New Test backlog description')
        cy.get('p').type('{selectall}')
        cy.get('.ql-bold').click()
        cy.get('.ql-italic').click()
        cy.get('p').type('{enter}')
        cy.get(".ql-image").attachFile('Screenshot.png').click()

        cy.get('#vs32__combobox > .vs__selected-options > .vs__search').click()
        cy.get('#vs32__option-2').click()

        cy.get('#vs33__combobox > .vs__actions').click()
        cy.get('#vs33__option-0').click()

        cy.get('#vs34__combobox > .vs__actions').click()
        cy.get('#vs34__option-0').click()

        cy.get('#vs36__combobox > .vs__actions').click()
        cy.get('#vs36__option-1').click()

        cy.get('#vs37__combobox > .vs__actions').click()
        cy.get('#vs37__option-2').click()

        cy.get('.custom-file-label').selectFile('cypress/fixtures/quotes.pdf')

        cy.get('.btn-primary').click() 
    }
    static update(){
        cy.get(':nth-child(1) > [style="width: 20em; list-style: none; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"]').click()

        cy.get('.mx-input').click()
        cy.get(':nth-child(1) > .mx-calendar-content > .mx-table > tbody > :nth-child(4) > [data-row-col="3,4"] > div').click()
        cy.get(':nth-child(1) > .mx-calendar-content > .mx-table > tbody > :nth-child(4) > [data-row-col="3,5"] > div').click()

        cy.get('#estimated').type('{selectall}{backspace}05:00{enter}')
        
        cy.get('.form-row > .col > .btn-success').click() 
    }
}

export default createUpdateBacklog;