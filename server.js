const exphbs = require("express-handlebars");
const express = require('express')
var cors = require('cors')

let app = express();

let PORT = 3003;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('app/public'))
app.use(express.json());
app.use(cors())

require("./app/routing/apiRoutes.js")(app);

app.get('/', (req, res) => {
    res.render(`home`, {
    })
})
app.get('/survey', (req, res) => {
    res.render(`survey`, {
        questions() {
            return [
                'Do you enjoy watching movies?',
                'You are an animal person.',
                'You get carried away by fantasies and ideas.',
                'Loyality is extermly important to you.',
                'You believe Randy MochoMan Savage could be god.',
                'You are one of those people who say they listen to "everything" when it comes to music.',
                'You are an outdoorsy person.',
                'Hail Azathoth.',
                'You will pick a good book over any other forms of entertainment.',
                'You like Pina Coladas, and getting caught in the rain.',
            ]
        },
        helpers: {
            addOne(num) {
                return parseInt(num) + 1;
            }
        }
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${PORT}`)
});