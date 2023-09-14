const { application } = require("express")

application.get('/',(require,res)=>{
    res.send('Hola GET')
})

application.post('/',(require,res)=>{
    res.send('Hola POST')
})

application.put('/',(require,res)=>{
    res.send('Hola PUT')
})

application.patch('/',(require,res)=>{
    res.send('Hola PATCH')
})

application.delete('/',(require,res)=>{
    res.send('Hola DELETE')
})
