const express = require('express')
const BodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(BodyParser.json())
const { Webhook, MessageBuilder } = require('discord-webhook-node')
const hook = new Webhook("https://discord.com/api/webhooks/1466218474094329953/frL3wiiuuleDQtIzniCJc1TF3coY-lgAam2vicp9rRrmcyXKzjkKUiVqQkK32WEilo2U")

hook.send("Initialized")
app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/', (request, response) => {
	response.send('webhook request made')
	console.log(`POST request recieved!`)
	webhookmsg = new MessageBuilder()
	.setTitle('Oracle Incorporated')
	.addField('Game Name: '+'```'+request.body.gamename+'```', "")
	.addField('Game Owner: '+'```'+request.body.creatorname+'```', "")
	.addField('Game ID: '+'```'+request.body.gameid+'```', "")
	.addField('Server Player Count: '+'```'+request.body.serverplayercount+'```', "")
	.addField('Javascript Join Code: ','```'+request.body.javascriptjoin+'```')
	.setColor('#c74634')
	hook.send(webhookmsg)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})