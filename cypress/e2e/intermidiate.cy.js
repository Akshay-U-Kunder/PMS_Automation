import 'cypress-file-upload';
import pmsLogin from "./login"
import createMenuTests from './Createmenutests';
import createUpdateBacklog from './CreateUpdateBacklog';
import createDeployment from './CreateDeployment';
import allForms from './AllForms';
import ProjectSettingModules from './ProjectSettingModules';

describe("Test", ()=>{
    beforeEach("PMS-Dev login as Admin", ()=>{
        pmsLogin.devAdminLogin()
        cy.get('.navbar-nav.d-md-down-none > :nth-child(2) > .nav-link').click()
    })

    it.skip("Backlogs", ()=>{
        cy.wait(500)
        cy.get(':nth-child(7) > div > .nav-link').click()
        cy.wait(1000)
        cy.url().should('contain','task_management/backlog')
        cy.get('.col-10 > span').should('contain','Back Logs')

        createUpdateBacklog.create()

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