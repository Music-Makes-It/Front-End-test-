describe("Products",function (){
    it("Products are hard corded", function (){
        cy.visit("http://localhost:3000/#")
        cy.wait(1500)
    })

    it("On product click, nothing happens", function (){
        cy.visit("http://localhost:3000/#")
        cy.wait(2000)
        cy.contains('Coach Swagger').click()
        cy.wait(1500)
    })

    it("Refresh button doesn't work", function (){
        cy.visit("http://localhost:3000/#")
        cy.wait(1500)
    })

    it("Search sometimes work and doesn't search for products", function (){
        cy.visit("http://localhost:3000")
        cy.wait(2000)
        cy.get('.form-control').type('Co')
        cy.wait(1500)
    })
})

describe("Sidebar",function (){
    it("When on home page, login page does open but its buggy", function (){
        cy.visit("http://localhost:3000")
        cy.wait(2000)
        cy.contains('Login').click()
        cy.wait(1000)
        cy.scrollTo(0,500)
        cy.wait(1500)
    })

    it("When on home page, login page does open but its buggy", function (){
        cy.visit("http://localhost:3000")
        cy.wait(2000)
        cy.contains('Sign Up!').click()
        cy.wait(1000)
        cy.scrollTo(0,500)
        cy.wait(1500)
    })

    it("Cart page opens", function (){
        cy.visit("http://localhost:3000")
        cy.wait(2000)
        cy.contains('Cart').click()
        cy.wait(1500)
    })

    it("Dashboard page opens", function (){
        cy.visit("http://localhost:3000")
        cy.wait(2000)
        cy.contains('Dashboard').click()
        cy.wait(1500)
    })
})

