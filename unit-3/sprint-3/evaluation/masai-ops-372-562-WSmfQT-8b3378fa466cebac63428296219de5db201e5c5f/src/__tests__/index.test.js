
import fetch from "isomorphic-fetch";
import config from "../config.js";
import { getProducts, getProductsSortedByPrice, getWellFormattedData } from "../index.js";

let baseURL = config.baseURL;
global.score = 1;

describe("fetch and format products", function () {
  it("fetches product data", async () => {
    let a = await fetch(`${baseURL}`),
      b = await a.json(),
      c = b.data,
      d = await getProducts();
    d = d || [];
    expect(d).toMatchObject(c);
    global.score += 3;
  });

  it("sorts product data by price", async () => {
    let a = await getProductsSortedByPrice();
    a = a || [];
    let b = !0,
      c = 0;
    for (let d of a)
      if (c <= d.price) c = d.price;
      else {
        b = !1;
        break;
      }
    expect(a.length).not.toBe(0);  
    expect(b).toBe(!0);
    global.score += 3;
  });

  it("re-formats data as object", async () => {
    let a = await fetch(`${baseURL}`),
      b = await a.json(),
      c = b.data,
      d = c.reduce(
        (a, b) => ((a[b.brand] = a[b.brand] || []), a[b.brand].push(b.id), a),
        {}
      ),
      e = await getWellFormattedData();
    e = e || [];
    expect(e).toMatchObject(d);
    global.score += 3;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
