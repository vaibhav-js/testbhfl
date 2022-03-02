const express = require('express')
const app = express()

const port = process.env.PORT

app.use(express.json())

app.post('/bhfl', (req, res) => {
    if(!req.body.data || !req.body || !req) {
        return res.send({
            isSuccess: false,
            error: "some error occured."
        })
    }
    const data = [...req.body.data]
    var numbers = [], alphabet = [], number = 0, letter = ""
    for (var i = 0 ; i < data.length ; i++) {
        if (Number.isInteger(parseInt(data[i]))) {
            number = number*10 + parseInt(data[i])
            if (i < data.length - 1 && data[i+1] == '”') {
                numbers.push(JSON.stringify(number))
                number = 0
            }
        }
        else if (data[i] != ',' && data[i] != '[' && data[i] != ']' && data[i] != '“' && data[i] != '”') {
            letter = letter + data[i]
            if (i < data.length - 1 && data[i+1] == '”') {
                alphabet.push(letter)
                letter = ""
            }
        }
    }

    return res.send({
        isSuccess: true,
        user_ID: "vaibhav_saxena_17042001",
        emailId: "vaibhavrajpianist@gmail.com",
        college_roll_number: 112212,
        numbers: numbers,
        alphabet: alphabet
    })
})

app.listen(port, ()=>{
    console.log("server running")
})