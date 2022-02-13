describe("Sign Up Page",function (){
    it("The page loads but buggy", function (){
        cy.visit("http://localhost:3000/signup")
        cy.wait(1000);
        cy.scrollTo(0.500)
        cy.wait(1500)
    })


    it("Sign up button not working", function (){
        cy.visit("http://localhost:3000/signup")
        cy.wait(1000);
        cy.scrollTo(0.500)
        cy.wait(1500)
    })

})

describe("Sidebar",function (){
    it("When on signup page, when i click signup again it shows blank page", function (){
        cy.visit("http://localhost:3000/signup")
        cy.wait(2000)
        cy.contains('Sign Up!').click()
        cy.wait(1500)
    })

    it("When on signup page, Login page doesn't load", function (){
        cy.visit("http://localhost:3000/signup")
        cy.wait(2000)
        cy.contains('Login').click()
        cy.wait(1500)
    })

    it("When on signup page, Dashboard page doesn't load", function (){
        cy.visit("http://localhost:3000/signup")
        cy.wait(2000)
        cy.contains('Dashboard').click()
        cy.wait(1500)
    })

    it("When on signup page, Home page does load", function (){
        cy.visit("http://localhost:3000/signup")
        cy.wait(2000)
        cy.contains('Home').click()
        cy.wait(1500)
    })

    it("When on signup page, Cart page does load", function (){
        cy.visit("http://localhost:3000/signup")
        cy.wait(2000)
        cy.contains('Cart').click()
        cy.wait(1500)
    })
})

