const Express = require("express")
const BodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectID
const cors = require("cors")

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config()
}

const CONNECTION_URL = process.env.MONGOLAB_URI
const DATABASE_NAME = "comics"

const app = Express()

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(cors())

let database
let collection

app.listen(process.env.PORT || 3000, () => {
	MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
		if (error) {
			throw error
		}
		database = client.db(DATABASE_NAME)
		collection = database.collection("comicList")
		console.log("Connected to `" + DATABASE_NAME + "`!")
	})
})

app.get("/comics", (request, response) => {
	collection.find({}).toArray((error, result) => {
		if (error) {
			return response.status(500).send(error)
		}
		console.log("RES", result)
		response.send(result)
	})
})

app.post("/comic", (request, response) => {
	console.log("REQ", request.body)
	collection.insert(request.body, (error, result) => {
		if (error) {
			return response.status(500).send(error)
		}
		response.send(result.result)
	})
})
