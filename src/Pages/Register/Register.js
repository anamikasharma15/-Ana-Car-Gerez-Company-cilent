// import React, { useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // import useContexts from "./../hooks/useContexts.js";
// import useAuth from "../../hooks/useAuth";

// const Register = () => {
//   const { useState } = useAuth();
//   const { newUser, setNewUser, registerUser } = useState;

//   function inputChangeHandler(e) {
//     const name = e.target.name;
//     const value = e.target.value;
//     const extractedUser = { ...newUser };
//     extractedUser[name] = value;
//     setNewUser(extractedUser);
//   }

//   function registerHandaler(e) {
//     registerUser();
//     e.target.reset();
//     e.preventDefault();
//   }

//   return (
//     <>
//       <Container
//         style={{
//           height: "calc(100vh - 56px)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div style={{ maxWidth: "500px", width: "100%" }}>
//           <h2 className="text-center">Register Now</h2>
//           <Form
//             onSubmit={registerHandaler}
//             style={{ maxWidth: "500px", width: "100%" }}
//           >
//             <Form.Group className="mb-3" controlId="formBasicName">
//               <Form.Label>Your Name</Form.Label>
//               <Form.Control
//                 required
//                 onChange={inputChangeHandler}
//                 name="name"
//                 type="text"
//                 placeholder="Enter your name"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 required
//                 onChange={inputChangeHandler}
//                 name="email"
//                 type="email"
//                 placeholder="Enter email"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 required
//                 onChange={inputChangeHandler}
//                 name="password"
//                 type="password"
//                 placeholder="Password"
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Comfirm Password</Form.Label>
//               <Form.Control
//                 required
//                 onChange={inputChangeHandler}
//                 name="password"
//                 type="password"
//                 placeholder="Password"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPhoto">
//               <Form.Label>Photo Url</Form.Label>
//               <Form.Control
//                 required
//                 onChange={inputChangeHandler}
//                 name="photoUrl"
//                 type="text"
//                 placeholder="Enter your photo url"
//               />
//             </Form.Group>

//             <Button variant="success" className="w-100" type="submit">
//               Register Now
//             </Button>
//           </Form>
//           <p className="text-center mt-2">
//             Already registered? <Link to="/login">Please Login now</Link>
//           </p>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogIn from '../../hooks/useLogIn';

const Register = () => {
   const { user, error, setError } = useAuth();
   const [isRegister, setIsRegister] = useState(false);
   const { NameChange, emailChange, passChange, handleLogIn, handleRegister, handleGoogle } = useLogIn();


   const ToggleCheakbox = (e) => {
      setError('')
      setIsRegister(e.target.checked)
   };



   return (
      !user?.email ?
         <div className="mt-5">
            <h1 className='bg-success text-light py-2 text-center'>Please Register Now</h1>
            <div className='w-75 mx-auto'>
               <Form>
                  {
                     isRegister ?
                        <Form.Group className="mb-3" controlId="formBasicText">
                           <Form.Label>User Name</Form.Label>
                           <Form.Control onBlur={NameChange}
                            type="text"
                             placeholder="Enter User Name" required />
                        </Form.Group>
                        :
                        <div></div>
                  }
                  <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Your Name</Form.Label>
               <Form.Control
                 required
                 onChange={NameChange}
                 name="name"
                type="text"
                placeholder="Enter your name"
               />
             </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control required onBlur={emailChange} type="email" placeholder="Enter email" />
                     <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control onBlur={passChange} type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Confirm Password</Form.Label>
                     <Form.Control onBlur={passChange} type="password" placeholder="Confirm Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check onChange={ToggleCheakbox} type="checkbox" label="Not Registered ?" />
                  </Form.Group>

                  {
                     !isRegister ?
                        <Button onClick={handleLogIn} variant="primary" type="submit">Register In</Button>
                        :

                        <Button onClick={handleRegister} variant="primary" type="submit">Register</Button>
                  }

               </Form>
               <h3 className="text-center mt-2">
             Already registered? <Link to="/login">Please Login now</Link>
           </h3>
           <p className="text-center mt-3">----------------Or----------------</p>
          <div className="text-center"></div>
            </div>
            <div className='w-50 my-3 mx-auto text-center'>
               <button className="btn btn-success  text-center" onClick={handleGoogle}>Log in Using Google</button>
            </div>
            <h4 className="ms-4 text-danger">{error}</h4>
         </div>
         :
         < div >
            <h2>You are Successfully Logged In</h2>
         </div >
   );
};

export default Register;  
   