'use strict';

exports.getProduct = (req, res) => {
    res.send('getProduct');
}

exports.getProductById = (req, res) => {
    //res.send('getProductById');
    /*
    if (!req.params.id) {
      res.json({error:400, message: 'id not be null'}).status(400);
    }
    */
    res.json({ error:false, 
               message: `id ${req.params.id}`
               //query: `query ${req.query.hola}`
            }).status(200);

}

exports.postProduct = (req, res) => {
    res.send('postProduct');
}


//module.exports = { getProduct, postProduct };