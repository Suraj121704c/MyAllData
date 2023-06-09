const express = require('express');
const { connection } = require("./db");
const { userRouter } = require('./routes/User.routes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express()

app.use(express.json())

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Api Documentation',
            version: '1.0.0',
        },
    },
    // *.js means select all the files present in the folder
    apis: ['./routes/*.js'],
};

const specification = swaggerJsdoc(options);
app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(specification))

app.use("/users", userRouter)

app.listen(3000, async () => {
    try {
        await connection
        console.log("Connected to the DB");
    } catch (error) {
        console.log(error)
    }
    console.log("Running at port 3000...");
})