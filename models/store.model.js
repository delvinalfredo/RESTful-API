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
            // result.status(400).json(err)
        }else{
            console.log('Orders fetched successfully');
            result(null,res);
            // result.status(200).json(result)
        }
    })
}

module.exports = Store;