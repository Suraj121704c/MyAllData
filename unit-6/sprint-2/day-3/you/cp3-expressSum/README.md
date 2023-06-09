# Express - Sum

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ It should return the sum of the two query parameters - 2 marks
 ✅ It should return the sum of negative numbers - 2 marks
 ✅ It should return 0 if both query parameters are 0 - 2 marks
 ✅ It should return an error if no query parameters are passed - 2 marks
 ✅ It should return an error if "a" and "b" are not  valid numbers - 2 marks
 ✅ It should return an error if 'a' is not a valid number- 2 marks
 ✅ It should return an error if 'b' is not a valid number- 2 marks

```

## Installation

- Node Version v16.16.0
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Folder structure

- `__tests__`
  - app.test.js
- app.js
- package.json
- README.md

# **Problem Statement**

As a user, you are expected to create an endpoint **`/sum`** that accepts two values **`a`** and **`b`** as query parameters and returns the sum of **`a`** and **`b`** as the response.

## **Requirements**

- The endpoint should accept two query parameters **`a`** and **`b`**.
- Both **`a`** and **`b`** should be numbers.
- If either **`a`** or **`b`** is not a number, the endpoint should return an error message indicating which parameter is invalid.
- If both **`a`** and **`b`** are not provided, the endpoint should return an error message indicating that both parameters are required.

## **Examples**

Here are some examples of how the endpoint should behave:

### **Example 1**

**Input:**

```
Copy code
GET /sum?a=2&b=3

```

**Output:**

```
Copy code
{ "sum": 5 }

```

### **Example 2**

**Input:**

```
Copy code
GET /sum?a=-4&b=5

```

**Output:**

```
Copy code
{ "sum": 1 }

```

### **Example 3**

**Input:**

```
Copy code
GET /sum?a=0&b=0

```

**Output:**

```
Copy code
{ "sum": 0 }

```

### **Example 4**

**Input:**

```
Copy code
GET /sum

```

**Output:**

```
Copy code
{ "error": "Both \"a\" and \"b\" are required parameters" }

```

### **Example 5**

**Input:**

```
Copy code
GET /sum?a=abc&b=2

```

**Output:**

```
Copy code
{ "error": "\"a\" is not a valid number" }

```

### **Example 6**

**Input:**

```
Copy code
GET /sum?a=2&b=def

```

**Output:**

```
Copy code
{ "error": "\"b\" is not a valid number" }

```

### **Example 7**

**Input:**

```
Copy code
GET /sum?a=abc&b=ab

```

**Output:**

```
Copy code
{ "error": "Both \"a\" and \"b\" must be numbers" }

```

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
