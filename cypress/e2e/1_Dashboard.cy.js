import pmsLogin from "./login"
describe('PMS  Portal- Dashboard', ()=>{
    beforeEach("PMS-Dev login as Admin", ()=>{
        pmsLogin.devAdminLogin()
    })
    it("Dashboard Page", ()=>{
        cy.url().should('contain','dashboard')

        cy.get('.navbar-brand.nuxt-link-exact-active.active.open').should('be.visible')
        cy.get("div[class='card'] div[class='card-header']").should('have.text','UPCOMING EVENTS & HOLIDAYS')
        cy.get("div[class='card announce-heading'] div[class='card-header']").should('have.text','ANNOUNCEMENTS')
        cy.get('.nav-link.nuxt-link-exact-active.active.open').should('have.text','Dashboard')
        cy.get('.navbar-nav.d-md-down-none > :nth-child(2) > .nav-link').should('have.text','Task Management')
        cy.get('.navbar-nav.d-md-down-none > :nth-child(3) > .nav-link').should('have.text','Human Resource')
        cy.get(':nth-child(4) > .nav-link').should('have.text','Reports')
        cy.get('.icon-login').should('be.visible')
        cy.get('.fa-stack').should('be.visible')
        cy.get('#__BVID__111__BV_toggle_ > div > .img-avatar').should('be.visible')

    }) 
    
})