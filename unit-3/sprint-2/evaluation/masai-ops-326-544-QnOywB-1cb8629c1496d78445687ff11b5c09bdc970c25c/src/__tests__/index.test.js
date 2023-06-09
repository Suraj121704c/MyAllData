
import { areasDirectory, outputArray } from "../index";


global.score = 1;

describe("ObjectFactory", function () {

  let areasOutput = {
    1: "British",
    2: "Malaysian"
  };
  
  let outputArraysOutput = [
    {
      productId: "52768",
      productTitle: "Apple Frangipan Tart",
      Category: "Dessert",
      Area: "British",
      Ingredients: [
        {
          ingredient: "digestive biscuits",
          measure: "175g/6oz"
        },
        {
          ingredient: "butter",
          measure: "75g/3oz"
        },
        {
          ingredient: "Bramley apples",
          measure: "200g/7oz"
        },
        {
          ingredient: "butter, softened",
          measure: "75g/3oz"
        },
        {
          ingredient: "caster sugar",
          measure: "75g/3oz"
        },
        {
          ingredient: "free-range eggs, beaten",
          measure: "2"
        },
        {
          ingredient: "ground almonds",
          measure: "75g/3oz"
        },
        {
          ingredient: "almond extract",
          measure: "1 tsp"
        },
        {
          ingredient: "flaked almonds",
          measure: "50g/1¾oz"
        }
      ]
    },
    {
      productId: "53049",
      productTitle: "Apam balik",
      Category: "Dessert",
      Area: "Malaysian",
      Ingredients: [
        {
          ingredient: "Milk",
          measure: "200ml"
        },
        {
          ingredient: "Oil",
          measure: "60ml"
        },
        {
          ingredient: "Eggs",
          measure: "2"
        },
        {
          ingredient: "Flour",
          measure: "1600g"
        },
        {
          ingredient: "Baking Powder",
          measure: "3 tsp"
        },
        {
          ingredient: "Salt",
          measure: "1/2 tsp"
        },
        {
          ingredient: "Unsalted Butter",
          measure: "25g"
        },
        {
          ingredient: "Sugar",
          measure: "45g"
        },
        {
          ingredient: "Peanut Butter",
          measure: "3 tbs"
        }
      ]
    },
    {
      productId: "52767",
      productTitle: "Bakewell tart",
      Category: "Dessert",
      Area: "British",
      Ingredients: [
        {
          ingredient: "plain flour",
          measure: "175g/6oz"
        },
        {
          ingredient: "chilled butter",
          measure: "75g/2½oz"
        },
        {
          ingredient: "cold water",
          measure: "2-3 tbsp"
        },
        {
          ingredient: "raspberry jam",
          measure: "1 tbsp"
        },
        {
          ingredient: "butter",
          measure: "125g/4½oz"
        },
        {
          ingredient: "caster sugar",
          measure: "125g/4½oz"
        },
        {
          ingredient: "ground almonds",
          measure: "125g/4½oz"
        },
        {
          ingredient: "free-range egg, beaten",
          measure: "1"
        },
        {
          ingredient: "almond extract",
          measure: "½ tsp"
        },
        {
          ingredient: "flaked almonds",
          measure: "50g/1¾oz"
        }
      ]
    }
  ];

  test("areasDirectory to be of type", function () {
    expect(areasDirectory && typeof areasDirectory === "object").toBe(true);
    global.score++;
  });

  // marks: 2
  test("areasDirectory to be of value", function () {
    expect(areasDirectory).toMatchObject(areasOutput);
    global.score+=2;
  });

  // marks: 2
  test("outputArray's Ingredients to be of type", function () {
    expect(Array.isArray(outputArray[0].Ingredients)).toBe(true);
    global.score+=2
  });

  // marks: 4 or 5
  test("outputArray to be of value", function () {
    expect(outputArray).toMatchObject(outputArraysOutput);
    global.score+=4;
  });

afterAll(() => {
  console.log("Final Score is", global.score);
});

});
