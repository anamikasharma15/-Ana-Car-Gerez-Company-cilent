// import React from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// const LogIn = () => {
//   const { useState } = useAuth();
//   const { googleSignIn } = useState;

//   const { newUser, setNewUser, login } = useState;

//   function inputChangeHandler(e) {
//     const name = e.target.name;
//     const value = e.target.value;
//     const extractedUser = { ...newUser };
//     extractedUser[name] = value;
//     setNewUser(extractedUser);
//   }

//   function logInHandaler(e) {
//     login();
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
//           <h2 className="text-center">Login Now</h2>
//           <Form
//             onSubmit={logInHandaler}
//             style={{ maxWidth: "500px", width: "100%" }}
//           >
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 onChange={inputChangeHandler}
//                 name="email"
//                 type="email"
//                 placeholder="Enter email"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 onChange={inputChangeHandler}
//                 name="password"
//                 type="password"
//                 placeholder="Password"
//               />
//             </Form.Group>

//             <Button variant="success" className="w-100" type="submit">
//               Login
//             </Button>
//           </Form>
//           <p className="text-center mt-2">
//             New user? <Link to="/register">Register now</Link>
//           </p>
//           <p className="text-center mt-3">----------------Or----------------</p>
//           <div className="text-center">
//              <button onClick={googleSignIn} className="btn btn-primary">
//               Log in with Google
//             </button>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default LogIn;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogIn from '../../hooks/useLogIn';

const LogIn = () => {
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
            <h1 className='bg-success text-light py-2 text-center'>Please {!isRegister ? 'Log In' : 'Register'}</h1>
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
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check onChange={ToggleCheakbox} type="checkbox" label="Not Registered ?" />
                  </Form.Group>

                  {
                     !isRegister ?
                        <Button onClick={handleLogIn} variant="primary" type="submit">Log In</Button>
                        :

                        <Button onClick={handleRegister} variant="primary" type="submit">Register</Button>
                  }

               </Form>
               <h3 className="text-center mt-2">
            New user? <Link to="/register">Register now</Link>
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

export default LogIn;  
   




// import React from 'react';
// import { Link, useLocation, useHistory } from 'react-router-dom';

// import login from '../../images/login/login.jpg'
// import useAuth from '../hooks/useAuth';
// import './Login.css'

// const LogIn = () => {
//     const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error, toggle, isLogin } = useAuth();
//     const history = useHistory();

//     const location = useLocation();

//     const redirect_url = location.state?.from || '/home';

//     const googleLogin = () => {
//         signInUsingGoogle()
//             .then(result => {
//                 history.push(redirect_url)
//             })
//     }


//     return (
//         <div>
//             <div>
//                 <div className='container'>
//                     <div className="row">
//                         <div className='col-md-6 col-lg-6 col-12 d-flex align-items-center'>
//                             <div className='login-form'>
//                                 <h2>Please {isLogin ? 'Login' : 'Register'}</h2>
//                                 <br />
//                                 <form onSubmit={handleRegistration}>

//                                     <input onBlur={handleEmailChange} className='input-field' type="email" placeholder='Email here' required />
//                                     <br />

//                                     <input onBlur={handlePasswordChange} className='input-field' type="password" placeholder='Password here' required />
//                                     <br />

//                                     <div className="d-grid gap-2 ">
//                                         <input className='btn btn-design' type="submit" value={isLogin ? "Login" : "Registered"} />
//                                     </div>

//                                     {/* toggle */}
//                                     <div className="form-check mt-4">
//                                         <input onChange={toggle} className="form-check-input" type="checkbox" id="gridCheck1" />
//                                         <label className="form-check-label" htmlFor="gridCheck1">
//                                             Already Registered?
//                                         </label>
//                                     </div>
//                                     {/* toggle */}


//                                 </form>
//                                 <p className='text-danger'>{error}</p>
//                                 <br />Or

//                                 <div className="d-grid gap-2 ">
//                                     <button onClick={googleLogin} className='btn btn-design2'>Google Sign in </button>
//                                 </div>
//                                 <br />

//                             </div>
//                         </div>

//                         <div className="col-md-6 col-12">
//                             <img width='100%' src={login} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LogIn;