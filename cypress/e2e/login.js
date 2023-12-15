class pmsLogin{
    static devAdminLogin(){
        cy.visit("https://dev-pms.indeadesignsystems.com/login")
        cy.viewport(1280, 720)
        cy.get("[type='email']").type("noreply@indeadesignsystems.com")
        cy.get("[type='password']").type('q1w2e3r4')
        cy.get("[type='submit']").click()
    }
}
export default pmsLogin;