## React TS Product List

**Using TypeScript is mandatory**

## Submission Instructions [Please note]

- Before submitting make sure there is no error or warning in console.
- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Maximum Marks - 14

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ GET request is made on loading homepage to fetch the product data - 1 mark
 ✅ All the response from the server should be displayed on home page - 1 mark
 ✅ Correct page name should be displayed on the navbar on homepage - 1 marks.
 ✅ Correct page name should be displayed on the navbar on add-product page - 1 marks.
 ✅ Form should be present to take product input on add-product page - 1 marks.
 ✅ User should be able to add product to the database - 2 marks.
 ✅ Patch request should be made and DOM should be updated when like button is clicked - 2 marks.
 ✅ Patch request should be made and DOM should be updated when dislike button is clicked - 2 marks.
 ✅ Delete request should be made and DOM should be updated when delete button is clicked - 2 marks.

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

## Folder Structure

```
>src
├── >Components
│    └── Navbar.tsx
│    └── ProductCard.tsx
│    └── ProductList.tsx
├── >Pages
│    └── HomePage.tsx (Route:- "/")
│    └── AddProduct.tsx (Route:- "/add-product")
│    └── MainRoutes.tsx (Add all Routes here)
|
└── api.ts (Make all api calls here)
└── App.tsx
```

## Problem Statement

You have to make a product listing page where user can add product to database. They can like, dislike and delete a product.

### HomePage

- HomePage will have `Navbar` and `ProductList` component

### AddProduct page

- This page will have `Navbar` and a `form`(to accept product info)
- Provide a form here to accept data of products
- Using `form` tag is must.
- The form will have the following input fields

```
  1. input to accept name with class `product-name`
  2. input to accept image with class `product-image`
  3. input to accept brand with class `product-brand`
  4. input to accept price with class `product-price`
- Provide a `button` to submit with class`submit-form`
```

- On submitting make a POST request to the server and update the data.
- The structure of the product object will be

```
{
  name: "",
  brand: "",
  price: 0,
  image: "",
  like: 0,
  dislike: 0,
}
```

<img width="1726" alt="Screenshot 2023-03-24 at 9 31 13 AM" src="https://user-images.githubusercontent.com/74458714/227424569-badc05db-8b95-416f-bdce-9d3dfc88a997.png">

### Navbar

- It will accept the page name as a prop
- Correct page name should be displayed on every page.
- On Home Page :- `Home Page`
- On Add product page :- `Add Product Page`
- Show this page name in h3 tag with `data-testid=page-name`

### ProductList

- Here you will show the list of products in grid format
- Show all the products within div with class `product-list`
- Maintain a state for the products
  `const [products, setProducts] = useState([])`
- Map through the products using `ProductCard`
- Get request will be made when home page load and the `products` state will be updated.

<img width="1708" alt="Screenshot 2023-03-24 at 9 31 00 AM" src="https://user-images.githubusercontent.com/74458714/227424636-8eec67f6-8820-4ee5-9df1-148c7b23a837.png">

### ProductCard

- It will be used to display individual products.
- It will accept the `product data` and `setProducts` as prop, that will be passed from `ProductList`.
- Every product card will have class `product-card`
- It will contain the following

```
  1. Image with class `product-image`
  2. Name with class `product-name`
  3. Price with class `product-price`
  4. Brand with class `product-brand`
  5. Like button with `data-testid=like-button`
  6. Like count with class `product-like`
  7. Dislike button with `data-testid=dislike-button`
  8. Dislike count with class `product-dislike`
  9. Delete button with `data-testid=delete-button`
```

- On clicking like and dislike make patch request and update the server data.
- The change should also be reflected on the DOM.
- To reflect the change in the DOM do not make GET request after the PATCH or DELETE request.
- Use the `setProducts` and update the state here accordingly.

**Note:-**

- Do not make another get request after PATCH, or DELETE REQUEST
- To update the DOM use only the `setProducts` function, that will be accepted as a prop.
- Do not make another get request to update the DOM.
- See this answer on stack-overflow to get idea of the type required for `setProducts`

<img width="737" alt="Screenshot 2023-03-24 at 12 42 40 AM" src="https://user-images.githubusercontent.com/74458714/227424672-7108f50a-480c-40c6-a81f-5a4a28fa97f4.png">

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.

2. Do Not Remove ` data-testid="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.

3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks.

4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
