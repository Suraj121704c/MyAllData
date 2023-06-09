## React Redux Product Cart

### Maximum Marks: 16

```
✅ Able to make submission: - 1 Mark
✅ Check Initial Redux Store Structure for Authentication: - 1 Mark
✅ Check Initial Redux Store Structure for Products: - 1 Mark
✅ Check Initial Redux Store Structure for Cart: - 1 Mark
✅ Get request should be made for products when home page loads: - 1 Mark
✅ isLoading should update accordingly while making request: - 1 Marks
✅ Product state in store should update when products loads on homepage: - 2 Mark
✅ All Products should be displayed on home page: - 1 Marks
✅ On sorting product ascending data should render in UI accordingly: - 1 Marks
✅ On sorting product descending data should render in UI accordingly: - 1 Marks
✅ On clicking add to cart, the item should be added to the cart store: - 2 Marks
✅ On Login the store authReducer state should update accordingly: - 2 Mark
✅ user is redirected to login page while visiting "/cart", without authentication: - 1 Mark
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
// install node_modules
npm install --engine-strict

// run locally
npm run start

//to start the json-server

npm run server
```

- **_Note_**:

1. Make sure that the json-server is up and running at port 8080
2. There is a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server base url

## Folder Structure (Important Files)

```
>Src
├── >Components
│    └── ProductCard.jsx
│    └── ProductList.jsx
│    └── SideBar.jsx
|    └── PrivateRoute.jsx
|    └── Navbar.jsx
├── >Pages
│    └── HomePage.jsx (Route:- "/")
│    └── LogIn.jsx (Route:- "/login")
│    └── CartPage.jsx (Private Route:- "/cart")
│    └── MainRoutes.jsx (Add all Routes here)
└── >Redux
│    └── >AuthReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── >CartReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── >ProductReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── store.js
└── App.js
```

## Problem Statement

Create a product-cart page where user can see list of products and add it to cart. Use redux store as your cart.
They can sort the products based on the discount provided.

### Redux

- Create redux store, and use thunk middleware
- Create separate reducer as `authReducer`, `productReducer` and `cartReducer` respectively.
- Use combineReducer
- All the API request will be made in `action.js`
- Initial state for `authReducer` should be

```
{
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}
```

- Initial state for `productReducer` should be

```
{
  isLoading: false,
  isError: false,
  products: [],
}
```

- Initial state for `cartReducer` should be

```
{
   cart: [],
}
```

### ProductList

- Complete the `ProductList` component.
- Update the store with the product data when the component renders
- `isLoading` and `isError` should be updated accordingly as per the request made.
- Show the list of products in grid format inside div with `data-testid = "product-list"`.
- Use the `ProductCard` component for showing product details, with the below constraints
- Every product card will have class `product-card`
- Every product card will have a `add to cart` button with class `add-to-cart`

```
- Show image in image tag with class `product-image`
- Show title with class `product-title`
- Show brand in p tag with class `product-brand`
- Show price in p tag with class `product-price`
- Show discount in p tag with class `product-discount`
* Do not add any extra text, only response values should be present *
* For example `Title: "iPhone"` or `Discount: 10.5%` will not work *
```

- If user adds something to the cart, update the `cartReducer` store accordingly

**Initially the order of products should not be in increasing or decreasing order**

<img width="1715" alt="Screenshot 2023-03-11 at 12 04 17 AM" src="https://user-images.githubusercontent.com/74458714/224397940-9b2ebbb7-2d57-4a20-b1db-fc0fb024f829.png">

### Authentication

- Use `reqres.in` for login functionality
- Complete the `login` page.
- On successfull login update the redux store accordingly with isAuth and token.
- If the user is not authenticated and tries to visit `/cart`, redirect him to `login` page

<img width="1722" alt="Screenshot 2023-03-11 at 12 04 27 AM" src="https://user-images.githubusercontent.com/74458714/224397996-71c3de39-ebe7-4b26-a3a6-350b8d2ecffd.png">

### CartPage

- User can only visit cart page if he is logged in.
- Show the items added to the cart store here in grid format
- All the items will be displayed within div with `data-testid = "cart-list`
- The product card will have class `product-card` with following constraints:-

```
- Show image in image tag with class `product-image`
- Show title with class `product-title`
- Show brand in p tag with class `product-brand`
- Show price in p tag with class `product-price`
- Show discount in p tag with class `product-discount`
* Do not add any extra text, only response values should be present *
* For example `Title: "iPhone"` or `Discount: 10.5%` will not work *
```

<img width="1724" alt="Screenshot 2023-03-11 at 12 05 43 AM" src="https://user-images.githubusercontent.com/74458714/224398051-df2ee4d3-9ba2-420c-9782-e7a6000ceb3c.png">

### Sorting (Bonus)

**Sidebar UI is provided you have to write the logic**

- Sort the products on homepage based on discount
- While clicking the sorting radio buttons the products should sorted and updated in UI accordingly
- On sorting in increasing or decreasing order, the store should also be updated accordingly.

### General Instructions:

- Do not remove `data-cy=’xxx` or `data-testid=xxx` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
- You need to submit Github Link as well as Netlify/Vercel Link on Course Platform
- Ensure that the GitHub link is correct. Share the link from where the package.json exists

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding
- So we request you to read the problem carefully and debug before itself.
