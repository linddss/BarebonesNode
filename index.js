var express = require("express")
var app = express()

app.use(express.static(__dirname))

app.set('view engine', 'pug')

app.get("/",(request, response) => {
    response.render(
	"index",
	{
		title: "Barebones App",
		message: "Body of my app!"
	})
})

app.listen(3000, () => {
    console.log("Listening on port: 3000")
})
