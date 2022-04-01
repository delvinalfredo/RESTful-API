const connection = require('../config/connection');

const Store = function(store){
    this.name     = store.name;
    this.quantity = store.quantity;
    this.status   = store.status;
}

//get all orders
Store.getAllOrders = (result) =>{
    connection.query('SELECT * FROM store', (err, res)=>{
        if(err){
            console.log('Error while fetching orders', err);
            result(null,err);
        }else{
            console.log('Orders fetched successfully');
            result(null,res);
        }
    })
}

Store.getOrdersByID = (id, result)=>{
    connection.query('SELECT * FROM store WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching orders by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Store;