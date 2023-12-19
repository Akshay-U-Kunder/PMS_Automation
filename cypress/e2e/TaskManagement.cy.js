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
        // Task Management Page assertions to check titile and menu's
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

    it.only("Search By Task id & edit", ()=>{
        cy.get(".form-control").should('be.visible')
        cy.get('.form-control').type('51')
        cy.get("li[title='1cc']").click()
        cy.get('.tasktitle.form-control').click()
        cy.get('.tasktitle.form-control').type(' Test{enter}')
        .click()
        .type('{backspace}')
        .type('{backspace}')
        .type('{backspace}')
        .type('{backspace}')
        .type('{backspace}')
        .type('{backspace}')
        .type('{enter}')
        cy.get('[style="max-height: calc(60vh - 55px); overflow: auto; cursor: text; white-space: pre-wrap;"] > p').click()
        cy.get('.ql-editor').click().type('{selectall}')
        .type('Test Description')
        cy.get('.pull-right > :nth-child(1)').click()

        //changing assignee
        cy.wait(1000)
        cy.get('#__BVID__674').click()
        cy.wait(500)
        cy.get('.vs__actions').click()
        cy.get('#vs31__option-0').click() 

        //change Task Date
        cy.get(".mx-icon-calendar").click()
        cy.get("td[title='2023-11-06'] div").click()
        cy.get("td[title='2023-11-07'] div").click()  
        

        //attach attachments
        cy.get("label[for='attachments']").selectFile('cypress/fixtures/Test1.pdf')
        cy.get(':nth-child(17) > :nth-child(2) > .fa').click() 

        //add comments
        cy.get("button[class='btn btn-outline-primary btn-sm rounded-pill']").click()
        cy.get("div[class='ql-editor ql-blank'] p").type('Test comments') 
        cy.wait(500)
        cy.get('#__BVID__720 > .btn-group > :nth-child(1)').click()
        //cy.get(".fa.fa-check").click()

        cy.get("div[class='ql-editor ql-blank'] p").type('Test comments clear')
        cy.get(".fa.fa-times").click() 

        cy.get("a[class='btn btn-primary']").click()
        cy.url().should('contain','task_management/log_time')
        cy.get(".fa.fa-arrow-circle-left.backmenu").click()
        
        createMenuTests.checkup()

        cy.get(".fa.fa-arrow-circle-left.backmenu").click()
    })

    
})