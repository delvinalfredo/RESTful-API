const modelStores = require('../models/store.model')

exports.getOrders = (req, res)=> {
    modelStores.getAllOrders((err, store) =>{
        if(err){
            res.send(err);
        } else{
            res.send(store);
        }  
    })
}

exports.getOrdersByID = (req, res)=>{
    modelStores.getOrdersByID(req.params.id, (err, store)=>{
        if(err){
            res.send(err);
        } else{
            res.send(store);
        }      
    })
}

exports.createNewOrders = (req, res) =>{
    const ordersReqData = new modelStores(req.body);
    console.log('ordersReqData', ordersReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        modelStores.createOrders(ordersReqData, (err, store)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Orders Created Successfully', data: store.insertId})
        })
    }
}

exports.updateOrders = (req, res)=>{
    const ordersReqData = new modelStores(req.body);
    console.log('ordersReqData update', ordersReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        modelStores.updateOrders(req.params.id, ordersReqData, (err, store)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Order updated Successfully'})
        })
    }
}

exports.deleteOrders = (req, res)=>{
    modelStores.deleteOrders(req.params.id, (err, store)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Order deleted successully!'});
    })
}