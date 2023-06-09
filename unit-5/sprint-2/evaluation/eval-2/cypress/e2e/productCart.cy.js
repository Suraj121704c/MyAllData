import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "aditya" }];

const getAuthStore = (win) => win.store.getState().authReducer;
const getProductsStore = (win) => win.store.getState().productReducer;
const getCartStore = (win) => win.store.getState().cartReducer;

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Product Cart", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`Check Initial Redux Store Structure for Authentication`, () => {
      cy.window()
        .then(getAuthStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          isAuth: false,
          token: "",
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Check Initial Redux Store Structure for Products`, () => {
      cy.window()
        .then(getProductsStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          products: [],
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Check Initial Redux Store Structure for Cart`, () => {
      cy.window()
        .then(getCartStore)
        .should("deep.equal", {
          cart: [],
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Get request should be made for products when home page loads`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/products*").as("products");
      cy.wait("@products").should((xhr) => {
        expect(xhr.status, "successful GET").to.equal(200);
      });
      cy.get("@products").its("response.body").should("have.length", 30);
      cy.then(() => (acc_score += 1));
    });

    it(`isLoading should update accordingly while making request`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/products*").as("products");

      cy.window().then(getProductsStore).its("isLoading").should("eq", false);

      cy.wait("@products");
      cy.wait(1000).then(() => {
        cy.window().then(getProductsStore).its("isLoading").should("eq", false);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`Product state in store should update when products loads on homepage`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/products*").as("products");

      cy.window()
        .then(getProductsStore)
        .its("products")
        .should("have.length", 0);

      cy.wait("@products");
      cy.wait(1000);

      cy.window()
        .then(getProductsStore)
        .its("products")
        .should("have.length", 30);
      cy.then(() => (acc_score += 2));
    });

    it(`All Products should be displayed on home page`, () => {
      cy.get("[data-testid=product-list]").children().should("have.length", 30);
      cy.get(".product-card").should("have.length", 30);
      cy.get(".product-title").eq(0).should("have.text", "iPhone 9");
      cy.get(".product-price").eq(2).should("have.text", "1249");
      cy.get(".product-brand").eq(3).should("have.text", "OPPO");
      cy.get(".product-discount").eq(4).should("have.text", "10.58");
      cy.then(() => (acc_score += 1));
    });

    it(`On sorting product ascending data should render in UI accordingly`, () => {
      cy.get("[data-testid=sort-asc]").click();
      cy.wait(2000);
      cy.get(".product-discount").then((res) => {
        let sort = true;
        for (let i = 1; i < res.length; i++) {
          if (+res[i - 1].childNodes[0].data > +res[i].childNodes[0].data) {
            sort = false;
            break;
          }
        }
        expect(sort).to.eq(true);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`On sorting product descending data should render in UI accordingly`, () => {
      cy.get("[data-testid=sort-desc]").click();
      cy.wait(2000);
      cy.get(".product-discount").then((res) => {
        let sort = true;
        for (let i = 1; i < res.length; i++) {
          if (+res[i - 1].childNodes[0].data < +res[i].childNodes[0].data) {
            sort = false;
            break;
          }
        }
        expect(sort).to.eq(true);
      });
      cy.then(() => (acc_score += 1));
    });

    it("On clicking add to cart, the item should be added to the cart store", () => {
      cy.get(".add-to-cart").eq(0).click();
      cy.get(".add-to-cart").eq(2).click();

      cy.window().then(getCartStore).its("cart").should("have.length", 2);

      cy.get(".add-to-cart").eq(1).click();
      cy.get(".add-to-cart").eq(3).click();

      cy.window().then(getCartStore).its("cart").should("have.length", 4);

      cy.window()
        .then(getCartStore)
        .its("cart")
        .then((res) => {
          expect(res[0].title).to.equal("iPhone 9");
          expect(res[1].title).to.equal("Samsung Universe 9");
          expect(res[2].title).to.equal("iPhone X");
          expect(res[3].title).to.equal("OPPOF19");
        });

      cy.then(() => (acc_score += 2));
    });

    it(`On Login the store authReducer state should update accordingly`, () => {
      cy.window().then(getAuthStore).its("isAuth").should("equal", false);
      cy.window().then(getAuthStore).its("token").should("equal", "");

      cy.intercept("POST", "**/api/login").as("login");

      cy.visit(`${url}login`);
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();

      cy.wait("@login");
      cy.wait(1000);

      cy.window().then(getAuthStore).its("isAuth").should("equal", true);

      cy.then(() => (acc_score += 2));
    });

    it(`user is redirected to login page while visiting "/cart", without authentication`, () => {
      cy.intercept("POST", "**/api/login").as("login");
      cy.visit(`${url}cart`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });

      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();

      cy.wait("@login");
      cy.wait(1000);

      cy.window().then(getAuthStore).its("isAuth").should("equal", true);

      cy.then(() => (acc_score += 1));
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
