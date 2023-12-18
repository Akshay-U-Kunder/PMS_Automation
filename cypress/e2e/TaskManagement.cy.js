import 'cypress-file-upload';
import pmsLogin from "./login"
import createMenuTests from './Createmenutests';
import createUpdateBacklog from './CreateUpdateBacklog';
import createDeployment from './CreateDeployment';
import allForms from './AllForms';
import ProjectSettingModules from './ProjectSettingModules';

describe("PMS  Portal- Task Management",()=>{
    beforeEach("PMS-Dev login as Admin", ()=>{
        pmsLogin.devAdminLogin()
        cy.get('.navbar-nav.d-md-down-none > :nth-child(2) > .nav-link').click()
    })
    it("Taskmanagement Page", ()=>{
        cy.get('.sidebar-toggler > .navbar-toggler-icon').click()
        cy.get('.nav-title').should('not.be.visible')
        cy.get('.sidebar-toggler > .navbar-toggler-icon').click()
        cy.get('.nav-title').should('be.visible')
        cy.xpath("//span[normalize-space()='Summary']").should('have.text','Summary')
        cy.get('.sidebar-toggler > .navbar-toggler-icon').click()
        cy.get('.nav-title').should('not.be.visible')
        cy.get('.sidebar-toggler > .navbar-toggler-icon').click()
        cy.get('.nav-title').should('be.visible')
        //cy.get(":nth-child(1) > .card > .card-body > p").should('have.text','Assigned to me')
        cy.xpath("//p[normalize-space()='Assigned to me']").should('have.text','Assigned to me')
        cy.xpath("//p[normalize-space()='Created by me']").should('have.text','Created by me')
        cy.xpath("//p[normalize-space()='All open tasks']").should('have.text','All open tasks')
        cy.xpath("//p[normalize-space()='Tasks completed (this month)']").should('have.text','Tasks completed (this month)')
    })
    
})