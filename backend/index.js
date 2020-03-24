const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    return response.json(
    {
        "evento":"Semana Omnistack",
        "aluna":"Aline Vitória"

    });
} );

app.listen(3333);
