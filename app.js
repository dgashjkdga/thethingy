const express = require('express')
const app = express()
const port = 3000
const { Webhook } = require('discord-webhook-node')
const hook = new Webhook("https://discord.com/api/webhooks/1466218474094329953/frL3wiiuuleDQtIzniCJc1TF3coY-lgAam2vicp9rRrmcyXKzjkKUiVqQkK32WEilo2U")

hook.send("hi")
app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/', (request, response) => {
	response.send('webhook request made')
	console.log(`POST request recieved!`)
	console.log(JSON.stringify(request))

})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})