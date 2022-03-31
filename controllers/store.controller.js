const modelStores = require('../models/store.model')

exports.getOrders = (req, res)=> {
    modelStores.getAllOrders((err, store) =>{
        // console.log('We are here');
        if(err)
        res.send(err);
        // console.log('Orders', store);
        res.send(store)
    })
}