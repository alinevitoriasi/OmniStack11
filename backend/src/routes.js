const express = require('express');
const routes = express.Router();    

routes.post('/users',(request,response)=>{
    const body = request.body;

    console.log(body);

    return response.json({
        "evento":"Semana Omnistack",
        "aluna":"Alice Vitória"
    });
} );

module.exports = routes;