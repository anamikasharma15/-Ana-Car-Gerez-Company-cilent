import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageProducts = () => {
  const [Products, setProducts] = useState([]);
  const { register, handleSubmit } = useForm();

  const [status, setStatus] = useState("");
  const [productId, setProductId] = useState("");
  const [deleteOrder, setDeleteOrder] = useState(false)

  console.log(status);
  useEffect(() => {
    fetch("https://calm-sands-82191.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [deleteOrder]);

  // const status = "apporved";
  const handleOrderId = (id) => {
    setProductId(id);
    console.log(id);
  };

//   const onSubmit = (data) => {
//     console.log(data, productId);
//     fetch(`http://localhost:5000/statusUpdate/${productId}`, {
//       method: "PUT",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => console.log(result));
//   };
const handleProductDelete = id =>{
    const url =`https://calm-sands-82191.herokuapp.com/deletedProduct/${id}`
    fetch(url, {
        method : 'DELETE',
        headers : {'content-type' : 'application/json'}
    })
    .then( res => res.json())
    .then(data => {
        if(data){
            window.confirm('Are you sure to delete this order?')
            setDeleteOrder(data)
        }
    })
}

  return (
    <div className="container">
      <h1 className="text-center">Manage Products {Products.length}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {Products?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.description}</td>
              <td>{pd.image}</td>
              <td>
                {/* <form onSubmit={handleSubmit(handleProductDelete)}>
                  <select
                    onClick={() => handleOrderId(pd?._id)}
                    {...register("status")}
                  >
                    <option value={pd?.status}>{pd?.status}</option>
                    <option value="approve">approve</option>
                    <option value="done">Done</option>
                  </select>
                  <input type="submit" />
                </form> */}
              </td>
              {/* <button  onClick = handleOrderDelete>Delete</button> */}
              <button className="btn bg-primary p-2">Delete</button>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageProducts;
