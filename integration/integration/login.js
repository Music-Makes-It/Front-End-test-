describe("Login Page",function (){
    it("The page loads but buggy", function (){
        cy.visit("http://localhost:3000/login")
        cy.wait(1000);
        cy.scrollTo(0.500)
        cy.wait(1500)
    })


    it("Login and Sign up buttons not working", function (){
        cy.visit("http://localhost:3000/login")
        cy.wait(1000);
        cy.scrollTo(0.500)
        cy.wait(1500)
    })

})

describe("Sidebar",function (){
    it("When on login page, when i click login again it shows blank page", function (){
        cy.visit("http://localhost:3000/login")
        cy.wait(2000)
        cy.contains('Login').click()
        cy.wait(1500)
    })

    it("When on login page, Sign up page doesn't load", function (){
        cy.visit("http://localhost:3000/login")
        cy.wait(2000)
        cy.contains('Sign Up!').click()
        cy.wait(1500)
    })

    it("When on login page, Dashboard page doesn't load", function (){
        cy.visit("http://localhost:3000/login")
        cy.wait(2000)
        cy.contains('Dashboard').click()
        cy.wait(1500)
    })

    it("When on login page, Home page does load", function (){
        cy.visit("http://localhost:3000/login")
        cy.wait(2000)
        cy.contains('Home').click()
        cy.wait(1500)
    })

    it("When on login page, Cart page does load", function (){
        cy.visit("http://localhost:3000/login")
        cy.wait(2000)
        cy.contains('Cart').click()
        cy.wait(1500)
    })
})

