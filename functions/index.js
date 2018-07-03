import { user } from 'firebase-functions/lib/providers/auth';

const functions = require('firebase-functions');

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.user(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Bora ajudar server')
})

app.post('/donate', (req, res) => {
    res.send(req.body)
})

exports.api = functions.https.onRequest(app)
