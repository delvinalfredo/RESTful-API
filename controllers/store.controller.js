const modelStores = require('../models/store.model')

exports.getOrders = (req, res)=> {
    modelStores.getAllOrders((err, store) =>{
        if(err)
        res.send(err);
        res.send(store)
    })
}

exports.getOrdersByID = (req, res)=>{
    modelStores.getOrdersByID(req.params.id, (err, store)=>{
        if(err)
        res.send(err);
        res.send(store);
    })
}