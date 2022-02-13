describe("Cart Page",function (){
    it("Cart products are hard corded", function (){
        cy.visit("http://localhost:3000/cart")
        cy.wait(1500)
    })


    it("Refresh button doesn't work", function (){
        cy.visit("http://localhost:3000/cart")
        cy.wait(1500)
    })

    it("Search sometimes work and doesn't search for products", function (){
        cy.visit("http://localhost:3000/cart")
        cy.wait(2000)
        cy.get('.form-control').type('Co')
        cy.wait(1500)
    })

    it("Checkout button doesn't work", function (){
        cy.visit("http://localhost:3000/cart")
        cy.wait(1500)
    })
})

describe("Sidebar",function (){
    it("When on cart page, login page doesn't load", function (){
        cy.visit("http://localhost:3000/cart")
        cy.wait(2000)
        cy.contains('Login').click()
        cy.wait(1500)
    })

    it("When on cart page, Sign up page doesn't load", function (){
        cy.visit("http://localhost:3000/cart")
        cy.wait(2000)
        cy.contains('Sign Up!').click()
        cy.wait(1500)
    })

    it("When on cart page, Dashboard page doesn't load", function (){
        cy.visit("http://localhost:3000/cart")
        cy.wait(2000)
        cy.contains('Dashboard').click()
        cy.wait(1500)
    })

    it("When on cart page, Home page does load", function (){
        cy.visit("http://localhost:3000/cart")
        cy.wait(2000)
        cy.contains('Home').click()
        cy.wait(1500)
    })
})

