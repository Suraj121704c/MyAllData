## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work

```
✅ Able to submit the app - 1 mark ( minimum score );
✅ check Type of areasDirectory - 1 mark;
✅ check areasDirectory - 2 marks; 
✅ check Type of outputArray - 2 marks; 
✅ check outputArray - 4 marks;  

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.
- Run **npm run watch** for the test cases(Watch mode).
- Run **npm run build** to Build



## Problem Description

- reduce the `areas` array to match the `areasDirectory` object
- map the `inputArray` array to match the `outputArray` array

In case of `areas`, the id become the keys and the name become the values in the `areasDirectory`

## Provided Input of `areas`:

```
[
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
]
```

## Expected Output of `areasDirectory`:

```
{
    1: "British",
    2: "Malaysian"
}
```

In case of `inputArray`,

- idMeal maps to productId
- strMeal maps to productTitle
- Category maps to Category, but the id turns into the name
- Area maps to Area, but the id turns into the name
- finally, 20 strIngredients & 20 strMeasures turns into a single entry of `Ingredients` which is an array of object. Each object of `Ingredients` contains a key called `ingredient` and another key called `measure`.

## Provided Input of `inputArray`:

```
[
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
    strIngredient1: "digestive biscuits",
    strIngredient2: "butter",
    strIngredient3: "Bramley apples",
    strIngredient4: "butter, softened",
    strIngredient5: "caster sugar",
    strIngredient6: "free-range eggs, beaten",
    strIngredient7: "ground almonds",
    strIngredient8: "almond extract",
    strIngredient9: "flaked almonds",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/3oz",
    strMeasure3: "200g/7oz",
    strMeasure4: "75g/3oz",
    strMeasure5: "75g/3oz",
    strMeasure6: "2",
    strMeasure7: "75g/3oz",
    strMeasure8: "1 tsp",
    strMeasure9: "50g/1¾oz",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
    strIngredient1: "Milk",
    strIngredient2: "Oil",
    strIngredient3: "Eggs",
    strIngredient4: "Flour",
    strIngredient5: "Baking Powder",
    strIngredient6: "Salt",
    strIngredient7: "Unsalted Butter",
    strIngredient8: "Sugar",
    strIngredient9: "Peanut Butter",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "200ml",
    strMeasure2: "60ml",
    strMeasure3: "2",
    strMeasure4: "1600g",
    strMeasure5: "3 tsp",
    strMeasure6: "1/2 tsp",
    strMeasure7: "25g",
    strMeasure8: "45g",
    strMeasure9: "3 tbs",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: ""
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
    strIngredient1: "plain flour",
    strIngredient2: "chilled butter",
    strIngredient3: "cold water",
    strIngredient4: "raspberry jam",
    strIngredient5: "butter",
    strIngredient6: "caster sugar",
    strIngredient7: "ground almonds",
    strIngredient8: "free-range egg, beaten",
    strIngredient9: "almond extract",
    strIngredient10: "flaked almonds",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "175g/6oz",
    strMeasure2: "75g/2½oz",
    strMeasure3: "2-3 tbsp",
    strMeasure4: "1 tbsp",
    strMeasure5: "125g/4½oz",
    strMeasure6: "125g/4½oz",
    strMeasure7: "125g/4½oz",
    strMeasure8: "1",
    strMeasure9: "½ tsp",
    strMeasure10: "50g/1¾oz",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null
  }
]
```

## Expected Output of `outputArray`:

```
[
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
]
```


## Boilerplate

- Do not change the given folder structure
- You can code under the src folder in a filename index.js.
- you can find the testcases in src under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time