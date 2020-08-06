const express = require(`express`);
const exphbs = require(`express-handlebars`);
const routes = require(`./controllers/burgers_controller`);

const app = express();
const PORT = process.env.PORT || 8080;
// Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

// Handlebars
app.engine(`handlebars`, exphbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);
// Routes
app.use(routes);

//Port
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
