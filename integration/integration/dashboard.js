describe("The dashboard tiles",function (){
    it("(Sales, Customers & Orders) values are hard corded", function (){
        cy.visit("http://localhost:3000/dashboard")
        cy.wait(1500)
    })
})


describe("The dashboard products",function (){
    it("Products are hard corded", function (){
        cy.visit("http://localhost:3000/dashboard")
        cy.wait(1500)
    })

    it("On product click, it opens all products instead of the product description page", function (){
        cy.visit("http://localhost:3000/dashboard")
        cy.wait(500)
        cy.scrollTo(0,500)
        cy.wait(2000)
        cy.contains('Coach Swagger').click()
        cy.wait(1500)
    })

    it("Refresh button doesn't work", function (){
        cy.visit("http://localhost:3000/dashboard")
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
    it("When on dashboard page, login page doesn't open. It shows blank", function (){
        cy.visit("http://localhost:3000/dashboard")
        cy.wait(2000)
        cy.contains('Login').click()
        cy.wait(1500)
    })

    it("When on dashboard page, sign page doesn't open. It shows blank", function (){
        cy.visit("http://localhost:3000/dashboard")
        cy.wait(2000)
        cy.contains('Sign Up!').click()
        cy.wait(1500)
    })

    it("Cart page opens", function (){
        cy.visit("http://localhost:3000/dashboard")
        cy.wait(2000)
        cy.contains('Cart').click()
        cy.wait(1500)
    })

    it("Home page opens", function (){
        cy.visit("http://localhost:3000/dashboard")
        cy.wait(2000)
        cy.contains('Home').click()
        cy.wait(1500)
    })
})

