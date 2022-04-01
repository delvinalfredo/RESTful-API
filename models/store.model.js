const connection = require("../config/connection");

const Store = function (store) {
  this.name = store.name;
  this.quantity = store.quantity;
  this.status = store.status;
};

//get all orders
Store.getAllOrders = (result) => {
  connection.query("SELECT * FROM store", (err, res) => {
    if (err) {
      console.log("Error while fetching orders", err);
      result(null, err);
    } else {
      console.log("Orders fetched successfully");
      result(null, res);
    }
  });
};

Store.getOrdersByID = (id, result) => {
  connection.query("SELECT * FROM store WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching orders by id", err);
      // result(null, err);
    } else {
      console.log("OrdersById fetched successfully successfully");
      result(null, res);
    }
  });
};

Store.createOrders = (id, ordersReqData, result) => {
  connection.query(
    "UPDATE store SET name=?,quantity=?,status=? WHERE id = ?",
    [ordersReqData.name, ordersReqData.quantity, ordersReqData.status, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating the order");
        result(null, err);
      } else {
        console.log("Order updated successfully");
        result(null, res);
      }
    }
  );
};

Store.updateOrders = (id, orderReqData, result) => {
  connection.query(
    "UPDATE store SET name=?,quantity=?,status=? WHERE id = ?",
    [
    orderReqData.name,
    orderReqData.quantity,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the order");
        result(null, err);
      } else {
        console.log("Order updated successfully");
        result(null, res);
      }
    }
  );
};

Store.deleteOrders = (id, result)=>{
    connection.query("UPDATE store SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the order');
            result(null, err);
        }else{
            console.log("Order deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Store;
