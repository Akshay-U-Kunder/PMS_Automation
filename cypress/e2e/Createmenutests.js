class createMenuTests{
    static checkup(){
        cy.wait(500)
        cy.get("#down-right__BV_toggle_").click()
        cy.get('#down-right > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
        cy.url().should('contain','task_management/create_task')
        cy.get("h4:nth-child(1)").should('contain','New Task')
        cy.get('.fa.fa-ban').click()

        cy.wait(500)
        cy.get('#down-right__BV_toggle_').click()
        cy.get(':nth-child(3) > .dropdown-item').click()
        cy.url().should('contain','task_management/create_task')
        cy.get('.row > :nth-child(1) > :nth-child(2)').should('contain','New Bug')
        cy.get('.fa.fa-ban').click()

        cy.wait(500)
        cy.get('#down-right__BV_toggle_').click()
        cy.get('#down-right > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
        cy.url().should('contain','task_management/create_task')
        cy.get('.card-header > .row > :nth-child(1)').should('contain','New Feature')
        cy.get('.fa.fa-ban').click()
    }
}

export default createMenuTests;