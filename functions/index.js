const functions = require('firebase-functions');
const admin = require('firebase-admin')

const express = require('express')
const bodyParser = require('body-parser')

const request = require('request-promise')
const parse = require('xml2js').parseString

const app = express()

// admin.initializeApp(functions.config().firebase)
admin.initializeApp()

const email = 'xx@gmail.com' // pagseguro
const token = '91873213b21hb321g3213213213' // token pagseguro
const checkoutUrl = 'https://ws.pagseguro.uol.com.br/v2/checkout/payment.html?code=';


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Bora ajudar server')

    const campanha = '1321321321321'
    const amount = '4.00'

    admin
        .database()
        .ref('/campanhas/' + campanha)
        .once('value')
        .then(value => {
            const campanhaAtual = value.val()
            const doado = parseFloat(campanhaAtual.doado) + parseFloat(amount)
            campanhaAtual.doado = doado.toFixed(2)

            admin
                .database()
                .ref('/campanhas/' + campanha)
                .set(campanhaAtual)
                .then(() => {
                    res.send(campanhaAtual)

                })




        });


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
})

app.post('/webhook', (req, res) => {
    const notificationCode = req.body.notificationCode
    const consultaNotification = 'https://ws.pagseguro.uol.com.br/v3/transactions/notifications/'
    request(consultaNotification + notificationCode + '?token' + token + '&email=' + email)
        .then(notificationXML => {
            parse(notificationXML, (err, transationJson) => {
                const transation = transationJson.transation
                const status = transation.status[0]
                const amount = transation.grossAmount[0]
                const campanha = transation.transation.items[0].item[0].id[0]


                // admin
                //     .database()
                //     .ref('/transactions/111')
                //     .set({ transation })
                //     .then(() => {})


                res.send('ok')
            })
        })

})

exports.api = functions.https.onRequest(app)
