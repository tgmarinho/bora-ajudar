const express = require('express')
const bodyParser = require('body-parser')
const functions = require('firebase-functions');

const request = require('request-promise')
const parse = require('xml2js').parseString

const app = express()

const email = 'xx@gmail.com' // pagseguro
const token = '91873213b21hb321g3213213213' // token pagseguro
const checkoutUrl = 'https://ws.pagseguro.uol.com.br/v2/checkout/payment.html?code=';


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Bora ajudar server')
})

app.post('/donate', (req, res) => {

    request({
        uri: "https://ws.pagseguro.uol.com.br/v2/checkout",
        method: 'POST',
        form: {
            token: token,
            email: email,
            currency: 'BRL',
            itemId1: 'idCampanha',
            itemDescription1: 'Doação 1',
            itemQuantity1: '1',
            itemAmount1: '2.00'
        },
        header: {
            'Content-Type': 'application/x-www-url-encoded; charset=UTF-8'
        }
    })
        .then(data => {
            parse(data, (err, json) => {
                res.send({
                    url: checkoutUrl + json.checkout.code[0]
                })
            })

        })

    exports.api = functions.https.onRequest(app)
