import React from "react";

type Page = {
  pagename: string;
};

// accept the page name as prop here
export const Navbar = ({ pagename }: Page) => {
  return (
    <div>
      <h2>Product List</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-product-link" href="/add-product">
        Add Product
      </a>
      <h3 data-testid="page-name">{pagename}</h3>
    </div>
  );
};
