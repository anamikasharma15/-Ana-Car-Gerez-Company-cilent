// import React, { useEffect, useState } from 'react';
// import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
// import useFirebase from "../hooks/useFirebase";

// const MyOrders = () => {
//   const { user } = useFirebase();
//   const [booking, setBooking] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/myOrder/${user?.email}`)
//       .then((res) => res.json())
//       .then(data => console.log(data));

      
//   }, [user?.email]);

//   return (
//     <div>
//       <h1 className="text-center">My Orders</h1>
// <Container className="my-5">
//                 <Row>
//                     {
//                         booking.map((bookings, index) => (
//                             <Col 
//                                 key={bookings?._id}
//                                 md={6}
//                             >
//                                 <div className="mb-4">
//                                     <Card>
//                                     <Card.Header>{bookings?.location}</Card.Header>
//                                     <ListGroup variant="flush">
//                                         <ListGroup.Item>{bookings?.user_name}</ListGroup.Item>
//                                         <ListGroup.Item>{bookings?.email}</ListGroup.Item>
//                                         <ListGroup.Item>{bookings?.price}</ListGroup.Item>
//                     {/* <button
//                    onClick={() => handleDelete(bookings?._id)}                   className="btn btn-danger"                 >
//                    Cancel
//                  </button> */}
//                                     </ListGroup>
//                                     </Card>
//                                 </div>
//                             </Col>
//                         ) )
//                     }
//                 </Row>
//             </Container>
            

//      </div>
//    );
//  };

//  export default MyOrders;

import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const [deleteOrder, setDeleteOrder] = useState(false)
    const {user} = useAuth()

    useEffect(() =>{
        fetch(`https://calm-sands-82191.herokuapp.com/cart?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            
            setMyOrders(data)
            console.log(data);
        })
    },[deleteOrder])


    const handleOrderDelete = id =>{
        const url =`https://calm-sands-82191.herokuapp.com/deletedOrder/${id}`
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
        <div>
            <h1 className='text-center mb-4'>You Order have placed {myOrders.length} order</h1>
            <div>
                {
                    myOrders.map(myOrder => 
                    <div key={myOrder._id} className='orderDesign'>    
                        <p className='text-danger'>{myOrder?.createdAt}</p>
                        <h4>{myOrder?.email}</h4>
                        <p>{myOrder?.adress}</p>
                        <button onClick ={() => handleOrderDelete(myOrder._id)} className="btn btn-design" type="button">Delete</button>
                    </div> )
                }
            </div>
        </div>
    );
};

export default MyOrders;



// import React, { useEffect, useState } from 'react';
// import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
// import useAuth from '../hooks/useAuth';

// const MyOrders = () => {
//     const { user } = useAuth();
//     const [booking, setBooking] = useState([]);
//     const [control, setConrol] = useState(false);

//     useEffect(() => {
//         fetch(`http://localhost:5000/myOrder/${user?.email}`)
//         .then(res => res.json())
//         .then(data => setBooking(data));
        
        
//     }, [setBooking]);

// console.log(booking);

//     const handleDelete = (id) => {
//         fetch(`http://localhost:5000/deleteOrder/${id}`, {
//         method: "DELETE",
//         headers: { "content-type": "application/json" },
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             if (data.deletedCount) {
//             setConrol(!control);
//             } else {
//             setConrol(false);
//             }
//         });
//         console.log(id);
//     };
//     return (
//         <div>
//             <div className="border-bottom  border-1 my-5 text-center">
//                 <h2 className="fs-2 fw-bold mb-5">My Orders</h2>
//             </div>
            
//             <Container className="my-5">
//                 <Row>
//                     {
//                         booking.map((bookings, index) => (
//                             <Col 
//                                 key={bookings?._id}
//                                 md={6}
//                             >
//                                 <div className="mb-4">
//                                     <Card>
//                                     <Card.Header>{bookings?.location}</Card.Header>
//                                     <ListGroup variant="flush">
//                                         <ListGroup.Item>{bookings?.user_name}</ListGroup.Item>
//                                         <ListGroup.Item>{bookings?.email}</ListGroup.Item>
//                                         <ListGroup.Item>{bookings?.price}</ListGroup.Item>
//                     <button
//                    onClick={() => handleDelete(bookings?._id)}                   className="btn btn-danger"                 >
//                    Cancel
//                  </button>
//                                     </ListGroup>
//                                     </Card>
//                                 </div>
//                             </Col>
//                         ) )
//                     }
//                 </Row>
//             </Container>
            
//         </div>
//     );
// };

// export default MyOrders;





// import React, { useEffect, useState } from "react";

// const MyOrders = () => {
//   const email = sessionStorage.getItem("email");
//   const [services, setServices] = useState([]);

//   const [control, setControl] = useState(false);

//   useEffect(() => {
//     fetch(`http://localhost:5000/myOrders/${email}`)
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);

//   const handleDelete = (id) => {
//     fetch(`http://localhost:5000/deleteOrder/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.deletedCount) {
//           setControl(!control);
//         }
//       });
//     console.log(id);
//   };

//   return (
//     <div>
//       <h1 className="text-center">My orders </h1>

//       <div className="services">
//         <div className="row container">
//           {services?.map((pd) => (
//             <div className="col-md-4">
//               <div className="service border border p-3">
//                 <div className="services-img ">
//                   <img className="w-100" src={pd?.image} alt="" />
//                 </div>

//                 <h6>{pd?.name}</h6>
//                 <h4>{pd?.model}</h4>
//                 <p>{pd?.description}</p>
//                 <h3 className="text-danger"> Cost :{pd?.price}$</h3>

//                <button
//                   onClick={() => handleDelete(pd?._id)}
//                   className="btn btn-danger"
//                 >
//                   Cancel
//                 </button> 
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;
