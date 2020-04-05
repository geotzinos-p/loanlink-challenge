// Packages
const graphqlHTTP = require('express-graphql');
// Middlewares
const { checkToken } = require('./middleware/authentication');
// Routes
const { authenticationRouter } = require("./routes")
// Graphql routes
const graphqlSchema = require('./routes/graphql/thermostat/thermostat-schema');
const graphqlResolvers = require('./routes/graphql/thermostat/thermostat-resolver');
// Config
const { WebServer } = require("./config/web-server")
//const {Database} = require("./config/database")

const app = new WebServer().setup();
//Database.connect();

app.use('/graphql', checkToken, graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
    customFormatErrorFn(error) {
        return error;
    }
}));

app.use('/auth', authenticationRouter)

// Listen
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));

