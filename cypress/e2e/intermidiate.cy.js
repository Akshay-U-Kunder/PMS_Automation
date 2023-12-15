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
        cy.get('.nav > :nth-child(1)').should('not.be.visible')
        cy.get('.sidebar-toggler > .navbar-toggler-icon').click()
        cy.get('.nav > :nth-child(1)').should('be.visible')
        cy.get('.col-12 > span').should('have.text','Summary')
        cy.get('.sidebar-toggler > .navbar-toggler-icon').click()
        cy.get('.nav > :nth-child(1)').should('not.be.visible')
        cy.get('.sidebar-toggler > .navbar-toggler-icon').click()
        cy.get('.nav > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(1) > .card > .card-body > p').should('have.text','Assigned to me')
        cy.get(':nth-child(2) > .card > .card-body > p').should('have.text','Created by me')
        cy.get(':nth-child(3) > .card > .card-body > p').should('have.text','All open tasks')
        cy.get(':nth-child(4) > .card > .card-body > p').should('have.text','Tasks completed (this month)')
    })
    it.skip("Search By Task id & edit", ()=>{
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
        /*cy.wait(1000)
        cy.get('#__BVID__609').click()
        cy.wait(500)
        cy.get('.vs__actions').click()
        cy.get('#vs31__option-0').click() */

        //change Task Date
        cy.get(".mx-icon-calendar").click()
        cy.get("td[title='2023-11-06'] div").click()
        cy.get("td[title='2023-11-07'] div").click()  
        

        //attach attachments
        cy.get("label[for='attachments']").selectFile('cypress/fixtures/quotes.pdf')
        cy.get(':nth-child(17) > :nth-child(2) > .fa').click() 

        //add comments
        cy.get("button[class='btn btn-outline-primary btn-sm rounded-pill']").click()
        cy.get("div[class='ql-editor ql-blank'] p").type('Test comments') 
        cy.wait(500)
        //cy.get('#__BVID__645 > .btn').c
        //cy.get(".fa.fa-check").click()

        //cy.get("div[class='ql-editor ql-blank'] p").type('Test comments clear')
        //cy.get(".fa.fa-times").click() 

        cy.get("a[class='btn btn-primary']").click()
        cy.url().should('contain','task_management/log_time')
        cy.get(".fa.fa-arrow-circle-left.backmenu").click()
        
        createMenuTests.checkup()

        cy.get(".fa.fa-arrow-circle-left.backmenu").click()
    })

    it("Assigned to me", ()=>{
        cy.get(':nth-child(2) > div > .nav-link').click()
        cy.wait(1000)
        cy.get('.col-12 > span').should('contain','Assigned to me')

        createMenuTests.checkup()

        cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)').click()
        cy.url().should('contain','task_management/tasks')
        cy.get('.input-group-append > .fa').click()

    })

    it("Created by me", ()=>{
        cy.get(':nth-child(3) > div > .nav-link').click()
        cy.wait(1000)
        cy.get('.col-12 > span').should('contain','Created by me')

        createMenuTests.checkup()
    })

    it("All open", ()=>{
        cy.get(':nth-child(4) > div > .nav-link').click()
        cy.wait(1000)
        cy.get('.col-12 > span').should('contain','All open tasks')
        cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)').click()
        cy.url().should('contain','task_management/tasks')
        
        cy.get('.input-group-append > .fa').click()

        createMenuTests.checkup()
    })

    it("All Bugs", ()=>{
        cy.get(':nth-child(5) > div > .nav-link').click()
        cy.wait(1000)
        cy.get('.col-12 > span').should('contain','Bug Report')

        createMenuTests.checkup()
    })

    it("All Tasks", ()=>{
        cy.get(':nth-child(6) > div > .nav-link').click()
        cy.wait(1000)
        cy.url().should('contain','task_management/tasks/all_tasks')
        cy.get('.col-12 > span').should('contain','Work packages')

        cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)').click()
        cy.url().should('contain','task_management/tasks')
        cy.get('.input-group-append > .fa').click()

        createMenuTests.checkup()
    })

    it("Backlogs", ()=>{
        cy.wait(500)
        cy.get(':nth-child(7) > div > .nav-link').click()
        cy.wait(1000)
        cy.url().should('contain','task_management/backlog')
        cy.get('.col-10 > span').should('contain','Back Logs')

        //createUpdateBacklog.create()

        createUpdateBacklog.update()

        cy.get('.col > :nth-child(2)').should('be.visible')
        cy.get('.col > :nth-child(3)').should('be.visible')
        cy.get('.fa.fa-arrow-circle-left.backmenu').click()
    })

    it("Deployment forms", ()=>{
        cy.get('li:nth-child(8)').should('contain','Deployments')
        cy.get(':nth-child(9) > div > .nav-link').click()
        cy.url().should('contain','task_management/deployments/deployment_forms')

        cy.get('.col-12 > span').should('contain','Deployment forms')

        createDeployment.deployment()

        createDeployment.schemaUpdate()
        
    })

    it("All forms", ()=>{
        cy.get(':nth-child(10) > div > .nav-link').click()
        
        cy.url().should('contain','task_management/deployments/all_forms')
        cy.get('.col-12 > span').should('contain','Deployed forms')
        
        allForms.deployment()

        allForms.schemaUpdate()
    })

    it("Cost report", ()=>{
        cy.get('.nav > :nth-child(11)').should("contain",'Report')

        cy.get(':nth-child(12) > div > .nav-link').click()

        cy.url().should('contain','task_management/cost_report')

        cy.get('#vs48__combobox').click()
        cy.get('#vs48__option-1').click()

        cy.get('#datespent > .mx-input-wrapper > .mx-input').click()
        cy.get(':nth-child(1) > .mx-calendar-content > .mx-table > tbody > :nth-child(3) > [data-row-col="2,3"] > div').click()
        cy.get('.today > div').click()
        cy.get('.btn').click()

        cy.get('#vs53__combobox').click()
        cy.get('#vs53__option-2').click()
        cy.get('#datespent > .mx-input-wrapper > .mx-input').click()
        cy.get('.today > div').click()
        cy.get('.btn').click()

    })

    it("Project Settings", ()=>{
        cy.get('.nav > :nth-child(13)').should('contain','Settings')
        cy.get(':nth-child(14) > div > .nav-link').click()
        
        cy.url().should('contain','task_management/projects')
        cy.get('.breadcrumb-item.active > span').should('contain','Projects')

       cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)').click()

       cy.get('#__BVID__638___BV_tab_button__').click()

       ProjectSettingModules.tabCheck()

    })
    
})