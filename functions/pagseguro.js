const request = require('request-promise')
const parse = require('xml2js').parseString

const email = 'xx@gmail.com' // pagseguro
const token = '91873213b21hb321g3213213213' // token pagseguro

/*
// checkout
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
            console.log(json.checkout.code[0])
        })
    })
  */

// webhoook -> pagseguro avisando q a transição foi realizada  
const notificationCode = '1321321321321-213-21321-321321-3213-21-321'
const consultaNotification = 'https://ws.pagseguro.uol.com.br/v3/transactions/notifications/'
request(consultaNotification + notificationCode + '?token'+token+'&email=' + email)
.then(notificationXML => {
    parse(notificationXML, (err, transationJson) => {
        const transation = transationJson.transation
        const status = transation.status[0] 
        const amount = transation.grossAmount[0]
        const campanha = transation.transation.items[0].item[0].id[0]
        
        console.log()
    })
})