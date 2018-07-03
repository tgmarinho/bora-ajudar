const request = require('request-promise')
const parse = require('xml2js').parseString

const email = 'xx@gmail.com' // pagseguro
const token = '91873213b21hb321g3213213213' // token pagseguro

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
            console.log(json)
        })
    })